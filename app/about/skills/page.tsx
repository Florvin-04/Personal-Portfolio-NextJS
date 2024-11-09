import React from "react";

const SkillsPage = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 bg-red-500/0">
      <div>Skills</div>
      {/* {SKILLS_LANG.skills.map((skill) => {
        return (
          <SingleSkill
            key={skill.name}
            icon={skill.icon}
            skillName={skill.name}
          />
        );
      })} */}
    </div>
  );
};

export default SkillsPage;
