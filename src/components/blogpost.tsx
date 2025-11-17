import { Post } from "@/types/blog";
import { type MDXRemoteOptions, MDXRemote } from "next-mdx-remote-client/rsc";
import { components } from "../../mdx-components";
import { DateFormatter } from "@/utils/date-parser";
import recmaMdxImportReact from "recma-mdx-import-media";
import recmaMdxChangeImport from "recma-mdx-change-imports";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import { TableOfContents } from "./table-of-content";

interface BlogPostProps {
  post: Post;
}

export default async function BlogPost({ post }: BlogPostProps) {
  const wordCount = post.content.split(/\s+/).filter(Boolean).length;
  const readLength = Math.ceil(wordCount / 275);
  const tags = post.frontMatter.tags;

  const options: MDXRemoteOptions = {
    mdxOptions: {
      format: "mdx",
      baseUrl: import.meta.url,
      development: false,
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: "append", // instead of 'wrap'
            properties: { className: "header-anchor" }, // optional
            content: "", // don't insert any extra elements
          },
        ],
      ],
      recmaPlugins: [recmaMdxImportReact, recmaMdxChangeImport],
    },
    parseFrontmatter: true,
  };

  return (
    <div className="mx-auto my-8 px-6 lg:pl-16 lg:pr-8 lg:flex lg:gap-6">
      <article className="flex-1">
        <h1 className="font-extrabold text-5xl mb-6">{post.frontMatter.title}</h1>
        <div className="mx-auto flex flex-row justify-between mb-6 gap-x-2">
          <p className="text-gray-800 dark:text-zinc-300 font-medium">
            {DateFormatter(post.frontMatter.date, post.frontMatter.dateFormat)}
          </p>
          <div className="flex flex-wrap items-start justify-center gap-2">
            {tags.map((tag) => (
              <span key={tag} className="text-sm px-2 py-0.5 rounded-md shadow-sm bg-gray-200 dark:bg-zinc-800">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-800 dark:text-zinc-300 font-medium text-end">{readLength} minute read</p>
        </div>

        <MDXRemote source={post.content} components={components} options={options} />
      </article>

      <aside className="hidden lg:block w-3xs sticky top-20 max-h-[85vh] pl-3 border-l border-gray-200 dark:border-zinc-700 overflow-visible">
        <TableOfContents />
      </aside>
    </div>
  );
}
