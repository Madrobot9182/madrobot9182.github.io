import Link from "next/link";

//  max-w-7xl to constraint the header
export default function Header2() {
  return (
    <>
      <header className="bg-amber-200">
        <nav
          className="mx-auto flex w-full h-12 justify-between items-center px-4 md:px-6"
          aria-label="Global"
        >
          <div className="flex md:flex-1 justify-start ">
            <Link href="/" className="text-3xl font-bold">
            严
            </Link>
          </div>

          {/* <div className="flex justify-center">
            <h2 className="font-bold">-------- SEARCH BAR HERE --------</h2>
          </div> */}

          <div className="flex md:flex-1 justify-end items-center gap-x-2 md:gap-x-6">
            <Link href="/blog" className="underline">
              BLOG
            </Link>
            <Link href="/projects" className="underline">
              PROJECTS
            </Link>
            <Link href="/about-me" className="underline">
              ABOUT ME
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
