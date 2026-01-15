/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/controle-orcamentos' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/controle-orcamentos/' : '',
}

module.exports = nextConfig
