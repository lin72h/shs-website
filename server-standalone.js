// Combined HTTP + HTTPS Server for Next.js Standalone
// Based on Next.js's own standalone server pattern

// IMPORTANT: Set production mode BEFORE requiring any modules
process.env.NODE_ENV = 'production';

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

  // If SSL certs exist, create HTTPS server that proxies to HTTP
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
