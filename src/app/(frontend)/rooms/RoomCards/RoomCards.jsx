"use client";

import React from "react";
import ROom from "../../../../../public/roomsRout/room1.webp";
import Image from "next/image";
import Link from "next/link";
import { BedSingle, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import roomsData from "../../../../data/rooms.json";

const RoomCards = () => {
  return (
    <div className="lg:py-16 py-8 lg:px-16 px-4 max-w-7xl m-auto">
      {/* Main div */}

      {roomsData.map((room, index) => (
        <div className="flex items-center shadow-custom rounded-lg" key={index}>
          <div className="relative aspect-[15/10] w-96 rounded-l-lg overflow-hidden">
            <Image
              src={room.image}
              fill
              className="object-cover rounded-l-lg hover:scale-110 duration-500"
              alt="image"
            />
          </div>
          <div className="px-8 flex justify-between">
            <div className="w-full">
              <div className="mt-6">
                {" "}
                <Link
                  href="/rooms"
                  className="font-semibold text-2xl hover:text-primary duration-300 "
                >
                  {room.title}
                </Link>
              </div>
              <p className=" mt-4 text-lg">{room.description} </p>
              <div className="flex gap-10 mt-4">
                <div className="flex gap-1 justify-center items-center h-[50px]">
                  <User strokeWidth={1} className="w-5" />
                  <p className="">{room.sleep}</p>
                </div>
                <div className="flex gap-1 justify-center items-center">
                  <BedSingle strokeWidth={1} className="w-5" />
                  <p className=" ">{room.bed1}</p>
                </div>
              </div>
            </div>
            <div className="w-8/12 text-end">
              <p className="text-5xl font-semibold mt-6">
                ${room.offer1}{" "}
                <span className="text-base font-normal"> / 1 night</span>
              </p>
              <p className="font-semibold text-2xl mt-6 text-foreground/70">
                ${room.offer2}{" "}
                <span className="text-base font-normal">/ 7 nights</span>
              </p>
              <Button className="text-white bg-primary  hover:scale-110 duration-500 transition-all mt-8">
                Book now
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomCards;
