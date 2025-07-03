import Link from "next/link";
import { Post } from "../types/blog";
import { DateFormatter } from "@/utils/date-parser";

interface BlogListProps {
  posts: Post[];
}

export default function BlogIndexList({ posts }: BlogListProps) {  
  return (
    <ul className="mx-auto my-6 md:ps-8 space-y-4">
      {posts.map((post) => (
        <li key={post.slug} className="border-b pb-2">
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            <h2 className="text-xl font-medium">{post.frontMatter.title}</h2>
            <p className="line-clamp-2 text-gray-800 dark:text-zinc-300">
              {" "}
              {post.frontMatter.excerpt}
            </p>
            <p className="text-gray-800 dark:text-zinc-300 mb-2">
              {DateFormatter(post.frontMatter.date, post.frontMatter.dateFormat)}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
