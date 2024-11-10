import Experience from "./Experience";

const EXPERIENCES = [
  {
    companyName: "Media Meter Inc.",
    companyLogo: "/images/mmi-logo.png",
    startDateOfWork: "2023-10-09",
    workPosition: "Junior Frontend Developer",
    companyLocation: "Quezon City, Philippines",
    workContributions: [
      "I work closely with backend developers to facilitate seamless API integration, emphasizing data flow, functionality, and performance to deliver an optimal user experience.",

      "I contribute to the development of an AI-powered website application, focusing on creating a seamless and dynamic user experience.",

      "I work closely with the UI/UX team to ensure that the website's user interface is visually appealing, intuitive, andaligned with the desired user experience",
    ],
    endDateOfWork: "",
  },
];

export default function ExperiencePage() {
  return (
    <div>
      <div className="pl-[3rem] pr-[6rem] ">
        <div className="space-y-[5rem]">
          {EXPERIENCES.map((experience) => (
            <Experience key={experience.companyName} {...experience} />
          ))}
        </div>
      </div>
    </div>
  );
}
