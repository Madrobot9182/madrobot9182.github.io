import { FaRss } from "react-icons/fa";

export default function RssFeed() {
  return (
    <div className="flex justify-start items-center gap-x-2 md:gap-x-3">
      <p className="text-sm font-semibold leading-none visible md:hidden">
        RSS
      </p>
      <p className="text-sm font-semibold leading-none hidden md:block">
        RSS FEED
      </p>
      <FaRss />
    </div>
  );
}
