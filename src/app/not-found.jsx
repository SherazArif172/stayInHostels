"use client";

import React, { useState, useEffect } from "react";
import not_found from "../../public/not_found/404_Illustration.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const NotFound = () => {
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
    <div className="flex justify-center md:flex-row flex-col items-center h-full">
      <div className="leading-7 md:p-16 p-8 md:max-w-[50%]">
        <p className="md:text-8xl sm:text-7xl text-6xl py-5  font-extrabold text-[#235784]">
          404
        </p>
        <p className="lg:text-4xl md:text-3xl text-2xl pb-5  leading-10 font-extrabold text-[#235784]">
          This is not the page you are looking for!
        </p>
        <p className="md:text-xl text-lg">
          Tellus in metus vulputate eu scelerisque felis imperdiet proin. Sed
          faucibus turpis in eu mi bibendum
        </p>
        <Button href="/" className="mt-5">
          Back to Home
        </Button>
      </div>
      <div className="relative w-full aspect-[12/12] flex justify-center items-center overflow-hidden">
        <Image
          src={not_found}
          className=" object-cover w-full h-full"
          alt="image"
          fill
          style={imageStyle}
        />
      </div>
    </div>
  );
};

export default NotFound;
