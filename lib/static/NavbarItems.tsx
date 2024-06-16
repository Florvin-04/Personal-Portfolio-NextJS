import { MAIN_ROUTES } from "@/app/routings/routes";
import { HomeIcon, UserIcon } from "@/assets/icons";

export const MAIN_NAV_LINKS = [
  {
    path: `${MAIN_ROUTES.HOME}`,
    label: "Home",
    icon: <HomeIcon className="w-full" />,
  },
  {
    path: `${MAIN_ROUTES.ABOUT}/${MAIN_ROUTES.SKILLS}`,
    label: "About Me",
    icon: <UserIcon className="w-full" />,
  },
  {
    path: `${MAIN_ROUTES.HOME}`,
    label: "Projects",
    icon: <HomeIcon className="w-full" />,
  },
  {
    path: `${MAIN_ROUTES.HOME}`,
    label: "Skills",
    icon: <HomeIcon className="w-full" />,
  },
];
