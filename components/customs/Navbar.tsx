"use client";

import { MAIN_NAV_LINKS } from "@/lib/static/NavbarItems";
import React from "react";
import Link from "next/link";
import useMediaQuery from "@/hooks/useMediaQuery";
import TooltipWrapper from "./wrapper/TooltipWrapper";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const matches = useMediaQuery("(min-width: 1024px)");

  return (
    <nav
      className={cn(
        "relative flex justify-around px-2 py-3 after:content-[''] after:bg-foreground/[.1] after:absolute after:inset-0 after:-z-10 after:blur-[.1rem] after:border-[.2rem] after:border-foreground/[.1] lg:flex-col lg:gap-[1.5rem] lg:after:rounded-full lg:px-3 lg:py-5 ",
        matches && "h-[10rem]"
      )}
    >
      {MAIN_NAV_LINKS.map((item) => {
        return (
          <div
            className="flex justify-center items-center"
            key={`home-nav-key-${item.label}`}
          >
            <TooltipWrapper
              sideOffsetPopup={20}
              content={item.label}
              durationPopup={100}
              directionPopup={matches ? "left" : "top"}
            >
              <Link
                href={item.path}
                className="cursor-pointer text-[1.5rem] text-foreground hover:text-primary"
              >
                <p className="aspect-square w-[2rem] lg:w-[1.5rem]">
                  {item.icon}
                </p>
              </Link>
            </TooltipWrapper>
          </div>
        );
      })}
    </nav>
  );
};

export default Navbar;
