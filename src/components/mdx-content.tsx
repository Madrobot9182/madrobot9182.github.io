"use client";

import { MDXRemote } from "next-mdx-remote";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { components } from "../../mdx-components";

interface MDXContentProps {
  source: MDXRemoteSerializeResult;
}

export default function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="wrapper">
      <MDXRemote {...source} components={components} />
    </div>
  );
}