import Avatar from "@/assets/Avatar.png";
import CopyButton from "@/components/customs/CopyButton";
import Image from "next/image";
import SendEmailForm from "./_component/SendEmailForm";

export default function Contact() {
  return (
    <div className="flex-1 flex flex-col relative pr-[5rem]">
      {/* <div className="flex-1 grid grid-cols-[30rem_1fr] lg:-translate-x-[21%] bg-blue-500">
        <div className="hidden aspect-square lg:flex w-full lg:flex-1 lg:h-full  bg-red-500">
          <Image className="mt-auto" src={Avatar} alt="profile avatar" />
        </div>
        <div>asd</div>
      </div> */}

      <div className="pl-[18rem] pt-[2rem] space-y-4">
        <div>
          <p className="text-[2.5rem] font-bold text-primary">
            Contact Information
          </p>
        </div>

        <div className="space-y-5">
          <div className="">
            <div className="flex items-center gap-2">
              <p className="text-[1.5rem] font-semibold ">Email</p>
              <CopyButton textToCopy="Bayaborda.f@gmail.com" />
            </div>
            <p className="text-[1.2rem] text-muted-foreground">
              Bayaborda.f@gmail.com
            </p>
          </div>
          <div className="">
            <div className="flex items-center gap-2">
              <p className="text-[1.5rem] font-semibold ">Phone</p>
              <CopyButton textToCopy="+639457934165" />
            </div>
            <p className="text-[1.2rem] text-muted-foreground">
              +63 945 793 4165
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-accent-foreground text-[1.1rem]">
              GET IN TOUCH
              <span> ( send me an email )</span>
            </p>

            <p className="text-muted-foreground text-[.9rem]">
              *Note: You can only send me an email one at a time. If you are
              unable to send me an email through the website, please send me an
              direct email
            </p>

            <SendEmailForm />
          </div>
        </div>
      </div>

      <div className="hidden aspect-square lg:flex w-[30rem] lg:absolute lg:left-0 lg:top-0 lg:translate-x-[-48%] lg:flex-1 lg:h-full">
        <Image className="mt-auto" src={Avatar} alt="profile avatar" />
      </div>
    </div>
  );
}