const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization (required for static export)
  },
  assetPrefix: isProd ? "/Blossom_Property/" : "",
  basePath: isProd ? "/Blossom_Property" : "",
  distDir: "dist",
  // Ensure trailing slash is disabled for consistency with static exports
  trailingSlash: false,
};

export default nextConfig;