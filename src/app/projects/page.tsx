import { getAllProjects, getExcerpt } from "@/utils/mdx";
import Link from "next/link";

export default function Projects() {
    const projects = getAllProjects();
    
    return (
        <div className="mx-auto my-10 max-w-7xl px-6">
          <h1 className="text-5xl font-bold text-center md:text-left">Projects</h1>
          <ul className="mx-auto mt-6 md:ps-8 space-y-4">
            {projects.map((project) => (
              <li key={project.slug} className="border-b pb-2">
                <Link href={`/projects/${project.slug}`} className="hover:underline">
                  <h2 className="text-xl font-medium">{project.frontMatter.title}</h2>
                  <p className="line-clamp-2 text-gray-600">
                    {" "}
                    {getExcerpt(project.content)}
                  </p>
                  <p className="text-gray-500">
                    {new Date(project.frontMatter.date).toLocaleDateString("en-US", {
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
      );
}
