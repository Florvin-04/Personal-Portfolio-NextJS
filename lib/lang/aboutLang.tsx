import { MAIN_ROUTES } from "@/app/routings/routes";

export const ABOUT_LANG = {
  heading: (
    <p className="">
      <span className="text-primary text-nowrap">Empowering Businesses</span>{" "}
      with Cutting-Edge Solutions
    </p>
  ),

  bodyText:
    "As a web developer, I specialize in bringing digital visions to life, meticulously crafting responsive and user-centric websites. I thrive on the creative challenge of blending aesthetic appeal with seamless functionality. With a keen eye for detail and a commitment to staying abreast of emerging trends, I strive to deliver captivating online experiences that not only meet but exceed client expectations.",

  countUp: [
    { label: "Years of Experience", count: 1, plusSign: true },
    { label: "Accomplished Projects", count: 10, plusSign: true },
    { label: "Companies work with", count: 1, plusSign: false },
  ],

  NAVIGATION: [
    {
      label: "Skills",
      path: `${MAIN_ROUTES.SKILLS}`,
      currentPath: `/${MAIN_ROUTES.ABOUT}/${MAIN_ROUTES.SKILLS}`,
    },
    {
      label: "Experiences",
      path: `${MAIN_ROUTES.EXPERIENCE}`,
      currentPath: `/${MAIN_ROUTES.ABOUT}/${MAIN_ROUTES.EXPERIENCE}`,
    },
    {
      label: "Projects",
      path: `${MAIN_ROUTES.PROJECT}`,
      currentPath: `/${MAIN_ROUTES.ABOUT}/${MAIN_ROUTES.PROJECT}`,
    },
  ],
};
