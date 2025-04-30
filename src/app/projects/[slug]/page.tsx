import { notFound } from "next/navigation";
import BlogPost from "@/components/blogpost";
import { getProjectBySlug, getAllProjects } from "@/utils/mdx";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  try {
    const { slug } = await params;
    const post = getProjectBySlug(slug);

    if (!post) {
      return notFound();
    }

    return <BlogPost post={post} />;
  } catch (error) {
    console.error("Error fetching project (also blog) post:", error);
    return notFound();
  }
}

export async function generateStaticParams() {
  const posts = getAllProjects();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
