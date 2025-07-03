// the --- ontop of a post
export interface PostFrontMatter {
  title: string;
  date: string;
  dateFormat: string;
  tags: string[];
  excerpt: string;
}

// A post itself
export interface Post {
  slug: string;
  frontMatter: PostFrontMatter;
  content: string;
}
