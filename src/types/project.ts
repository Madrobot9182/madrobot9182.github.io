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
    imagePath: string | undefined;   // TODO fix
}