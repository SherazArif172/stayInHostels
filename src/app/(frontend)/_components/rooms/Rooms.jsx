import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import image1 from "../../../../../public/rooms/room1.webp";

const Rooms = () => {
  return (
    <div className="lg:px-16 py-28">
      <div>
        <div className="flex justify-between">
          <p className="text-4xl font-bold">Hostel rooms</p>
          <Button className="bg-primary">View all rooms</Button>
        </div>
        <div className=" w-[360px]">
          <div className="relative">
            <Image src={image1} className="relative bg-cover" />
            <p className="absolute right-0 bottom-6 bg-background px-4 py-1 rounded-l-md">
              <span className="text-2xl font-bold">$18</span>/ 1 night
            </p>
          </div>
          <div className="p-6">
            <p className="text-2xl font-bold">
              Bed in 6-Bed Room with Shared Bathroom
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Rooms;
