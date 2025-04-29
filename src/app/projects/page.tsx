import { getAllProjects } from "@/utils/mdx";
import ProjectIndexGrid from "@/components/project-index-grid";

export default function ProjectGrid() {
  const projects = getAllProjects();

  return (
    <div className="mx-auto my-10 max-w-7xl px-6">
      <h1 className="text-5xl font-bold text-center mb-6 md:text-left">
        Projects
      </h1>
        <ProjectIndexGrid projects={projects}/>
    </div>
  );
}
