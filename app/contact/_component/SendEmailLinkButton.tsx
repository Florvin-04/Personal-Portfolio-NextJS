"use client";

import Icons from "@/assets/icons";
import CopyButton from "@/components/customs/CopyButton";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

type Props = {};

export default function SendEmailLinkButton({}: Props) {
  const handleCopy = () => {
    try {
      navigator.clipboard.writeText("bayaborda.f@gmail.com");
      toast.success("Copied to clipboard");
    } catch (error) {
      toast.error("Failed to copy");
    }
  };

  const sendEmail = () => {
    // const recipient = "bayaborda.f@gmail.com"; // Replace with the recipient's email
    // const subject = "";
    // const body = "Hello, ";

    // // Create the Gmail link
    // const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    //   recipient
    // )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    handleCopy();
    // Open the Gmail compose window
    window.open(
      "https://mail.google.com/mail/u/0/#inbox?compose=new",
      "_blank"
    ); // Use '_blank' to open in a new tab
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          icon={<Icons.Copy className="size-[1.2rem]" />}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={handleCopy}>Copy Email</DropdownMenuItem>
        <DropdownMenuItem
          onClick={sendEmail}
          className="flex items-center gap-2"
        >
          <span>
            <Icons.Gmail className="size-[1.2rem]" />
          </span>
          <span>Gmail</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
