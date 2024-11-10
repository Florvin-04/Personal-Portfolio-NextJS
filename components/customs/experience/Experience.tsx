"use client";

import Image from "next/image";

type Props = {
  companyName: string;
  companyLogo: string;
  startDateOfWork: string;
  workPosition: string;
  companyLocation: string;
  workContributions: string[];
  endDateOfWork?: string;
};

export default function Experience({
  companyName,
  companyLogo,
  startDateOfWork,
  workPosition,
  companyLocation,
  workContributions,
  endDateOfWork,
}: Props) {
  function formatFullDate(dateString: Date) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  function calculateExperience(startDate: string) {
    const start = new Date(startDate);
    const now = new Date();

    const totalMonths =
      (now.getFullYear() - start.getFullYear()) * 12 +
      (now.getMonth() + 1 - start.getMonth());

    const years = Math.floor(totalMonths / 12);
    let months = totalMonths % 12;

    if (now.getDate() < start.getDate()) {
      months--;
    }

    const yearString = years ? `${years} year${years > 1 ? "s" : ""}` : "";
    const monthString = months ? `${months} month${months > 1 ? "s" : ""}` : "";

    if (years && months) {
      return `${yearString} and ${monthString}`;
    }

    return (
      yearString || monthString || `Starting Date ${formatFullDate(start)}`
    );
  }

  function formatMonthYear(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });
  }

  const startDate = formatMonthYear(startDateOfWork);
  const endDate = endDateOfWork ? formatMonthYear(endDateOfWork) : "Present";

  return (
    <div className="flex gap-4 border-b border-accent-foreground/20 pb-5">
      <div className="shrink-0">
        <Image
          src={companyLogo}
          alt="media meter logo"
          width={100}
          height={100}
        />
      </div>
      <div className="space-y-3">
        <div className="-space-y-1">
          <p className="font-bold text-[1.5rem] flex justify-between">
            <span>{workPosition}</span>
            <span className="hidden lg:block">
              {startDate} - {endDate}
            </span>
          </p>
          <div className="text-accent-foreground/80 text-[1.1rem] font-semibold flex justify-between">
            <div>
              <span>{companyName} - </span>
              <span className="font-normal">{companyLocation}</span>
            </div>
            <span className="font-normal hidden lg:block">
              {calculateExperience(startDateOfWork)}
            </span>
          </div>
        </div>

        <div className="block lg:hidden">
          <p className="font-semibold text-[1.1rem]">
            {startDate} - {endDate}
          </p>
          <p className="text-accent-foreground/80 text-[1rem] font-semibold">
            {calculateExperience(startDateOfWork)}
          </p>
        </div>

        <ul className="space-y-[1rem]">
          {workContributions.map((contribution) => (
            <li key={contribution} className="flex items-start gap-2 w-[85%]">
              <div className="size-2 -z-10 rounded-full bg-primary shrink-0 translate-y-[100%]" />
              <p>{contribution}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
