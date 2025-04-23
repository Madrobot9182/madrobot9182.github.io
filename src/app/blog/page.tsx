import { getAllPosts } from '@/utils/mdx';
import Link from 'next/link';

export default function BlogIndex() {
  const posts = getAllPosts();
  
  return (
    <div className="mx-auto mt-10">
      <h1 className="text-3xl font-bold">Blog</h1>
      <ul className="mt-6 space-y-4">
        {posts.map((post) => (
          <li key={post.slug} className="border-b pb-2">
            <Link href={`/blog/${post.slug}`} className="hover:underline">
              <h2 className="text-xl font-medium">{post.frontMatter.title}</h2>
              <p className="text-gray-500">{new Date(post.frontMatter.date).toLocaleDateString()}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}