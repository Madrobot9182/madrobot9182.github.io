"use client";
import { useEffect, useState } from "react";

interface ItchIframeProps {
  src: string;
  width: number;
  height: number;
}

export default function ItchIframe({ src, width, height }: ItchIframeProps) {
    const [isClient, setIsClient] = useState(false);

  // Temporary hack for client side hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="flex justify-center items-center mb-6" style={{ width, height }}>
        <div className="animate-pulse bg-gray-200 dark:bg-zinc-800 rounded" />
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center mb-6">
      <iframe src={src} width={width} height={height}
        className="border-2 border-gray-300 dark:border-zinc-700 rounded-lg"
        title="Itch.io embed">
        {/* <a href={src}>Link</a> */}
      </iframe>
    </div>
  );
}
