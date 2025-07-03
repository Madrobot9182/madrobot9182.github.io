// app/robots.txt/route.ts
import type { MetadataRoute } from 'next';

// One of these should work
export const dynamicParams = false;
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
  };
}