import Link from "next/link";
import { Project } from "../types/project";
import { getExcerpt } from "@/utils/date-parser";
import { DateFormatter } from "@/utils/date-parser";
import PlaceHolder from "../../public/placeholders/Placeholder.jpg";
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
          className="flex flex-col hover:underline p-4 rounded-xl border-b-3 bg-gray-100 dark:bg-zinc-900 border-blue-200 dark:border-zinc-700"
          key={project.slug}
        >
          <h2 className="text-xl font-medium text-left">{project.frontMatter.title}</h2>
          <p className="text-gray-800 dark:text-zinc-300 text-left mb-2">
            {DateFormatter(project.frontMatter.date, project.frontMatter.dateFormat)}
          </p>
          <div className="relative w-full min-h-42 px-3 py-2.5 mb-2">
            <Image
              src={project.imageCoverURL || PlaceHolder}
              alt={project.slug + " cover image"}
              width={500}
              height={300}
              placeholder="empty"
            />
          </div>
          <p className="line-clamp-4">{getExcerpt(project.content)}</p>
        </Link>
      ))}
    </div>
  );
}
