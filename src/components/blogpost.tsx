import { Post } from "@/types/blog";
import { type MDXRemoteOptions, MDXRemote } from "next-mdx-remote-client/rsc";
import { components } from "../../mdx-components";
import { DateFormatter } from "@/utils/date-parser";
import recmaMdxImportReact from "recma-mdx-import-media";
import recmaMdxChangeImport from "recma-mdx-change-imports"

interface BlogPostProps {
  post: Post;
}

export default async function BlogPost({ post }: BlogPostProps) {
  const wordCount = post.content.split(/\s+/).filter(Boolean).length;
  const readLength = Math.ceil(wordCount / 275).toPrecision(1);
  const tags = post.frontMatter.tags;

  const options: MDXRemoteOptions = {
    mdxOptions: {
      format: "mdx",
      baseUrl: import.meta.url,
      development: false,
      recmaPlugins: [recmaMdxImportReact, recmaMdxChangeImport]
    },
    parseFrontmatter: true,
  };
  
  return (
    <div className="mx-auto my-8 max-w-7xl px-6">
      <h1 className="font-medium text-5xl mb-6">{post.frontMatter.title}</h1>
      <div className="mx-auto flex flex-row justify-between mb-6 gap-x-2">
        <p className="text-gray-800 dark:text-zinc-300 font-medium">
          {DateFormatter(post.frontMatter.date, post.frontMatter.dateFormat)}
        </p>
        <div className="flex flex-wrap items-start justify-center gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-sm px-2 py-0.5 rounded-md shadow-sm bg-gray-200 dark:bg-zinc-800"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-gray-800 dark:text-zinc-300 font-medium text-end">
          {readLength} minute read
        </p>
      </div>
      <div className="wrapper">
        <MDXRemote source={post.content} components={components} options={options} />
      </div>
    </div>
  );
}
