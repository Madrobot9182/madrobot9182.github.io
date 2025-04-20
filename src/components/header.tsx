import Image from "next/image";
import Link from "next/link";

export default function Header2() {
  return (
    <>
      <header className="bg-amber-200">
        <nav
          className="mx-auto flex max-w-7xl items-center p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex justify-start flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                width={40}
                height={40}
                alt="Logo"
              />
            </Link>
            <Link href="/extra" className="-m-1.5 p-1.5">
              Extra Link
            </Link>
          </div>

          <div className="flex justify-center">
            <h2 className="font-bold">Yipee</h2>
          </div>

          <div className="flex justify-end flex-1 gap-x-12">
            <Link href="/first" className="-m-1.5 p-1.5">
              Click on Here
            </Link>
            <Link href="/second" className="-m-1.5 p-1.5">
              But not here
            </Link>
            <Link href="/third" className="-m-1.5 p-1.5">
              Third Link
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
