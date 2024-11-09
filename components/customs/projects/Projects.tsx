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
];

export default function Projects() {
  return (
    <div className="">
      <div className="pl-[3rem] pr-[6rem] ">
        {PROJECTS.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </div>
  );
}
