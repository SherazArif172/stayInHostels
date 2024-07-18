import React from "react";
import ROom from "../../../../../public/roomsRout/room1.webp";
import Image from "next/image";

const RoomCards = () => {
  return (
    <div className="lg:py-16 py-8 lg:px-16 px-4">
      {/* Main div */}

      <div className="flex">
        <div className="relative aspect-[15/10] w-96 rounded-lg">
          <Image
            src={ROom}
            fill
            className="object-cover rounded-lg"
            alt="image"
          />
        </div>
        <div className="px-8 py-8">
          <p className="font-semibold text-xl">
            Standard 6 Bed Female Dorm Shared Bathroom Diam phasellus vest
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoomCards;
