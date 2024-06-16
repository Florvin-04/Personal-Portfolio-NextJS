import CountUpNumbers from "@/components/customs/CountUpNumbers";
import NavigationLink from "@/components/customs/about/NavigationLink";
import { ABOUT_LANG } from "@/lib/lang/aboutLang";

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-red-500/0 h-full">
      <div className="text-center">
        <h1
          className="font-bold"
          style={{
            // font-size: 1.5rem;
            fontSize: "clamp(2rem, 0.57rem + 2.71vw, 3rem)",
          }}
        >
          {ABOUT_LANG.heading}
        </h1>
        <p>{ABOUT_LANG.bodyText}</p>

        <div className="flex justify-center">
          {ABOUT_LANG.countUp.map((item) => {
            return <CountUpNumbers key={item.label} {...item} />;
          })}
        </div>
      </div>

      <NavigationLink />
      <div className="">{children}</div>
    </div>
  );
}
