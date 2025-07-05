/** @type {import('next').NextConfig} */
const webpack = require('webpack');
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  distDir: 'out',
};

module.exports = nextConfig;

