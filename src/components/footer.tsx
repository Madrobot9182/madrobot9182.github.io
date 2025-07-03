import { FaGithub, FaLinkedin, FaCopyright } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import ThemeToggle from "./theme-toggle";
import RssFeed from "./rss-feed";

export default function Footer() {
  return (
    <footer
      className="mex-auto flex flex-col w-full h-fit px-4 py-2"
      aria-label="Global"
    >
      <div className="flex justify-between items-center">
        <div className="flex flex-1 justify-start items-center gap-x-4 md:gap-x-8">
          <RssFeed />
          <ThemeToggle />
        </div>

        <div className="hidden md:block">
          <div className="flex flex-1 justify-center items-center gap-x-1 text-sm font-semibold">
            <FaCopyright className="size-2.5" />
            2025 Ryan Yan
          </div>
        </div>

        <div className="flex flex-1 justify-end items-center gap-x-4 md:gap-x-6">
          <a href="https://github.com/Madrobot9182/" target="_blank">
            <FaGithub className="size-7 md:size-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/ryan-yan-b296a4205/"
            target="_blank"
          >
            <FaLinkedin className="size-7 md:size-8" />
          </a>
          <a
            href="mailto:madrobot9182@protonmail.com?subject=Getting%20in%20Contact&body=Hello,%20I'm%20interested%20in%20learning%20more.%20Please%20contact%20me:%20"
            target="_blank"
          >
            <MdMail className="size-7 md:size-8" />
          </a>
        </div>
      </div>

      <div className="md:hidden flex justify-center items-center pt-1.5 gap-x-1 text-sm font-semibold">
        <FaCopyright className="size-2.5" />
        2025 Ryan Yan
      </div>
    </footer>
  );
}
