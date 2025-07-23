import { getAllProjects } from "@/utils/mdx";
import ProjectIndexGrid from "@/components/project-index-grid";

export default async function ProjectGrid() {
  const projects = await getAllProjects();

  return (
    <div className="mx-auto max-w-7xl my-10 px-6">
      <h1 className="text-5xl font-bold text-center mb-6 md:text-left">
        Projects
      </h1>
        <ProjectIndexGrid projects={projects} gridLayout="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"/>
    </div>
  );
}
