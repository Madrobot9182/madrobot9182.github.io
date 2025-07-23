import BlogIndexList from "@/components/blog-index-list";
import { Post } from "@/types/blog";
import { getAllPosts } from "@/utils/mdx";

export default async function BlogIndex() {
  const posts = await getAllPosts();

  // posts by year
  const postsByYear = posts.reduce((acc: { [year: number]: Post[] }, post) => {
    const year = new Date(post.frontMatter.date).getFullYear() as number;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {});

  return (
    <div className="mx-auto max-w-7xl my-10 px-6">
      <h1 className="text-5xl font-bold md:text-left mb-12">Blog</h1>
      {(Object.keys(postsByYear).map(Number) as number[])
        .sort((a, b) => b - a)
        .map((year) => (
          <div key={year} className="mb-10">
            <h2 className="text-3xl font-bold mt-8 mb-2">{year}</h2>
            <BlogIndexList posts={postsByYear[year]} />
          </div>
        ))}
    </div>
  );
}
