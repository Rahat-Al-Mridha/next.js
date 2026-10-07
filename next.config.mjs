/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

// https://plus.unsplash.com/premium_photo-1776205955471-0a6d0e5c185d
// https://www.facebook.com/photo/

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: '',
        pathname: '**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'www.facebook.com',
        port: '',
        pathname: '/photo/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
