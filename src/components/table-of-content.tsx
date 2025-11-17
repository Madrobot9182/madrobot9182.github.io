"use client";

import { useEffect, useState } from "react";
import { MdCloseFullscreen } from "react-icons/md";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  initialWidth?: number;
}

export function TableOfContents({ initialWidth = 160 }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [visible, setVisible] = useState(true);
  const [width, setWidth] = useState(initialWidth);

  // Extract headings from the page
  useEffect(() => {
    const elements = document.querySelectorAll("h2, h3");
    const headingData: Heading[] = Array.from(elements).map((elem) => ({
      id: elem.id,
      text: elem.textContent || "",
      level: parseInt(elem.tagName.charAt(1)),
    }));
    setHeadings(headingData);
  }, []);

  if (headings.length === 0) return null;

  // Sidebar width when hidden
  const sidebarWidth = visible ? width : 0;

  return (
    <aside
      className="hidden lg:flex flex-col sticky top-20 max-h-[85vh] pl-3 border-l border-gray-200 dark:border-zinc-700 transition-all duration-300 ease-in-out"
      style={{ width: sidebarWidth }}
    >
      <button
        className="mb-4 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        onClick={() => setVisible(!visible)}
      >
        <MdCloseFullscreen />
      </button>

      {visible && (
        <div
          className={`flex-1 transition-opacity duration-300 ${
            visible ? "opacity-100" : "opacity-0 pointer-events-none"
          } overflow-y-auto max-h-[75vh]`}
        >
          <h3 className="font-semibold text-sm uppercase tracking-wide text-gray-900 dark:text-zinc-100 mb-4">
            On This Page
          </h3>
          <ul className="space-y-1 text-sm">
            {headings.map((heading) => {
              const indentClass = heading.level === 3 ? "pl-3" : "pl-0";
              return (
                <li key={heading.id} className={indentClass}>
                  <a
                    href={`#${heading.id}`}
                    className="block py-1 text-blue-600 dark:text-blue-400 hover:underline break-words"
                  >
                    {heading.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </aside>
  );
}
