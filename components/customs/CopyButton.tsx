"use client";

import Icons from "@/assets/icons";
import { Button } from "../ui/button";

import { toast } from "sonner";

type Props = {
  textToCopy: string;
};

export default function CopyButton({ textToCopy }: Props) {
  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(textToCopy);
      toast.success("Copied to clipboard");
    } catch (error) {
      toast.error("Failed to copy");
    }
  };

  return (
    <Button
      onClick={handleCopy}
      variant="ghost"
      size="icon"
      icon={<Icons.Copy className="size-[1.2rem]" />}
    />
  );
}
