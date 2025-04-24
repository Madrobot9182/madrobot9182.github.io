import { getAllPosts, getExcerpt } from "@/utils/mdx";
import Link from "next/link";

// TODO find a way for outer div to properly fill the main div
export default function Home() {
  const posts = getAllPosts();

  return (
    <div
      className="mx-auto px-20 flex flex-col lg:flex-row lg:gap-x-72 items-center justify-center w-full h-full"
      style={{ minHeight: "80vh" }}
    >
      <div className="flex justify-between gap-x-7 mb-10 lg:mb-0">
        <div>
          <h1 className="text-right text-7xl font-semibold mb-5">Ryan</h1>
          <h3 className="text-right text-xl font-medium">Software and</h3>
          <h3 className="text-right text-xl font-medium">Game Developer</h3>
        </div>
        <div>
          <h1 className="text-left text-7xl font-semibold mb-5">Yan</h1>
          <h1 className="text-left text-7xl font-semibold">严</h1>
        </div>
      </div>

      <div className="text-center lg:text-left">
        <h1>BLOG SECTION HERE</h1>
        <ul className="mx-auto mt-6 md:ps-8 space-y-4">
          {/* same as in blog section */}
          {posts.slice(0, 2).map((post) => (
            <li key={post.slug} className="border-b pb-2">
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                <h2 className="text-xl font-medium">
                  {post.frontMatter.title}
                </h2>
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
    </div>
  );
}
