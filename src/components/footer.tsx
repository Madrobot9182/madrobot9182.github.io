import { FaGithub, FaLinkedin, FaCopyright } from "react-icons/fa";
import { MdMail } from "react-icons/md"; // TODO Add light/dark switch with next-theme
import ThemeToggle from "./theme-toggle";
import RssFeed from "./rss-feed";

export default function Footer() {
  return (
    <footer
      className="mx-auto w-full h-12 flex justify-between items-center px-4 md:px-6"
      aria-label="Global"
    >
      <div className="flex flex-1 justify-start items-center gap-x-4 md:gap-x-8">
        <RssFeed />
        <ThemeToggle />
      </div>

      <div className="flex justify-center items-center gap-x-1 text-sm font-semibold">
        <FaCopyright size="0.6em" />
        2025 Ryan Yan
      </div>

      <div className="flex flex-1 justify-end items-center gap-x-2 md:gap-x-5">
        <a href="https://github.com/Madrobot9182" target="_blank">
          <FaGithub size="1.5em" />
        </a>
        <a
          href="https://www.linkedin.com/in/ryan-yan-b296a4205/"
          target="_blank"
        >
          <FaLinkedin size="1.5em" />
        </a>
        <a
          href="mailto:madrobot9182@protonmail.com?subject=Getting%20in%20Contact&body=Hello,%20I'm%20interested%20in%20learning%20more.%20Please%20contact%20me:%20"
          target="_blank"
        >
          <MdMail size="1.5em" />
        </a>
      </div>
    </footer>
  );
}
