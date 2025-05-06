import type { NextConfig } from "next";
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  pageExtensions: ['mdx', 'ts', 'tsx'],
  images: {
    formats: ['image/avif', 'image/webp']
  }
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
