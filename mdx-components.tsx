// Taken from Lee Robinson https://github.com/leerob
import React, { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { highlight } from "sugar-high";
import Image, { ImageProps as NextImageProps } from "next/image";
import { ItchIframe } from "./projects/game-engine-350/itch-iframe";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

export const components = {
  h1: (props: HeadingProps) => <h1 className="font-bold text-4xl pt-6 pb-6 mb-0" {...props} />,
  h2: (props: HeadingProps) => (
    <h2 className="text-gray-800 dark:text-zinc-200 font-bold text-xl pt-3 pb-3" {...props} />
  ),
  h3: (props: HeadingProps) => <h3 className="text-gray-800 dark:text-zinc-200 font-medium mt-8 mb-3" {...props} />,
  h4: (props: HeadingProps) => <h4 className="font-medium" {...props} />,
  p: (props: ParagraphProps) => <p className="text-gray-800 dark:text-zinc-300 leading-snug pb-4" {...props} />,
  ol: (props: ListProps) => (
    <ol className="text-gray-800 dark:text-zinc-300 list-decimal pl-5 space-y-2 mb-6" {...props} />
  ),
  ul: (props: ListProps) => (
    <ul className="text-gray-800 dark:text-zinc-300 list-disc pl-5 space-y-2 mb-6" {...props} />
  ),
  li: (props: ListItemProps) => <li className="pl-1" {...props} />,
  em: (props: ComponentPropsWithoutRef<"em">) => <em className="font-medium" {...props} />,
  strong: (props: ComponentPropsWithoutRef<"strong">) => <strong className="font-medium" {...props} />,
  pre: ({ children }: ComponentPropsWithoutRef<"pre">) => (
    <pre className="w-full max-w-full overflow-x-auto my-4 rounded-lg bg-zinc-900 p-4 text-sm">{children}</pre>
  ),
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
    const value = String(children);

    // Inline code (no line breaks)
    if (!value.includes("\n")) {
      return <code className="px-1 py-0.5 rounded bg-gray-200 dark:bg-zinc-800 text-sm">{children}</code>;
    }

    // Block code — relies on parent <pre> for layout
    const html = highlight(value);

    return <code dangerouslySetInnerHTML={{ __html: html }} {...props} className="whitespace-pre" />;
  },

  table: ({ children, ...props }: ComponentPropsWithoutRef<"table">) => (
    <div className="w-full overflow-x-auto my-2 rounded-lg border border-zinc-300 dark:border-zinc-700">
      <table
        className="w-max min-w-full border-collapse text-sm [&_th]:bg-zinc-100 dark:[&_th]:bg-zinc-800 [&_th]:font-medium [&_td]:px-3 [&_td]:py-1 [&_th]:px-3 [&_th]:py-2"
        {...props}
      >
        {children}
      </table>
    </div>
  ),

  thead: ({ children, ...props }: ComponentPropsWithoutRef<"thead">) => <thead {...props}>{children}</thead>,

  tbody: ({ children, ...props }: ComponentPropsWithoutRef<"tbody">) => <tbody {...props}>{children}</tbody>,

  tr: ({ children, ...props }: ComponentPropsWithoutRef<"tr">) => (
    <tr className="hover:bg-gray-50 dark:hover:bg-zinc-800/30 transition-colors" {...props}>
      {children}
    </tr>
  ),

  th: ({ children, ...props }: ComponentPropsWithoutRef<"th">) => (
    <th className="text-left text-sm font-medium px-3 py-2 bg-zinc-100 dark:bg-zinc-800" {...props}>
      {children}
    </th>
  ),

  td: ({ children, ...props }: ComponentPropsWithoutRef<"td">) => (
    <td className="text-sm px-3 py-1" {...props}>
      {children}
    </td>
  ),

  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="ml-[0.075em] border-l-3 border-gray-300 pl-4 text-gray-700 dark:border-zinc-600 dark:text-zinc-300"
      {...props}
    />
  ),

  ItchIframe,
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}