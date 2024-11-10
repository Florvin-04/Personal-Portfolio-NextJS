import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
  children: React.ReactNode;
  content: React.ReactNode | string;
  durationPopup?: number;
  directionPopup?: "top" | "bottom" | "left" | "right";
  sideOffsetPopup?: number;
};

export default function TooltipWrapper({
  children,
  content,
  durationPopup = 100,
  directionPopup = "bottom",
  sideOffsetPopup = 20,
}: Props) {
  return (
    <TooltipProvider delayDuration={durationPopup}>
      <Tooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent
          side={directionPopup}
          sideOffset={sideOffsetPopup}
          className="bg-popover"
        >
          {content === typeof String ? <p>{content}</p> : content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
