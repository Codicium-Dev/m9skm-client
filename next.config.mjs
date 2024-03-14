/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["lucide-react"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "",
      },
      {
        protocol: "http",
        hostname: "m9.goldenyellowtravel.com",
      },
    ],
  },
};

export default nextConfig;
