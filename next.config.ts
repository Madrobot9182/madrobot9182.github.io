import type { NextConfig } from "next";
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  pageExtensions: ['mdx', 'ts', 'tsx'],
  images: {
    formats: ['image/avif', 'image/webp']
  },
  // reactStrictMode: true,
  turbopack: {
    root: __dirname
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  extension: /\.mdx?$/,

})

export default withMDX(nextConfig);
