import { serialize } from "next-mdx-remote/serialize";
import { Post } from "@/types/blog";
import MDXContent from "./mdx-content";
import { DateFormatter } from "@/utils/date-parser";

interface BlogPostProps {
  post: Post;
}

// Serialize the content in the server component
export default async function BlogPost({ post }: BlogPostProps) {
  const mdxSource = await serialize(post.content);
  const readLength = Math.ceil(post.content.length / 275).toPrecision(1);
  const tags = post.frontMatter.tags;

  return (
    <div className="mx-auto my-8 max-w-7xl px-6">
      <h1 className="font-medium text-5xl mb-6">{post.frontMatter.title}</h1>
      <div className="mx-auto flex flex-row justify-between mb-6 gap-x-2">
        <p className="text-gray-800 dark:text-zinc-300 font-medium">
          {DateFormatter(post.frontMatter.date, post.frontMatter.dateFormat)}
        </p>
        {/* <p className="text-gray-800 dark:text-zinc-300 font-normal">{tags}</p> */}
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
      {/* Use client component to render MDX */}
      <MDXContent source={mdxSource} />
    </div>
  );
}
