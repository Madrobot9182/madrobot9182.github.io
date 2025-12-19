"use client";
import { useEffect, useState } from "react";

interface ItchIframeProps {
  src: string;
  width: number;
  height: number;
}

export function ItchIframe({ src, width, height }: ItchIframeProps) {
    const [isClient, setIsClient] = useState(false);

  // Temporary hack for client side hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;  // Return nothing on the server side
  }

  return (
    <div className="flex justify-center items-center">
      <iframe src={src} width={width} height={height}>
        <a href={src}>Link</a>
      </iframe>
    </div>
  );
}
