import Link from "next/link";
import React from "react";
import RoomCards from "./RoomCards/RoomCards";

const page = () => {
  return (
    <div>
      <div className="bg-primary-bgg h-44 p-14 max-w-[1920px] m-auto">
        <div className="text-lg">
          <Link href="/" className="text-primary font-semibold">
            Home
          </Link>{" "}
          / Rooms
        </div>
        <p className="text-5xl font-semibold mt-2">Rooms</p>
      </div>
      <RoomCards />
    </div>
  );
};

export default page;
