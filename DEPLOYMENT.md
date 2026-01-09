# Next.js Standalone Deployment Guide

A reusable guide for deploying Next.js apps to resource-constrained servers (FreeBSD, weak x86 Linux, etc.) using local builds and minimal server-side overhead.

---

## Overview

**Problem**: Deploy Next.js to a weak server without running `npm install` or `next build` on the server.

**Solution**: Use Next.js `output: 'standalone'` mode to create a self-contained build (~240MB vs ~500MB+ with full node_modules), transfer it, and run with just `node server.js`.

---

## Step 1: Enable Standalone Output + Disable Image Optimization

> **CRITICAL FOR FREEBSD**: You MUST disable image optimization. Next.js uses `sharp` (native Linux binaries) which don't work on FreeBSD. You'll see `ELF binary type "0" not known` errors otherwise.

Add to `next.config.mjs`:

```javascript
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,  // REQUIRED for FreeBSD - disables sharp
    remotePatterns: [
      // your remote patterns...
    ],
  },
};
```

---

## Step 2: Create Combined HTTP+HTTPS Server

Create `server-standalone.js` in project root:

```javascript
// Combined HTTP + HTTPS Server for Next.js Standalone
// Based on Next.js's own standalone pattern
const path = require('path');
const fs = require('fs');
const { createServer: createHttpsServer } = require('https');

const dir = __dirname;

// Load config from standalone build (MUST be before requiring next)
const { config: nextConfig } = require(path.join(dir, '.next/required-server-files.json'));
process.env.__NEXT_PRIVATE_STANDALONE_CONFIG = JSON.stringify(nextConfig);

// Now require next modules (after setting config)
require('next');
const { startServer } = require('next/dist/server/lib/start-server');

const hostname = process.env.HOSTNAME || '0.0.0.0';
const httpPort = parseInt(process.env.PORT || '8081', 10);
const httpsPort = parseInt(process.env.HTTPS_PORT || '4431', 10);

// Check if SSL certs exist
const sslDir = path.join(__dirname, 'ssl');
const hasSSL = fs.existsSync(path.join(sslDir, 'privkey.pem')) && 
               fs.existsSync(path.join(sslDir, 'fullchain.pem'));

// Start the HTTP server using Next.js's startServer
startServer({
  dir,
  isDev: false,
  config: nextConfig,
  hostname,
  port: httpPort,
  allowRetry: false,
}).then((httpServer) => {
  console.log(`> Ready on http://${hostname}:${httpPort}`);

  // If SSL certs exist, create HTTPS proxy
  if (hasSSL) {
    const http = require('http');
    const httpsOptions = {
      key: fs.readFileSync(path.join(sslDir, 'privkey.pem')),
      cert: fs.readFileSync(path.join(sslDir, 'fullchain.pem')),
    };

    const httpsServer = createHttpsServer(httpsOptions, (req, res) => {
      const options = {
        hostname: '127.0.0.1',
        port: httpPort,
        path: req.url,
        method: req.method,
        headers: req.headers,
      };

      const proxyReq = http.request(options, (proxyRes) => {
        res.writeHead(proxyRes.statusCode, proxyRes.headers);
        proxyRes.pipe(res, { end: true });
      });

      proxyReq.on('error', (err) => {
        console.error('HTTPS proxy error:', err.message);
        res.statusCode = 502;
        res.end('Bad Gateway');
      });

      req.pipe(proxyReq, { end: true });
    });

    httpsServer.listen(httpsPort, hostname, () => {
      console.log(`> Ready on https://${hostname}:${httpsPort}`);
    });
  }
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
```

> **IMPORTANT**: This uses Next.js's `startServer` function which is the correct way for standalone builds. Using `next()` directly will fail with "Cannot find module webpack" errors.

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

## Step 4: Handle Prisma (If Used But Not Needed)

If your project has Prisma but you don't use it, you MUST stub it out or you'll get FreeBSD binary errors.

**Stub `src/app/libs/prismaDB.ts`:**
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

## Common Errors & Fixes

### 1. `ELF binary type "0" not known`
**Cause**: Linux binaries (sharp for image optimization) running on FreeBSD.
**Fix**: Add `images: { unoptimized: true }` to next.config.mjs

### 2. `Cannot find module 'next/dist/compiled/webpack/webpack'`
**Cause**: Using `next()` instead of `startServer()` in custom server.
**Fix**: Use the server-standalone.js pattern shown above with `startServer`.

### 3. `404 on /_next/image` routes
**Cause**: Image optimization not working with custom NextServer config.
**Fix**: Either use `startServer()` pattern OR add `unoptimized: true`.

### 4. `react-clipboard.js` TypeScript errors
**Cause**: Library doesn't support children prop in newer versions.
**Fix**: Replace with native `navigator.clipboard.writeText()`.

---

## Deployment

```bash
# Build locally (on Mac)
./deploy.sh

# Transfer to FreeBSD server
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
├── ssl/               # SSL certs (privkey.pem, fullchain.pem)
└── .env               # Environment variables
```

---

## Key Points Summary

1. **All heavy work happens locally** - build on Mac, not the server
2. **No npm install on server** - everything is bundled
3. **Single command to run** - just `node server.js`
4. **~240MB package** (vs ~500MB+ full node_modules)
5. **HTTP + HTTPS from same server.js** - ports configurable via env
6. **ALWAYS use `unoptimized: true`** for FreeBSD deployments
7. **Use `startServer()`** not `next()` for standalone custom servers
