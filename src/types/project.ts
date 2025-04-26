// the --- ontop of a post
export interface ProjectFrontMatter {
    title: string;
    date: string;
    tags: string[];
}

// A post itself
    export interface Project {
    slug: string;
    frontMatter: ProjectFrontMatter;
    content: string;
    image: ImageBitmap;   // TODO fix
}