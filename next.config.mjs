/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/website',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
