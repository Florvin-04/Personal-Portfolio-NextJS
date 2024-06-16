"use client";
import CountUp from "react-countup";
import { useEffect, useState } from "react";

type Props = {
  label: string;
  count: number;
  plusSign: boolean;
};

const CountUpNumbers = ({ label, count, plusSign }: Props) => {
  return (
    <div className="bg-red-500/0 text-center text-foreground">
      <div className="leading-0 flex items-center justify-center gap-1 font-bold text-primary">
        <CountUp className="text-[2rem]" start={0} end={count} duration={4} />
        {plusSign && <p className="text-[1.5rem]">+</p>}
      </div>
      <p className="w-[15ch] text-[.9rem] font-semibold uppercase leading-[1rem]">
        {label}
      </p>
    </div>
  );
};

export default CountUpNumbers;
