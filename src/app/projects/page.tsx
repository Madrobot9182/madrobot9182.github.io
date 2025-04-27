import { getAllProjects, getExcerpt } from "@/utils/mdx";
import Link from "next/link";
import Image from "next/image";

export default function ProjectGrid() {
  const projects = getAllProjects();

  return (
    <div className="mx-auto my-10 max-w-7xl px-6">
      <h1 className="text-5xl font-bold text-center md:text-left">Projects</h1>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 md:ps-8">
        {projects.map((project) => (
          <div key={project.slug} className="border-b h-100 bg-red-100">
            <Link
              href={`/projects/${project.slug}`}
              className="hover:underline"
            >
              <h2 className="text-xl font-medium">
                {project.frontMatter.title}
              </h2>
              <Image
                src={project.imagePath}
                width={300}
                height={200}
                alt={project.slug + " cover image"}
              />
              <p className="line-clamp-2 text-gray-600">
                {" "}
                {getExcerpt(project.content)}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
