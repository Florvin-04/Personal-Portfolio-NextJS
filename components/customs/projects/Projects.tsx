import Project from "./Project";

const PROJECTS = [
  {
    title: "Social Media App",
    techStack: [
      "Next.js 15 RC",
      "Tailwind CSS",
      "Shadcn UI",
      "Prisma",
      "PostgreSQL",
      "Vercel",
    ],
    description:
      "This social media website is inspired by Twitter, serving as a platform for users to connect and share their thoughts and ideas.",
    link: "https://nextjs-social-media-app-tau.vercel.app",
    image: "/images/social-media-app.png",
  },
  {
    title: "TrendEase",
    techStack: [
      "ReactJS",
      "SCSS",
      "ExpressJS",
      "NodeJS",
      "MySQL",
      "Netlify",
    ],
    description:
      "This is an eCommerce website designed specifically for online clothing purchases, enabling users to explore, select, and buy various clothing items from the comfort of their own devices.",
    link: "https://trendease.netlify.app",
    image: "/images/trendease-homepage.png",
  },
];

export default function Projects() {
  return (
    <div className="">
      <div className="pl-[3rem] pr-[6rem] space-y-[5rem]">
        {PROJECTS.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </div>
  );
}
