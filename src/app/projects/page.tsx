import { getAllProjects, getExcerpt } from "@/utils/mdx";
import Link from "next/link";
import Image from "next/image";

export default function ProjectGrid() {
  const projects = getAllProjects();

  return (
    <div className="mx-auto my-10 max-w-7xl px-6">
      <h1 className="text-5xl font-bold text-center mb-6 md:text-left">
        Projects
      </h1>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:ps-8">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            className="hover:underline p-8 rounded-xl border-b-2 border-b-gray-300"
            key={project.slug}
          >
            <h2 className="text-xl font-medium">{project.frontMatter.title}</h2>
            <p className="text-gray-500">
                {project.frontMatter.date}
              </p>
            {/* <Image
                src={project.imagePath}
                width={300}
                height={200}
                alt={project.slug + " cover image"}
              /> */}
            <p className="line-clamp-4">{getExcerpt(project.content)}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
