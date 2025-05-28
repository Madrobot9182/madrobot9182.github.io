import fs from "fs/promises";
import path from "path";
import sharp from "sharp"
import matter from "gray-matter";
import { PostFrontMatter } from "@/types/blog";
import { ProjectFrontMatter } from "@/types/project";
import { projectCovers } from "@/images/images-export";

const postsDirectory = path.join(process.cwd(), "posts");
const projectsDirectory = path.join(process.cwd(), "projects");

export function getPostSlugs() {
  return fs.readdir(postsDirectory);
}

export function getProjectsSlugs() {
  return fs.readdir(projectsDirectory);
}

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, ""); // Remove .mdx from filename
  const postFolder = path.join(postsDirectory, `${realSlug}`);

  if (!fs.stat(postFolder)) {
    return undefined;
  }

  const fullPath = path.join(postFolder, `${realSlug}.mdx`);

  const fileContents = await fs.readFile(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // Ensure the frontMatter has the required fields
  const frontMatter: PostFrontMatter = {
    title: data.title || "Untitled",
    date: data.date || new Date().toISOString(),
    dateFormat: data.dateFormat || "default",
    tags: data.tags || [],
    ...data,
  };

  // Copy images to public folder
  const imageProcessedContent = await processImagesInMDX(content, postFolder);
  return { slug: realSlug, frontMatter, content: imageProcessedContent };
}

export async function getAllPosts() {
  const slugs = await getPostSlugs();
  const posts = (await Promise.all(slugs.map((slug) => getPostBySlug(slug))))
    .filter((post) => post !== undefined)
    .sort((post1, post2) => (post1.frontMatter.date > post2.frontMatter.date ? -1 : 1));
  return posts;
}

export async function getProjectBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, ""); // Remove .mdx from filename
  const projectFolder = path.join(projectsDirectory, `${realSlug}`);

  if (!fs.stat(projectFolder)) {
    return undefined;
  }

  const fullPath = path.join(projectFolder, `${realSlug}.mdx`);

  const fileContents = await fs.readFile(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // Ensure the frontMatter has the required fields
  const frontMatter: ProjectFrontMatter = {
    title: data.title || "Untitled",
    date: data.date || new Date().toISOString(),
    dateFormat: data.dateFormat || "year",
    tags: data.tags || [],
    ...data,
  };

  const image = projectCovers.find((el) => el.slug === realSlug)?.image;

  // Copy images to public folder
  const processedContent = await processImagesInMDX(content, projectFolder);
  return { slug: realSlug, frontMatter, content: processedContent, image };
}

export async function getAllProjects() {
  const slugs = await getProjectsSlugs();
  const posts = (await Promise.all(slugs.map((slug) => getProjectBySlug(slug))))
    .filter((post) => post !== undefined)
    .sort((post1, post2) => (post1.frontMatter.date > post2.frontMatter.date ? -1 : 1));
  return posts;
}

async function processImagesInMDX(mdxContent: string, mdxDirectory: string) {
  const markdownImageRegex = /!\[([^\]]*)\]\((\.[^)]+\.(jpg|jpeg|png|webp|avif|gif))\)/g;
  
  let processedContent = mdxContent;
  const matches = [...mdxContent.matchAll(markdownImageRegex)];

  for (const match of matches) {
    const [fullMatch, altText, imagePath] = match;
    const fullImagePath = path.join(mdxDirectory, imagePath);

    // Extract existing attributes
    const altMatch = fullMatch.match(/alt=["']([^"']*)["']/);
    const widthMatch = fullMatch.match(/width=["']?(\d+)["']?/);
    const heightMatch = fullMatch.match(/height=["']?(\d+)["']?/);

    const alt = altMatch?.[1] || altText;
    let width = widthMatch?.[1] ? parseInt(widthMatch[1]) : null;
    let height = heightMatch?.[1] ? parseInt(heightMatch[1]) : null;

    // Auto-detect if not provided
    if (!width || !height) {
      const metadata = await sharp(fullImagePath).metadata();
      width = width || metadata.width;
      height = height || metadata.height;
    }

    // Copy image to public directory during build
    const publicImagePath = `/${path.basename(mdxDirectory)}/${path.basename(imagePath)}`;
    const publicFullPath = path.join(process.cwd(), "/public", publicImagePath);

    // Ensure directory exists
    await fs.mkdir(path.dirname(publicFullPath), { recursive: true });
    await fs.copyFile(fullImagePath, publicFullPath);

    // Replace import with public path
    processedContent = processedContent.replace(fullMatch, `<OptimizedImage src="${publicImagePath}" alt="${alt}" width={${width}} height={${height}} />`);
  }

  return processedContent;
}
