import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "developer.apple.com" },
      { protocol: "https", hostname: "*.apple.com" },
      { protocol: "https", hostname: "framerusercontent.com" },
    ],
  },
};

export default nextConfig;
