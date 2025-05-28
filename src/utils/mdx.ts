import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostFrontMatter } from "@/types/blog";
import { ProjectFrontMatter } from "@/types/project";
import { projectCovers } from "@/images/images-export";

const postsDirectory = path.join(process.cwd(), "posts");
const projectsDirectory = path.join(process.cwd(), "projects");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getProjectsSlugs() {
  return fs.readdirSync(projectsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, ""); // Remove .mdx from filename
  const postFolder = path.join(postsDirectory, `${realSlug}`);

  if (!fs.existsSync(postFolder)) {
    return undefined;
  }

  const fullPath = path.join(postFolder, `${realSlug}.mdx`);

  const fileContents = fs.readFileSync(fullPath, "utf8");
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
  const imageProcessedContent = processImagesInMDX(content, postFolder);
  return { slug: realSlug, frontMatter, imageProcessedContent };
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post) => post !== undefined)
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.frontMatter.date > post2.frontMatter.date ? -1 : 1));
  return posts;
}

export function getProjectBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, ""); // Remove .mdx from filename
  const projectFolder = path.join(projectsDirectory, `${realSlug}`);

  if (!fs.existsSync(projectFolder)) {
    return undefined;
  }

  const fullPath = path.join(projectFolder, `${realSlug}.mdx`);

  const fileContents = fs.readFileSync(fullPath, "utf8");
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
  const processedContent = processImagesInMDX(content, projectFolder);
  return { slug: realSlug, frontMatter, content: processedContent, image };
}

export function getAllProjects() {
  const slugs = getProjectsSlugs();
  const posts = slugs
    .map((slug) => getProjectBySlug(slug))
    .filter((post) => post !== undefined)
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.frontMatter.date > post2.frontMatter.date ? -1 : 1));
  return posts;
}

function processImagesInMDX(mdxContent: string, mdxDirectory: string) {
// Match markdown image syntax: ![alt](./image.ext)
  const markdownImageRegex = /!\[([^\]]*)\]\((\.[^)]+\.(jpg|jpeg|png|webp|avif|gif))\)/g;
  
  let processedContent = mdxContent;
  const matches = [...mdxContent.matchAll(markdownImageRegex)];

  for (const match of matches) {
    const [fullMatch, altText, imagePath] = match;
    const fullImagePath = path.join(mdxDirectory, imagePath);

    // Copy image to public directory during build
    const publicImagePath = `${path.basename(mdxDirectory)}/${path.basename(imagePath)}`;
    const publicFullPath = path.join(process.cwd(), "/public", publicImagePath);

    // Ensure directory exists
    fs.mkdir(path.dirname(publicFullPath), { recursive: true }, (err) => {
      if (err) throw err;
    });
    fs.copyFile(fullImagePath, publicFullPath, (err) => {
      if (err) throw err;
    });

    // Replace import with public path
    processedContent = processedContent.replace(fullMatch, `![${altText}](${publicImagePath})`);
    console.log(processedContent);
  }

  return processedContent;
}

export function getExcerpt(content: string) {
  // Remove markdown formatting
  const plainText = content.replace(/[#*`]/g, "").replace(/\[(.*?)\]\(.*?\)/g, "$1");
  // Get first 150 characters
  return plainText.trim().slice(0, 300) + (plainText.length > 300 ? "..." : "");
}
