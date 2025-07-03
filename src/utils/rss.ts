import fs from "fs";
import RSS from 'rss';

import {Post} from "@/types/blog"

export default async function generateRssFeed(allPosts: Post[]) {
  const site_url =
    process.env.NODE_ENV === "production"
      ? "https://madrobot9182.github.io"
      : "http://localhost:3000";

  const feedOptions = {
    title: "Blog posts | RSS Feed",
    description: "Welcome to this blog posts!",
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    image_url: `${site_url}/placeholders/icon.png`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}`,
  };

  const feed = new RSS(feedOptions);

  // Add each individual post to the feed.
  allPosts.map((post) => {
    feed.item({
      title: post.frontMatter.title,
      description: "post.frontMatter.excerpt",
      url: `${site_url}/blog/${post.slug}`,
      date: post.frontMatter.date,
    });
  });

  // Write the RSS feed to a file as XML.
  fs.writeFileSync("./public/rss.xml", feed.xml({ indent: true }));
}


