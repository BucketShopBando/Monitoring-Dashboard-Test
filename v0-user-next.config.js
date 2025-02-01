/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: "/monitoring-dashboard",
  assetPrefix: "/monitoring-dashboard/",
}

module.exports = nextConfig

