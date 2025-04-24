import { serialize } from "next-mdx-remote/serialize";
import { Post } from "@/types/blog";
import MDXContent from "./mdx-content";

interface BlogPostProps {
  post: Post;
}

// Serialize the content in the server component
export default async function BlogPost({ post }: BlogPostProps) {
  const mdxSource = await serialize(post.content);
  const readLength = Math.ceil(post.content.length / 275).toPrecision(1);
  const tags = post.frontMatter.tags.join(", ");

  return (
    <div className="mx-auto my-10 max-w-7xl px-6">
      <h1 className="font-medium text-5xl pb-2">{post.frontMatter.title}</h1>
      <div className="mx-auto flex flex-row justify-between mb-6">
        <p>
          {new Date(post.frontMatter.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
        <p>{tags}</p>
        <p>{readLength} minute read</p>
      </div>
      {/* Use client component to render MDX */}
      <MDXContent source={mdxSource} />
    </div>
  );
}
