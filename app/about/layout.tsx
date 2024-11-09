import CountUpNumbers from "@/components/customs/CountUpNumbers";
import NavigationLink from "@/components/customs/about/NavigationLink";
import { ABOUT_LANG } from "@/lib/lang/aboutLang";

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-red-500/0 flex-grow px-10 mt-[5rem] ">
      {/* lg:grid lg:grid-cols-2 lg:pr-[5rem] lg:place-content-center lg:gap-[1rem] */}
      <div className="text-center">
        <h1
          className="font-bold w-[min(100%,_20ch)] mx-auto"
          style={{
            // font-size: 1.5rem;
            fontSize: "clamp(2rem, 0.57rem + 2.71vw, 3rem)",
          }}
        >
          {ABOUT_LANG.heading}
        </h1>
        <p className=" w-[min(100%,_90ch)] mx-auto py-4">{ABOUT_LANG.bodyText}</p>

        <div className="flex justify-center">
          {ABOUT_LANG.countUp.map((item) => {
            return <CountUpNumbers key={item.label} {...item} />;
          })}
        </div>
      </div>

      <div className="mt-[4rem] lg:justify">
        <NavigationLink />
        <div className="mt-5">{children}</div>
      </div>
    </div>
  );
}
