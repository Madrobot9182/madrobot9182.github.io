"use client";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";

// TODO Hydration error due to the conditional renderings
export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  // const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div className="flex justify-start items-center gap-x-2 md:gap-x-3">
      <button
        onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
        className="flex items-center gap-2"
        aria-label="Toggle dark mode"
      >
        <span className="text-sm font-semibold leading-none block md:hidden">
        {theme == "light" ? "L" : "D"}
        </span>
        <span className="text-sm font-semibold leading-none hidden md:block">
          {theme == "light" ? "LIGHT" : "DARK"}
        </span>

        {theme == "light" ? (
          <MdOutlineLightMode size="1.5em" />
        ) : (
          <MdOutlineDarkMode size="1.5em" />
        )}
      </button>
    </div>
  );
}
