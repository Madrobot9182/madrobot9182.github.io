import { serialize } from 'next-mdx-remote/serialize';
import { Post } from '@/types/blog';
import MDXContent from './mdx-content';

interface BlogPostProps {
  post: Post;
}

export default async function BlogPost({ post }: BlogPostProps) {
  // Serialize the content in the server component
  const mdxSource = await serialize(post.content);

  return (
    <div className="prose mx-auto mt-10">
      <h1>{post.frontMatter.title}</h1>
      <p>{new Date(post.frontMatter.date).toLocaleDateString()}</p>
      {/* Use client component to render MDX */}
      <MDXContent source={mdxSource} />
    </div>
  );
}