// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   images: {
//     domains: ["images.pexels.com", "samples-files.com", "tse4.mm.bing.net"],
//   },
// };

// // module.exports = nextConfig;

// export default nextConfig;

//----------------------------------------------------------------------------------------------------------------------------------
// @type {import('next').NextConfig}
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "tse4.mm.bing.net",
      },
    ],
    qualities: [75, 85, 100],
  },
};

export default nextConfig;
