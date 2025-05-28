import { StaticImageData } from "next/dist/shared/lib/get-img-props";

// the --- ontop of a post
export interface ProjectFrontMatter {
  title: string;
  date: string;
  dateFormat: string;
  tags: string[];
}

export interface Project {
  slug: string;
  frontMatter: ProjectFrontMatter;
  content: string;
  imageURL: string;
}
