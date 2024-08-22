"use client";

import React, { useState, useEffect } from "react";
import not_found from "../../public/not_found/404_Illustration.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Error({ error, reset }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const imageStyle = {
    transform: `translate(${mousePosition.x / 50}px, ${
      mousePosition.y / 50
    }px)`,
  };

  return (
    <div className="flex justify-center md:flex-row flex-col items-center h-full text-center">
      <div className="leading-7 md:p-16 p-8 md:max-w-[]">
        <p className="md:text-8xl sm:text-7xl text-6xl py-5  font-extrabold text-[#235784]">
          500
        </p>
        <p className="lg:text-4xl md:text-3xl text-2xl pb-5  leading-10 font-extrabold text-[#235784]">
          Internal Server Error
        </p>
        <p className="md:text-xl text-lg">
          We appologize for inconvenience please try again later.
        </p>
        <Link href="/">
          <Button className="mt-5">Back to Home</Button>
        </Link>
      </div>
    </div>
  );
}
