import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";

const inter = Inter({ subsets: ['latin'] , display:'swap'})

export const metadata: Metadata = {
  title: {default: "Ryan Yan Website", template: "%s | Ryan Yan"},
  description: "Software and Game developer. Portfolio and blog website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
