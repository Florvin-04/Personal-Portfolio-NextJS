"use client";

import { MAIN_NAV_LINKS } from "@/lib/static/NavbarItems";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import useMediaQuery from "@/hooks/useMediaQuery";

const Navbar = () => {
  const matches = useMediaQuery("(min-width: 1024px)");

  // const inputString = "";

  // const countLetters = (str: string) => {
  //   const letterCount: { [key: string]: number } = {};
  //   for (let char of str) {
  //     letterCount[char] = (letterCount[char] || 0) + 1;
  //   }
  //   return letterCount;
  // };

  // // Get the dictionary with letter counts
  // const letterCountDictionary = countLetters(inputString);

  // console.log(letterCountDictionary);

  return (
    <nav className="relative flex justify-between px-2 py-3 after:content-[''] after:bg-foreground/[.1] after:absolute after:inset-0 after:-z-10 after:blur-[.1rem] after:border-[.2rem] after:border-foreground/[.1] lg:flex-col lg:gap-[1.5rem] lg:after:rounded-full lg:px-3 lg:py-5 ">
      {MAIN_NAV_LINKS.map((item) => {
        return (
          <div
            className="flex justify-center items-center"
            key={`home-nav-key-${item.label}`}
          >
            <TooltipProvider delayDuration={100}>
              <Tooltip defaultOpen={false}>
                <TooltipTrigger>
                  <Link
                    href={item.path}
                    className="cursor-pointer text-[1.5rem] text-foreground hover:text-primary"
                  >
                    <p className="aspect-square w-[2rem] lg:w-[1.5rem]">
                      {item.icon}
                    </p>
                  </Link>
                </TooltipTrigger>

                <TooltipContent
                  sideOffset={20}
                  side={matches ? "left" : "top"}
                  className="bg-popover"
                >
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        );
      })}
    </nav>
  );
};

export default Navbar;
