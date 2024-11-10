import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/customs/Navbar";
import SocialMedia from "@/components/customs/SocialMedia";
import { cn } from "@/lib/utils";
import NextTopLoader from "nextjs-toploader";
import Link from "next/link";
import { Toaster } from "@/components/ui/sonner";
import Copyright from "@/components/customs/Copyright";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Florvin",
  description: "Florvin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "h-[100svh] relative flex flex-col w-full dark theme-green max-w-[2100px] mx-auto overflow-hidden"
        )}
      >
        {/* <MousepointerBG /> */}

        <div id="main-navigaionbar" className="top-0 bg-background sticky z-10">
          <div className="flex items-center justify-between w-[90%] mx-auto">
            <Link
              href="/"
              className="text-[1.8rem] text-primary/85 font-bold uppercase tracking-[.2rem]"
            >
              Florvin
            </Link>
            <SocialMedia />
          </div>
        </div>
        {/* {children} */}
        <div className="overflow-auto flex-1 flex flex-col">
          <NextTopLoader color="#16a34a" showSpinner={false} />
          <Toaster />
          {children}
          <Copyright parentClassName="absolute bottom-0 w-full" />  
        </div>

        <div className="sticky max-lg:bottom-0 max-lg:bg-background lg:fixed lg:right-[1rem] lg:top-1/2 lg:-translate-y-1/2 mt-auto">
          <Navbar />
        </div>
      </body>
    </html>
  );
}
