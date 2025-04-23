import { notFound } from 'next/navigation';
import BlogPost from '@/components/blogpost';
import { getPostBySlug, getAllPosts } from '@/utils/mdx';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  try {
    const {slug} = await params
    const post = getPostBySlug(slug);
    
    if (!post) {
      return notFound();
    }
    
    return <BlogPost post={post} />;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return notFound();
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}