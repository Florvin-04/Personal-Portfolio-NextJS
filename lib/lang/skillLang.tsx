import {
  BitBucketLogo,
  CSSLogo,
  GitHubLogo,
  GitLogo,
  HTMLLogo,
  JavascriptLogo,
  NodeJSLogo,
  ReactLogo,
  ShadCnLogo,
  TailwindCSSLogo,
  TypescriptLogo,
  ExpressJSLogo,
  JiraLogo,
  PostmanLogo,
  MonggoDBLogo,
  MySQLLogo,
} from "@/assets/icons";

const SkillIconClassName =
  "w-[2.5rem] lg:w-[3.5rem] text-accent-foreground/80 group-hover:text-primary";

export const SKILLS_LANG = {
  skills: [
    { name: "React JS", icon: <ReactLogo className={SkillIconClassName} /> },
    {
      name: "Typescript",
      icon: <TypescriptLogo className={SkillIconClassName} />,
    },
    {
      name: "Tailwind CSS",
      icon: <TailwindCSSLogo className={SkillIconClassName} />,
    },
    {
      name: "Javascript",
      icon: <JavascriptLogo className={SkillIconClassName} />,
    },
    {
      name: "Express JS",
      icon: <ExpressJSLogo className={SkillIconClassName} />,
    },
    {
      name: "Node JS",
      icon: <NodeJSLogo className={SkillIconClassName} />,
    },
    {
      name: "HTML",
      icon: <HTMLLogo className={SkillIconClassName} />,
    },
    {
      name: "CSS",
      icon: <CSSLogo className={SkillIconClassName} />,
    },
    {
      name: "Shadcn UI",
      icon: <ShadCnLogo className={SkillIconClassName} />,
    },
    {
      name: "Git",
      icon: <GitLogo className={SkillIconClassName} />,
    },
    {
      name: "Git Hub",
      icon: <GitHubLogo className={SkillIconClassName} />,
    },
    {
      name: "Bitbucket",
      icon: <BitBucketLogo className={`${SkillIconClassName}`} />,
    },
    {
      name: "Postman",
      icon: <PostmanLogo className={`${SkillIconClassName}`} />,
    },
    {
      name: "Jira",
      icon: <JiraLogo className={`${SkillIconClassName}`} />,
    },
    {
      name: "Mongo DB",
      icon: <MonggoDBLogo className={`${SkillIconClassName}`} />,
    },
    {
      name: "My SQL",
      icon: <MySQLLogo className={`${SkillIconClassName}`} />,
    },
  ],
};
