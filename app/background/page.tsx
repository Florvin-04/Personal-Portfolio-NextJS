import ExperiencePage from "@/components/customs/experience/Experince";
import Projects from "@/components/customs/projects/Projects";
import Skills from "@/components/customs/skills/Skills";

const renderJSX = [
  {
    title: "Skills",
    component: <Skills />,
  },
  {
    title: "Projects",
    component: <Projects />,
  },
  {
    title: "Professional Experience",
    component: <ExperiencePage />,
  },
];

export default function BackgroundPage() {
  return (
    <div className="flex-1 pb-[1rem]">
      {renderJSX.map((item) => {
        return (
          <div className="pt-[1rem]">
            <p className="text-[2rem] pl-[3rem] pr-[6rem] py-[1rem] font-bold text-primary sticky top-0 bg-background">
              {item.title}
            </p>
            {item.component}
          </div>
        );
      })}
    </div>
  );
}
