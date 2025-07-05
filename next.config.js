/** @type {import('next').NextConfig} */
const webpack = require('webpack');
const nextConfig = {
  output: 'next export',
  images: {
    unoptimized: true,
  },
  distDir: 'out',
};

module.exports = nextConfig;

