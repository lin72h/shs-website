#!/bin/bash
set -e

# ============================================================
# Next.js Standalone Deployment Script
# Builds locally and prepares package for weak server deployment
# ============================================================

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}=== Next.js Standalone Deployment Build ===${NC}"

# Check we're in the right directory
if [ ! -f "package.json" ]; then
    echo -e "${RED}Error: package.json not found. Run this from the project root.${NC}"
    exit 1
fi

# Step 1: Build Next.js in standalone mode
echo -e "${YELLOW}Step 1: Building Next.js (standalone mode)...${NC}"
yarn build

# Step 2: Prepare the deployment package
echo -e "${YELLOW}Step 2: Preparing deployment package...${NC}"

# Check if standalone was created
if [ ! -d ".next/standalone" ]; then
    echo -e "${RED}Error: .next/standalone not found. Is output: 'standalone' set in next.config.mjs?${NC}"
    exit 1
fi

# Copy static files (required for standalone)
cp -r .next/static .next/standalone/.next/static
echo "  ✓ Copied .next/static"

# Copy public folder
cp -r public .next/standalone/public
echo "  ✓ Copied public folder"

# Replace server.js with combined HTTP+HTTPS version
cp server-standalone.js .next/standalone/server.js
echo "  ✓ Replaced server.js with combined HTTP+HTTPS version"

# Copy environment file if exists
if [ -f ".env" ]; then
    cp .env .next/standalone/.env
    echo "  ✓ Copied .env"
fi

# Copy SSL certificates if they exist (for custom server)
if [ -d "ssl" ]; then
    cp -r ssl .next/standalone/ssl
    echo "  ✓ Copied ssl folder"
fi

# Step 3: Create compressed archive for transfer
echo -e "${YELLOW}Step 3: Creating deployment archive...${NC}"
DEPLOY_ARCHIVE="deploy-$(date +%Y%m%d-%H%M%S).tar.gz"
tar -czf "$DEPLOY_ARCHIVE" -C .next standalone
ARCHIVE_SIZE=$(du -h "$DEPLOY_ARCHIVE" | cut -f1)
echo "  ✓ Created $DEPLOY_ARCHIVE ($ARCHIVE_SIZE)"

# Show deployment instructions
echo ""
echo -e "${GREEN}=== Build Complete ===${NC}"
echo ""
echo "Deployment package: $DEPLOY_ARCHIVE"
echo ""
echo "Transfer to server:"
echo "  scp $DEPLOY_ARCHIVE user@server:/path/to/"
echo ""
echo "On the server:"
echo "  tar -xzf $DEPLOY_ARCHIVE"
echo "  cd standalone"
echo "  node server.js"
echo ""
echo "With memory limit (for weak servers):"
echo "  NODE_OPTIONS='--max-old-space-size=256' node server.js"
echo ""
