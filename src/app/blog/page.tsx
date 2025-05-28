import BlogIndexList from "@/components/blog-index-list";
import { getAllPosts } from "@/utils/mdx";

export default async function BlogIndex() {
  const posts = await getAllPosts();

  return (
    <div className="mx-auto my-10 max-w-7xl px-6">
      <h1 className="text-5xl font-bold text-center md:text-left">Blog</h1>
      <BlogIndexList posts={posts} />
    </div>
  );
}