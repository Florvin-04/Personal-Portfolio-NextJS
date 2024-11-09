import { ReactNode } from "react";

type Props = {
  skillName: string;
  icon: ReactNode;
};

const SingleSkill = ({ skillName, icon }: Props) => {
  return (
    <div className="duration-[1s] group grid grid-rows-[1fr_1.5rem] gap-2 cursor-pointer transition-all hover:scale-[1.1]">
      <div className="w-[2.5rem] lg:w-[3.5rem] justify-self-center self-center">
        {icon}
      </div>
      <p className="justify-self-center text-foreground group-hover:text-primary lg:text-[1rem]">
        {skillName}
      </p>
    </div>
  );
};

export default SingleSkill;
