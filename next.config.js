/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== 'production';
const repository = 'https://introduceme.kr';
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: !debug ? `${repository}/` : '',
  trailingSlash: true,
  images: {
    loader: 'akamai',
    path: '/',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  }
};

module.exports = nextConfig;