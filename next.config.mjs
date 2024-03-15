/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@shopify/polaris'],
  },
}

export default nextConfig
