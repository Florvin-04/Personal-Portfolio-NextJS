import { SOCIAL_MEDIA } from "@/lib/static/SocialMediaItems";
import React from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import TooltipWrapper from "./wrapper/TooltipWrapper";

const SocialMedia = () => {
  return (
    <ul className="flex items-center gap-2 justify-end max-lg:justify-center py-3">
      {SOCIAL_MEDIA.map((link) => {
        return (
          <li
            className="hover:text-primary flex text-white"
            key={`Header-Socials-Nav-${link.label}`}
          >
            <TooltipWrapper content={link.label} durationPopup={100}>
              <Link
                className="w-[2rem] inline-block"
                download={link.download}
                href={link.path}
                target="_blank"
              >
                {link.icon}
              </Link>
            </TooltipWrapper>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialMedia;
