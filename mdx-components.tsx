// Taken from Lee Robinson https://github.com/leerob
import React, { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { highlight } from "sugar-high";
import Image, { ImageProps as NextImageProps } from "next/image";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

export const components = {
  h1: (props: HeadingProps) => <h1 className="font-bold text-4xl pt-8 pb-6 mb-0" {...props} />,
  h2: (props: HeadingProps) => (
    <h2 className="text-gray-800 dark:text-zinc-200 font-bold text-xl pt-6 pb-3" {...props} />
  ),
  h3: (props: HeadingProps) => <h3 className="text-gray-800 dark:text-zinc-200 font-medium mt-8 mb-3" {...props} />,
  h4: (props: HeadingProps) => <h4 className="font-medium" {...props} />,
  p: (props: ParagraphProps) => <p className="text-gray-800 dark:text-zinc-300 leading-snug pb-4" {...props} />,
  ol: (props: ListProps) => <ol className="text-gray-800 dark:text-zinc-300 list-decimal pl-5 space-y-2" {...props} />,
  ul: (props: ListProps) => (
    <ul className="text-gray-800 dark:text-zinc-300 list-disc pl-5 space-y-1.5 pb-2" {...props} />
  ),
  li: (props: ListItemProps) => <li className="pl-1" {...props} />,
  em: (props: ComponentPropsWithoutRef<"em">) => <em className="font-medium" {...props} />,
  strong: (props: ComponentPropsWithoutRef<"strong">) => <strong className="font-medium" {...props} />,
  a: ({ href, children, ...props }: AnchorProps) => {
    const className =
      "text-blue-500 hover:text-blue-700 dark:text-gray-400 hover:dark:text-gray-300 dark:underline dark:underline-offset-2 dark:decoration-gray-800";
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith("#")) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...props}>
        {children}
      </a>
    );
  },
  hr: (props: ComponentPropsWithoutRef<"hr">) => (
    <hr className="border-zinc-300 dark:border-gray-800 my-4" {...props} />
  ),

  // For custom image processing
  OptimizedImage: ({ src, alt, width, height, ...props }: NextImageProps) => (
    <div className="flex justify-center">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-lg my-6 align-center"
        placeholder="empty"
        {...props}
      />
    </div>
  ),

  code: ({ children, ...props }: ComponentPropsWithoutRef<"code">) => {
    const codeHTML = highlight(children as string);
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
  },
  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <table>
      <thead>
        <tr>
          {data.headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="ml-[0.075em] border-l-3 border-gray-300 pl-4 text-gray-700 dark:border-zinc-600 dark:text-zinc-300"
      {...props}
    />
  ),
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
