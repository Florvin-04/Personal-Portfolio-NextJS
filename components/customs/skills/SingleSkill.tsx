import { ReactNode } from "react";

type Props = {
  skillName: string;
  icon: ReactNode;
};

const SingleSkill = ({ skillName, icon }: Props) => {
  return (
    <div className="duration-[1s] group flex w-max cursor-pointer flex-col items-center bg-red-500/0 transition-all hover:scale-[1.1]">
      {icon}
      <p className="leading-0 -translate-y-[.1rem] text-[.9rem] text-foreground group-hover:text-primary lg:text-[1rem]">
        {skillName}
      </p>
    </div>
  );
};

export default SingleSkill;
