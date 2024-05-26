"use client";

import React, { useEffect, useState } from "react";

const MousepointerBG = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  console.log(position);

  return (
    <div
      className="bg-white fixed aspect-square w-[1rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-[9999]"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

export default MousepointerBG;
