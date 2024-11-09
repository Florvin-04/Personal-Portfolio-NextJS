import Icon from "@/assets/icons";

const SkillIconClassName =
  "w-full text-accent-foreground/80 group-hover:text-primary";

export const SKILLS_LANG = {
  FE: {
    skills: [
      {
        name: "React JS",
        icon: <Icon.ReactLogo className={SkillIconClassName} />,
      },
      {
        name: "Next JS",
        icon: <Icon.Nextjs className={`${SkillIconClassName}`} />,
      },
      {
        name: "Typescript",
        icon: <Icon.TypescriptLogo className={SkillIconClassName} />,
      },
      {
        name: "Tailwind CSS",
        icon: <Icon.TailwindCSSLogo className={SkillIconClassName} />,
      },
      {
        name: "Javascript",
        icon: <Icon.JavascriptLogo className={SkillIconClassName} />,
      },
      {
        name: "HTML",
        icon: <Icon.HTMLLogo className={SkillIconClassName} />,
      },
      {
        name: "CSS",
        icon: <Icon.CSSLogo className={SkillIconClassName} />,
      },
      {
        name: "Shadcn UI",
        icon: <Icon.ShadCnLogo className={SkillIconClassName} />,
      },
    ],
  },

  BE: {
    skills: [
      {
        name: "Express JS",
        icon: <Icon.ExpressJSLogo className={SkillIconClassName} />,
      },
      {
        name: "Node JS",
        icon: <Icon.NodeJSLogo className={SkillIconClassName} />,
      },
      {
        name: "Mongo DB",
        icon: <Icon.MonggoDBLogo className={`${SkillIconClassName}`} />,
      },
      {
        name: "My SQL",
        icon: <Icon.MySQLLogo className={`${SkillIconClassName}`} />,
      },
      {
        name: "Prisma",
        icon: <Icon.Prisma className={`${SkillIconClassName}`} />,
      },
    ],
  },

  Others: {
    skills: [
      {
        name: "Git",
        icon: <Icon.GitLogo className={SkillIconClassName} />,
      },
      {
        name: "Git Hub",
        icon: <Icon.GitHubLogo className={SkillIconClassName} />,
      },
      {
        name: "Bitbucket",
        icon: <Icon.BitBucketLogo className={`${SkillIconClassName}`} />,
      },
      {
        name: "Postman",
        icon: <Icon.PostmanLogo className={`${SkillIconClassName}`} />,
      },
      {
        name: "Jira",
        icon: <Icon.JiraLogo className={`${SkillIconClassName}`} />,
      },
    ],
  },
};
export const SKILLS = [
  {
    category: "Frontend",
    skills: [
      {
        name: "React JS",
        icon: <Icon.ReactLogo className={SkillIconClassName} />,
      },
      {
        name: "Next JS",
        icon: <Icon.Nextjs className={`${SkillIconClassName}`} />,
      },
      {
        name: "Typescript",
        icon: <Icon.TypescriptLogo className={SkillIconClassName} />,
      },
      {
        name: "Tailwind CSS",
        icon: <Icon.TailwindCSSLogo className={SkillIconClassName} />,
      },
      {
        name: "Javascript",
        icon: <Icon.JavascriptLogo className={SkillIconClassName} />,
      },
      {
        name: "HTML",
        icon: <Icon.HTMLLogo className={SkillIconClassName} />,
      },
      {
        name: "CSS",
        icon: <Icon.CSSLogo className={SkillIconClassName} />,
      },
      {
        name: "Shadcn UI",
        icon: <Icon.ShadCnLogo className={SkillIconClassName} />,
      },
      {
        name: "SASS",
        icon: <Icon.SASS className={SkillIconClassName} />,
      },
    ],
  },
  {
    category: "Backend",
    skills: [
      {
        name: "Express JS",
        icon: <Icon.ExpressJSLogo className={SkillIconClassName} />,
      },
      {
        name: "Node JS",
        icon: <Icon.NodeJSLogo className={SkillIconClassName} />,
      },
      {
        name: "Mongo DB",
        icon: <Icon.MonggoDBLogo className={`${SkillIconClassName}`} />,
      },
      {
        name: "My SQL",
        icon: <Icon.MySQLLogo className={`${SkillIconClassName}`} />,
      },
      {
        name: "Prisma",
        icon: <Icon.Prisma className={`${SkillIconClassName}`} />,
      },
    ],
  },
  {
    category: "Others",
    skills: [
      {
        name: "Git",
        icon: <Icon.GitLogo className={SkillIconClassName} />,
      },
      {
        name: "Git Hub",
        icon: <Icon.GitHubLogo className={SkillIconClassName} />,
      },
      {
        name: "Bitbucket",
        icon: <Icon.BitBucketLogo className={`${SkillIconClassName}`} />,
      },
      {
        name: "Postman",
        icon: <Icon.PostmanLogo className={`${SkillIconClassName}`} />,
      },
      {
        name: "Jira",
        icon: <Icon.JiraLogo className={`${SkillIconClassName}`} />,
      },
    ],
  },
];
