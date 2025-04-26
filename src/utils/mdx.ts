import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PostFrontMatter } from '@/types/blog';
import { ProjectFrontMatter } from '@/types/project';

const postsDirectory = path.join(process.cwd(), 'posts');
const projectsDirectory = path.join(process.cwd(), 'projects');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getProjectsSlugs() {
  return fs.readdirSync(projectsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '');      // Remove .mdx from filename
  const postFolder = path.join(postsDirectory, `${realSlug}`);
  
  if (!fs.existsSync(postFolder)) {
    return undefined;
  }

  const fullPath = path.join(postFolder, `${realSlug}.mdx`);
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

    // Ensure the frontMatter has the required fields
    const frontMatter: PostFrontMatter = {
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString(),
      tags: data.tags || [],
      ...data
    };

  return { slug: realSlug, frontMatter, content };
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter(post => post !== undefined)
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.frontMatter.date > post2.frontMatter.date ? -1 : 1));
  return posts;
}

export function getProjectBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '');      // Remove .mdx from filename
  const projectFolder = path.join(projectsDirectory, `${realSlug}`); // TODO 
  
  if (!fs.existsSync(projectFolder)) {
    return undefined;
  }

  const fullPath = path.join(projectFolder, `${realSlug}.mdx`);
  const imagePath = path.join(projectFolder, `cover.jpg`);
  const image = fs.readFileSync(imagePath, 'utf8');

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

    // Ensure the frontMatter has the required fields
    const frontMatter: ProjectFrontMatter = {
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString(),
      tags: data.tags || [],
      ...data
    };

  return { slug: realSlug, frontMatter, content, image };
}

export function getAllProjects() {
  const slugs = getProjectsSlugs();
  const posts = slugs
    .map((slug) => getProjectBySlug(slug))
    .filter(post => post !== undefined)
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.frontMatter.date > post2.frontMatter.date ? -1 : 1));
  return posts;
}

export function getExcerpt(content:string) {
  // Remove markdown formatting
  const plainText = content
    .replace(/[#*`]/g, "")
    .replace(/\[(.*?)\]\(.*?\)/g, "$1");
  // Get first 150 characters
  return plainText.trim().slice(0, 300) + (plainText.length > 300 ? "..." : "");
};