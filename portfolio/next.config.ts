/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['scontent-eze1-1.xx.fbcdn.net'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg)$/i,
      type: 'asset/resource',
    });
    return config;
  },
};

module.exports = nextConfig;
