# Next.js Standalone Deployment Guide

A reusable guide for deploying Next.js apps to resource-constrained servers (FreeBSD, weak x86 Linux, etc.) using local builds and minimal server-side overhead.

---

## Overview

**Problem**: Deploy Next.js to a weak server without running `npm install` or `next build` on the server.

**Solution**: Use Next.js `output: 'standalone'` mode to create a self-contained build (~240MB vs ~500MB+ with full node_modules), transfer it, and run with just `node server.js`.

---

## Step 1: Enable Standalone Output

Add to `next.config.mjs`:

```javascript
const nextConfig = {
  output: 'standalone',
  // ... other config
};
```

---

## Step 2: Create Combined HTTP+HTTPS Server

Create `server-standalone.js` in project root:

```javascript
const { createServer: createHttpsServer } = require('https');
const { createServer: createHttpServer } = require('http');
const { parse } = require('url');
const path = require('path');
const fs = require('fs');
const next = require('next');

const dev = false;
const hostname = process.env.HOSTNAME || '0.0.0.0';
const httpPort = parseInt(process.env.PORT || '8081', 10);
const httpsPort = parseInt(process.env.HTTPS_PORT || '4431', 10);

const app = next({ dev, hostname, port: httpPort });
const handle = app.getRequestHandler();

// Check if SSL certs exist
const sslDir = path.join(__dirname, 'ssl');
const hasSSL = fs.existsSync(path.join(sslDir, 'privkey.pem')) && 
               fs.existsSync(path.join(sslDir, 'fullchain.pem'));

app.prepare().then(() => {
  // Start HTTP server
  createHttpServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  }).listen(httpPort, hostname, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${httpPort}`);
  });

  // Start HTTPS server if SSL certs exist
  if (hasSSL) {
    const httpsOptions = {
      key: fs.readFileSync(path.join(sslDir, 'privkey.pem')),
      cert: fs.readFileSync(path.join(sslDir, 'fullchain.pem')),
    };

    createHttpsServer(httpsOptions, async (req, res) => {
      try {
        const parsedUrl = parse(req.url, true);
        await handle(req, res, parsedUrl);
      } catch (err) {
        console.error('Error occurred handling', req.url, err);
        res.statusCode = 500;
        res.end('Internal Server Error');
      }
    }).listen(httpsPort, hostname, (err) => {
      if (err) throw err;
      console.log(`> Ready on https://${hostname}:${httpsPort}`);
    });
  }
});
```

---

## Step 3: Create Deploy Script

Create `deploy.sh`:

```bash
#!/bin/bash
set -e

echo "=== Building Next.js (standalone mode) ==="
yarn build

if [ ! -d ".next/standalone" ]; then
    echo "Error: .next/standalone not found"
    exit 1
fi

# Copy required assets
cp -r .next/static .next/standalone/.next/static
cp -r public .next/standalone/public
cp server-standalone.js .next/standalone/server.js

# Copy env and SSL if they exist
[ -f ".env" ] && cp .env .next/standalone/.env
[ -d "ssl" ] && cp -r ssl .next/standalone/ssl

# Create archive
DEPLOY_ARCHIVE="deploy-$(date +%Y%m%d-%H%M%S).tar.gz"
tar -czf "$DEPLOY_ARCHIVE" -C .next standalone

echo "Created: $DEPLOY_ARCHIVE"
echo ""
echo "On server:"
echo "  tar -xzf $DEPLOY_ARCHIVE && cd standalone && node server.js"
```

Make executable: `chmod +x deploy.sh`

---

## Step 4: Handle Prisma (If Used)

If your project uses Prisma and you DON'T need it, stub the module:

**`src/app/libs/prismaDB.ts`:**
```typescript
// Prisma is disabled
export const prisma = null;
```

**Stub all API routes that use Prisma:**
```typescript
import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { error: "Feature disabled" },
    { status: 503 }
  );
}
```

---

## Step 5: Fix Common TypeScript Issues

### react-clipboard.js children error
Replace with native clipboard API:
```tsx
const handleCopy = async () => {
  await navigator.clipboard.writeText(text);
};
// Use <button onClick={handleCopy}> instead of <Clipboard>
```

---

## Deployment

```bash
# Build locally
./deploy.sh

# Transfer to server
scp deploy-*.tar.gz user@server:/path/

# On server
tar -xzf deploy-*.tar.gz
cd standalone
node server.js
# HTTP: 8081, HTTPS: 4431
```

### Memory-limited servers
```bash
NODE_OPTIONS='--max-old-space-size=256' node server.js
```

---

## File Structure After Build

```
standalone/
├── server.js          # Combined HTTP+HTTPS server
├── .next/             # Compiled app
├── node_modules/      # Minimal deps only (~80 packages)
├── public/            # Static assets
├── ssl/               # SSL certs (if present)
└── .env               # Environment variables
```

---

## Key Points

1. **All heavy work happens locally** - build on your Mac, not the server
2. **No npm install on server** - everything is bundled
3. **Single command to run** - just `node server.js`
4. **~240MB package** (vs ~500MB+ full node_modules)
5. **HTTP + HTTPS from same server.js** - ports configurable via env
