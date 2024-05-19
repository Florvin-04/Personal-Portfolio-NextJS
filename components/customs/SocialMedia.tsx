import { SOCIAL_MEDIA } from "@/lib/static/SocialMediaItems";
import React from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

const SocialMedia = () => {
  return (
    <ul className="flex items-center gap-2 bg-blue-500/0 justify-end max-lg:justify-center py-2 px-2">
      {SOCIAL_MEDIA.map((link) => {
        return (
          <li
            className="hover:text-primary flex"
            key={`Header-Socials-Nav-${link.label}`}
          >
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger>
                  <Link
                  className=""
                    download={link.download}
                    href={link.path}
                    target="_blank"
                  >
                    {link.icon}
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="bg-popover">
                  <p>{link.label}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialMedia;
