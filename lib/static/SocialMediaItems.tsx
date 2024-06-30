import { GitHubLogo, LinklnLogo, ResumeLogo } from "@/assets/icons";

const ResumeLink = `/Bayaborda-florvin (Resume).pdf`;

export const RESUME = {
  path: ResumeLink,
  icon: <ResumeLogo className="w-[2.4rem]" />,
  label: "Download My Resume",
  download: true,
};

export const SOCIAL_MEDIA = [
  {
    path: "https://github.com/Florvin-04",
    icon: <GitHubLogo className="w-[2.4rem]" />,
    label: "GitHub",
  },
  {
    path: "https://www.linkedin.com/in/florvin-bayaborda/",
    icon: <LinklnLogo className="w-[2.4rem]" />,
    label: "Linkln",
  },
  {
    path: ResumeLink,
    icon: <ResumeLogo className="w-[2.4rem]" />,
    label: "Download My Resume",
    download: true,
  },
];
