// Shitty figma code export and AI. Need to 
export default function Footer() {
    return (
      <footer className="w-full h-12 relative overflow-hidden bg-green-500 flex justify-between items-center px-6">
        <div className="flex items-center gap-x-6">
          <div className="text-black text-sm font-semibold font-['Inter'] leading-none">
            RSS FEED
          </div>
          <img className="w-7 h-7" src="https://placehold.co/30x30" />
          <div className="text-black text-sm font-semibold font-['Inter'] leading-none">
            THEME
          </div>
        </div>
        <div className="text-black text-sm font-semibold font-['Inter'] leading-none opacity-80">
          2025 Ryan Yan
        </div>
        <div className="flex items-center gap-x-6">
          <div className="w-7 h-7 bg-black" />
          <div className="w-7 h-7 bg-black" />
          <div className="w-11 h-11">
            <div className="w-7 h-6 rounded-sm outline outline-1 outline-offset-[-0.50px] outline-neutral-800 relative top-3" />
            <div className="w-7 h-2 rounded-sm border border-neutral-800 relative top-3" />
          </div>
        </div>
      </footer>
    );
  }
  