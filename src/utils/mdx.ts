import fs from "fs/promises";
import path from "path";
import sharp from "sharp";
import matter from "gray-matter";
import { PostFrontMatter } from "@/types/blog";
import { ProjectFrontMatter } from "@/types/project";

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

  // Copy images to public folder
  const processedContent = await processImagesInMDX(content, projectFolder);
  
  // Check if cover image exist
  var imageCoverURL;
  if (!fs.stat(path.join(projectFolder, "cover.avif"))) {
    imageCoverURL = undefined;
  } else {
    await processCoverImage(projectFolder);
    imageCoverURL = path.join(`/projects`, `${realSlug}`, "cover-thumb.avif");
  }
  return { slug: realSlug, frontMatter, content: processedContent, imageCoverURL };
}

export async function getAllProjects() {
  const slugs = await getProjectsSlugs();
  const posts = (await Promise.all(slugs.map((slug) => getProjectBySlug(slug))))
    .filter((post) => post !== undefined)
    .sort((post1, post2) => (post1.frontMatter.date > post2.frontMatter.date ? -1 : 1));
  return posts;
}

async function processCoverImage(contentDirectory: string) {
  // Copy any cover.avif image into public
  const coverPath = path.join(contentDirectory, 'cover.avif');
  // Comically jank but works - post|project
  const parentFolderType = path.basename(path.dirname(contentDirectory)); 
  const publicFolderPath = `/${parentFolderType}/${path.basename(contentDirectory)}`;
  const publicCoverPath = path.join(process.cwd(), "/public", publicFolderPath);
  
  try {
    await Promise.all([
    fs.mkdir(publicCoverPath, { recursive: true }),
    // Create optimized thumbnail (400x300, ~80% quality)
    fs.copyFile(coverPath, path.join(publicCoverPath, "cover.avif")),
    sharp(coverPath)
      .resize(500, 300, { fit: 'cover' })
      .avif({ quality: 80 })
      .toFile(path.join(publicCoverPath, "cover-thumb.avif"))
    ]);
  } catch (err) {console.warn(err)} // Not essential if this fails
}

async function processImagesInMDX(mdxContent: string, mdxDirectory: string) {
  // Convert ![alt](link) to <img src alt width height/>
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
    const parentFolderType = path.basename(path.dirname(mdxDirectory)); // post|project
    const publicImagePath = `/${parentFolderType}/${path.basename(mdxDirectory)}/${path.basename(imagePath)}`;
    const publicFullPath = path.join(process.cwd(), "/public", publicImagePath);

    // Ensure directory exists
    await fs.mkdir(path.dirname(publicFullPath), { recursive: true });
    await fs.copyFile(fullImagePath, publicFullPath);

    // Replace import with public path
    processedContent = processedContent.replace(
      fullMatch,
      `<OptimizedImage src="${publicImagePath}" alt="${alt}" width={${width}} height={${height}} />`
    );
  }

  return processedContent;
}
