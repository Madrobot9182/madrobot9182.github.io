import BlogIndexList from "@/components/blog-index-list";
import ProjectIndexGrid from "@/components/project-index-grid";
import { getAllPosts, getAllProjects} from "@/utils/mdx";
import Link from "next/link";

export default async function Home() {
  const posts = await getAllPosts();
  const projects = await getAllProjects();

  return (
    <div
      className="mx-auto px-6 flex flex-col lg:flex-row items-center justify-center w-full flex-1"
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

      <div className="flex-1 text-center lg:text-left lg:pe-16 py-4">
        <Link href="/blog" className="hover:underline font-medium text-4xl mb-0">Recent Blogs</Link>
        <BlogIndexList posts={posts.slice(0,3)} />

        <div className="mb-6"><Link href="/projects" className="hover:underline font-medium text-4xl mb-0">Recent Projects</Link></div>
        <ProjectIndexGrid projects={projects.slice(0,2)} gridLayout="grid-cols-1 md:grid-cols-2" />
      </div>
    </div>
  );
}