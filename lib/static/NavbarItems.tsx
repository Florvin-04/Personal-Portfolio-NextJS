import { MAIN_ROUTES } from "@/app/routings/routes";
import Icon from "@/assets/icons";

export const MAIN_NAV_LINKS = [
  {
    path: `${MAIN_ROUTES.HOME.path}`,
    label: "Home",
    icon: <Icon.HomeIcon className="w-full" />,
  },
  {
    // path: `${MAIN_ROUTES.ABOUT.path}/${MAIN_ROUTES.ABOUT.SKILLS.path}`,
    path: `${MAIN_ROUTES.BACKGROUND.path}`,
    label: "About Me",
    icon: <Icon.UserIcon className="w-full" />,
  },
  {
    path: `${MAIN_ROUTES.HOME.path}`,
    label: "Projects",
    icon: <Icon.HomeIcon className="w-full" />,
  },
  {
    path: `${MAIN_ROUTES.HOME.path}`,
    label: "Skills",
    icon: <Icon.HomeIcon className="w-full" />,
  },
];
