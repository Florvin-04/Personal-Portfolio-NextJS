import Avatar from "@/assets/Avatar.png";
import { Button } from "@/components/ui/button";
import { HOME_LANG } from "@/lib/lang/Home";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-red-500/0 h-full">
      <div className="h-full flex flex-col lg:flex-row bg-red-500/0 lg:justify-between">
        <div className="lg:ml-[5rem] bg-red-500/0 my-auto lg:w-[50%]">
          <div className="text-center lg:text-left">
            <h1
              className="mx-auto w-[min(18ch,_90%)] font-bold leading-[2.8rem] lg:mx-0 lg:leading-[4rem]"
              style={{
                // fontSize:
                fontSize:
                  "clamp(2.5rem, 2.210843373493976rem + 1.4457831325301207vw, 4rem)",
              }}
            >
              {HOME_LANG.heading}

              <span className="ml-2 whitespace-nowrap text-primary">
                {HOME_LANG.activeHeading}
              </span>
            </h1>
            <p className="mx-auto mt-5 w-[min(70ch,_90%)] text-[1rem] lg:mx-0 lg:w-full lg:text-[1.1rem]">
              {HOME_LANG.subHeading}
            </p>
            <p className="mt-2 font-bold text-primary/90">
              {HOME_LANG.activeSubHeading}
            </p>
          </div>
          <div className="mt-8">
            <Button
              // onClick={() => {
              //   setModalConfig({
              //     isOpenModal: true,
              //     modalClassName: "h-[90%]",
              //     modalChildren: <div className="h-full bg-red-500">asd</div>,
              //   });
              // }}
              className="mx-auto flex justify-center font-bold lg:mx-0"
            >
              {HOME_LANG.primaryButton}
            </Button>
          </div>
        </div>

        <div className="hidden aspect-square bg-red-500/0 lg:flex w-[35rem]">
          <Image className="mt-auto" src={Avatar} alt="profile avatar" />
        </div>
      </div>
      {/* <div className="absolute -right-[10rem] bottom-0 hidden aspect-square w-[min(35rem,_75%)] bg-red-500/0 lg:block">
        <Image className="" src={Avatar} alt="profile avatar" />
      </div> */}
    </main>
  );
}
