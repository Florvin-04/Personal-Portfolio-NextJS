"use client";

import { ABOUT_LANG } from "@/lib/lang/aboutLang";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavigationLink = () => {
  const pathname = usePathname();

  return (
    <ul className="flex bg-red-500/0 justify-center gap-10 h-[2.3rem]">
      {ABOUT_LANG.NAVIGATION.map((navigation) => {
        return (
          <li
            className={cn(
              "font-medium text-[1.1rem]",
              pathname.includes(`/${navigation.path}`) &&
                "text-primary z-100 after:content-[''] pointer-events-none relative bottom-0 after:absolute after:bottom-[0] after:left-[0] after:h-[.2rem] after:w-full after:rounded-full after:bg-primary"
            )}
            key={`about-page-navigation-key-${navigation.label}`}
          >
            <Link href={navigation.path}>{navigation.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavigationLink;
