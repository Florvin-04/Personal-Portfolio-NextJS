import { MAIN_ROUTES } from "@/app/routings/routes";
import { HomeIcon, UserIcon } from "@/assets/icons";

export const MAIN_NAV_LINKS = [
  {
    path: `${MAIN_ROUTES.HOME.path}`,
    label: "Home",
    icon: <HomeIcon className="w-full" />,
  },
  {
    path: `${MAIN_ROUTES.ABOUT.path}/${MAIN_ROUTES.ABOUT.SKILLS.path}`,
    label: "About Me",
    icon: <UserIcon className="w-full" />,
  },
  {
    path: `${MAIN_ROUTES.HOME.path}`,
    label: "Projects",
    icon: <HomeIcon className="w-full" />,
  },
  {
    path: `${MAIN_ROUTES.HOME.path}`,
    label: "Skills",
    icon: <HomeIcon className="w-full" />,
  },
];
