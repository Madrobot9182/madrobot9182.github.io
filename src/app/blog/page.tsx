import { getAllPosts, getExcerpt } from "@/utils/mdx";
import Link from "next/link";

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto my-10 max-w-7xl px-6">
      <h1 className="text-5xl font-bold text-center md:text-left">Blog</h1>
      <ul className="mx-auto mt-6 md:ps-8 space-y-4">
        {posts.map((post) => (
          <li key={post.slug} className="border-b pb-2">
            <Link href={`/blog/${post.slug}`} className="hover:underline">
              <h2 className="text-xl font-medium">{post.frontMatter.title}</h2>
              <p className="line-clamp-2 text-gray-600">
                {" "}
                {getExcerpt(post.content)}
              </p>
              <p className="text-gray-500">
                {new Date(post.frontMatter.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}