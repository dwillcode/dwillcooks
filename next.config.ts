import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  // Optional: if your site is at the root domain (dwillcooks.com), leave basePath empty
  // If it's in a subdirectory, set basePath: '/your-repo-name'
  basePath: '',
};

export default nextConfig;
