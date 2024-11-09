import { SKILLS } from "@/lib/lang/skillLang";
import SingleSkill from "./SingleSkill";

export default function Skills() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="space-y-[2rem] w-full pl-[3rem] pr-[6rem]">
        {SKILLS.map((skill) => {
          return (
            <div
              key={skill.category}
              className="border-b border-accent-foreground/20 pb-5 space-y-2"
            >
              <p className="text-[2rem] font-bold">{skill.category}</p>
              <div className="flex flex-wrap gap-4">
                {skill.skills.map((skill) => {
                  return (
                    <SingleSkill
                      key={skill.name}
                      icon={skill.icon}
                      skillName={skill.name}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
