/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== 'production';
const repository = 'https://introduceme.kr';

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: !debug ? `${repository}/` : '',
  trailingSlash: true,
  images: {
    loader: 'akamai',
    path: '/',
  }
};

module.exports = nextConfig;