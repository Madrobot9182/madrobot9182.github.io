import BlogIndexList from "@/components/blog-index-list";
import ProjectIndexGrid from "@/components/project-index-grid";
import { getAllPosts, getAllProjects} from "@/utils/mdx";

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
        <BlogIndexList posts={posts.slice(0,4)} />

        <h1 className="font-medium text-4xl pt-12 mb-0">Recent Projects</h1>
        <ProjectIndexGrid projects={projects.slice(0,3)} />
      </div>
    </div>
  );
}
