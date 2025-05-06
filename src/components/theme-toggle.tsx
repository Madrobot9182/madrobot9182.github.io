"use client";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, systemTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  // Prevent hydration errors by waiting for mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex justify-start items-center gap-x-2 md:gap-x-3">
      <button
        onClick={() =>
          currentTheme == "dark" ? setTheme("light") : setTheme("dark")
        }
        className="flex items-center gap-2"
        aria-label="Toggle dark mode"
      >
        <span className="text-sm font-semibold leading-none">
          {currentTheme == "light" ? "LIGHT" : "DARK"}
        </span>

        {currentTheme == "light" ? (
          <MdOutlineLightMode size="1.5em" />
        ) : (
          <MdOutlineDarkMode size="1.5em" />
        )}
      </button>
    </div>
  );
}
