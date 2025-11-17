'use client';

import { useEffect, useState } from 'react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    // Extract all headings from the MDX content
    const elements = document.querySelectorAll('h1, h2, h3');
    const headingData: Heading[] = Array.from(elements).map((elem) => ({
      id: elem.id,
      text: elem.textContent || '',
      level: parseInt(elem.tagName.charAt(1)),
    }));
    setHeadings(headingData);
  }, []);

  if (headings.length === 0) return null;

  return (
    <div className="w-full">
      <h3 className="font-semibold text-sm uppercase tracking-wide text-gray-900 dark:text-zinc-100 mb-4">
        On This Page
      </h3>
      <ul className="space-y-1 text-sm">
        {headings.map((heading) => {
          // Tailwind padding-left based on heading level (h2=0, h3=pl-3)
          const indentClass = heading.level === 3 ? 'pl-3' : 'pl-0';
          return (
            <li key={heading.id} className={indentClass}>
              <a
                href={`#${heading.id}`}
                className="block py-1 text-blue-600 dark:text-blue-400 hover:underline transition-colors break-word"
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
