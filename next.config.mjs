/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  transpilePackages: ["lucide-react"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
      {
        protocol: "http",
        hostname: "*",
      },
    ],
  },
};

export default nextConfig;
