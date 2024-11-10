"use client";

import { Button } from "@/components/ui/button";
import { ExternalLinkIcon } from "lucide-react";
import Image from "next/image";

type Props = {
  title: string;
  techStack: string[];
  description: string;
  link: string;
  image: string;
};

export default function Project({
  title,
  techStack,
  description,
  link,
  image,
}: Props) {
  // Calculate number of columns based on number of items (e.g., max 3 items per column)
  const itemsPerColumn = 5;
  const numColumns = Math.ceil(techStack.length / itemsPerColumn);

  // Split the items into columns dynamically
  const columns = Array.from({ length: numColumns }, (_, columnIndex) =>
    techStack.slice(
      columnIndex * itemsPerColumn,
      (columnIndex + 1) * itemsPerColumn
    )
  );
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-4">
      <div className="space-y-5">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <p className="font-bold text-xl">{title}</p>
            <a href={link} target="_blank" className="text-primary">
              <ExternalLinkIcon className="size-[1.5rem]" />
            </a>
          </div>
          <p className="text-accent-foreground/85 ">{description}</p>
        </div>

        <div className="space-y-2">
          <p className="font-semibold">Technology used</p>
          <div className="flex gap-x-10 -z-[10]">
            {columns.map((column, columnIndex) => (
              <div key={columnIndex} className="flex flex-col gap-y-2">
                {column.map((item, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <div className="size-[.5rem] rounded-full bg-primary" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div>
          <Button asChild>
            <a href={link} target="_blank">
              Visit Website
            </a>
          </Button>
        </div>
      </div>
      <div className="w-full h-full justify-self-start self-start">
        <Image
          className="object-contain"
          src={image}
          width={1000}
          height={1000}
          alt={`${title} project image`}
          quality={100}
        />
      </div>
    </div>
  );
}
