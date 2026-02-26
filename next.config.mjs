/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
       remotePatterns: [new URL('https://s3-eu-west-1.amazonaws.com/**')],
  },
  reactCompiler: true,
};

export default nextConfig;
