import Image from "next/image";
import React from "react";
import Image1 from "../../../../../public/gallery/full01.webp";
import Image2 from "../../../../../public/gallery/full09.webp";
import Image3 from "../../../../../public/gallery/full12.webp";
import Image4 from "../../../../../public/gallery/gallery04.webp";
import { Button } from "@/components/ui/button";
import { Scan } from "lucide-react";

const Gallery = () => {
  return (
    <div className="py-16 px-14">
      <div className="flex justify-between items-center">
        <p className="md:text-4xl text-2xl font-semibold ">
          {" "}
          Photos of our rooms
        </p>
        <Button>View all photos</Button>
      </div>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-11 mt-8">
        <div className="relative aspect-[11/16] overflow-hidden group">
          <Image
            src={Image1}
            fill
            className="w-full h-full object-cover group-hover:scale-110 duration-500 rounded-lg"
            alt="image"
          />
          <div className="w-full h-full hover:bg-primary/70 duration-500 z-10 relative flex justify-center items-center group">
            {" "}
            <Scan
              className="hidden group-hover:block hover:duration-500 text-white w-24 h-24"
              strokeWidth={1}
            />
          </div>
        </div>
        <div className="flex flex-col gap-11">
          <div className="relative aspect-[12/8] overflow-hidden group">
            {" "}
            <Image
              src={Image2}
              fill
              className="w-full h-full object-cover group-hover:scale-110 duration-500 rounded-lg"
              alt="image"
            />
            <div className="w-full h-full hover:bg-primary/70 duration-500 z-10 relative flex justify-center items-center group">
              {" "}
              <Scan
                className="hidden group-hover:block hover:duration-500 text-white w-24 h-24"
                strokeWidth={1}
              />
            </div>
          </div>
          <div className="relative aspect-[12/8] overflow-hidden group">
            <Image
              src={Image3}
              fill
              className="w-full h-full object-cover group-hover:scale-110 duration-500 rounded-lg"
              alt="image"
            />
            <div className="w-full h-full hover:bg-primary/70 duration-500 z-10 relative flex justify-center items-center group">
              {" "}
              <Scan
                className="hidden group-hover:block hover:duration-500 text-white w-24 h-24"
                strokeWidth={1}
              />
            </div>
          </div>
        </div>
        <div className="relative aspect-[11/16] overflow-hidden group">
          <Image
            src={Image4}
            fill
            className="w-full h-full object-cover group-hover:scale-110 duration-500 rounded-lg"
            alt="image"
          />
          <div className="w-full h-full hover:bg-primary/70 duration-500 z-10 relative flex justify-center items-center group">
            {" "}
            <Scan
              className="hidden group-hover:block hover:duration-500 text-white w-24 h-24"
              strokeWidth={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
