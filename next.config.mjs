import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
    ],
  },
  server: {
    https: {
      key: fs.readFileSync(path.join(__dirname, 'ssl/privkey.pem')),
      cert: fs.readFileSync(path.join(__dirname, 'ssl/fullchain.pem')),
    },
  }
};

export default nextConfig;
