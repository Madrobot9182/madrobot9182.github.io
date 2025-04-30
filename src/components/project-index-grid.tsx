import Link from "next/link";
import { Project } from "../types/project";
import { getExcerpt } from "@/utils/mdx";
import { DateFormatter } from "@/utils/date-parser";
import Image from "next/image";
interface ProjectGridProps {
  projects: Project[];
  gridLayout: string;
}

export default function ProjectIndexGrid({ projects, gridLayout }: ProjectGridProps) {
  return (
    <div className={gridLayout + " mx-auto grid gap-8 md:ps-8"}>
      {projects.map((project) => (
        <Link
          href={`/projects/${project.slug}`}
          className="flex flex-col hover:underline p-8 rounded-xl border-b-2 border-b-gray-300"
          key={project.slug}
        >
          <h2 className="text-xl font-medium text-left">{project.frontMatter.title}</h2>
          <p className="text-gray-500 text-left mb-2">{DateFormatter(project.frontMatter.date, project.frontMatter.dateFormat)}</p>
          <Image
                src={project.image}
                width={250}
                height={140}
                alt={project.slug + " cover image"}
                className="self-center mb-4"
      />
          <p className="line-clamp-4">{getExcerpt(project.content)}</p>
        </Link>
      ))}
    </div>
  );
}
