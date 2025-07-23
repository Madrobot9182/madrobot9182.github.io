import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "next-themes";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
});

export const metadata: Metadata = {
  title: { default: "Ryan's Portfolio Website", template: "%s | Ryan Yan" },
  description:
    "| Software and Game Developer | Computer Science, Specialization in AI | University of Alberta | obligatory I use arch btw; | Portfolio and blog website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" className={robotoMono.className + " dark h-full"}>
      <body className="flex flex-col h-screen">
        <ThemeProvider attribute="class">
          <Header />
          <main className="flex flex-col flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
