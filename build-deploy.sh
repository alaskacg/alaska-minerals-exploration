#!/bin/bash
set -e

# Build the project
npm run build

# Create .nojekyll file to bypass Jekyll processing
touch dist/.nojekyll

# Copy sitemap and robots.txt to dist
cp public/sitemap.xml dist/
cp public/robots.txt dist/

echo "Build complete! Deploy the 'dist' folder to GitHub Pages."
