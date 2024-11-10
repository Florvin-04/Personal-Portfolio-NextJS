import { cn } from "@/lib/utils";

type Props = {
  parentClassName?: string;
  textClassName?: string;
};

export default function Copyright({ parentClassName, textClassName }: Props) {
  return (
    <div className={cn("", parentClassName)}>
      <p
        className={cn(
          "text-center text-sm text-muted-foreground/40",
          textClassName
        )}
      >
        © Florvin Bayaborda, 2024. All rights reserved.
      </p>
    </div>
  );
}
