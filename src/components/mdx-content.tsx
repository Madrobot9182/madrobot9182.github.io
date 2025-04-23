// components/mdx-content.tsx
"use client";

import { MDXRemote } from 'next-mdx-remote';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { useMDXComponents } from '../../mdx-components';

interface MDXContentProps {
  source: MDXRemoteSerializeResult;
}

export default function MDXContent({ source }: MDXContentProps) {
  // Get the components from your mdx-components.tsx
  const components = useMDXComponents();
  
  return <MDXRemote {...source} components={components} />;
}