import { getAllPosts, getAllProjects, getExcerpt } from "@/utils/mdx";
import Link from "next/link";

// TODO find a way for outer div to properly fill the main div
export default function Home() {
  const posts = getAllPosts();
  const projects = getAllProjects();

  return (
    <div
      className="mx-auto px-20 flex flex-col lg:flex-row items-center justify-center w-full h-full"
      style={{ minHeight: "80vh" }}
    >
      <div className="flex flex-col lg:flex-row flex-1 justify-center my-8 lg:my-0">
        <div className="flex flex-row justify-between gap-x-7">
          <div>
            <h1 className="text-right text-6xl lg:text-7xl font-semibold mb-5">Ryan</h1>
            <h3 className="text-right text-xl font-medium">Software and</h3>
            <h3 className="text-right text-xl font-medium">Game Developer</h3>
          </div>
          <div>
            <h1 className="text-left text-6xl lg:text-7xl font-semibold mb-5">Yan</h1>
            <h1 className="text-left text-6xl lg:text-7xl font-semibold">严</h1>
          </div>
        </div>
      </div>

      <div className="flex-1 text-center lg:text-left lg:pe-16">
        <h1 className="font-medium text-4xl mb-0">Recent Blogs</h1>
        <ul className="mx-auto mt-6 md:ps-8 space-y-4">
          {/* same as in blog section */}
          {posts.slice(0, 3).map((post) => (
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

        <h1 className="font-medium text-4xl pt-12 mb-0">Recent Projects</h1>
        <ul className="mx-auto mt-6 md:ps-8 space-y-4">
          {/* same as in blog section */}
          {projects.slice(0, 2).map((post) => (
            <li key={post.slug} className="border-b pb-2">
              <Link href={`/projects/${post.slug}`} className="hover:underline">
                <h2 className="text-xl font-medium">
                  {post.frontMatter.title}
                </h2>
                <p className="line-clamp-2 text-gray-600">
                  {getExcerpt(post.content)}
                </p>
                <p className="text-gray-500">
                  {post.frontMatter.date}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
