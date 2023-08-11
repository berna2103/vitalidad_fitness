/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  swcMinify: false,
  images: {
    domains: ['cdn.pixabay.com'],
    unoptimized: true
  },
  output: 'export',
  trailingSlash: true,
  
}

module.exports = nextConfig
