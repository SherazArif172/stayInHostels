"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BedSingle, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import roomsData from "../../../../data/rooms.json";
import { motion } from "framer-motion";

const RoomCards = () => {
  return (
    <div className="lg:py-16 py-8 lg:px-16 px-4  m-auto">
      {/* Main div */}

      <div className="max-w-6xl m-auto">
        {roomsData.map((room, index) => (
          <motion.div
            initial={{ y: 150, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex lg:flex-row flex-col lg:items-center shadow-custom rounded-lg mt-6 "
            key={index}
          >
            <div className="relative lg:aspect-[15/10] aspect-video lg:max-w-96 w-full lg:rounded-l-lg rounded-t-lg overflow-hidden">
              <Image
                src={room.image}
                fill
                className="object-cover lg:rounded-l-lg rounded-t-lg w-full hover:scale-110 duration-500"
                alt="image"
              />
            </div>
            <div className="md:px-8 px-5 flex md:flex-row flex-col md:justify-between md:items-center lg:py-0 py-5">
              <div className="w-full">
                <div className="mt-6">
                  {" "}
                  <Link
                    href={`/rooms/${room.id}`}
                    className="font-extrabold text-2xl hover:text-primary duration-300 "
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
              <div className="md:w-full  md:text-end">
                <p className="md:text-5xl text-3xl font-extrabold mt-6">
                  ${room.offer1}{" "}
                  <span className="text-base font-normal"> / 1 night</span>
                </p>
                <p className="font-extrabold text-2xl mt-6 text-foreground/70">
                  ${room.offer2}{" "}
                  <span className="text-base font-normal">/ 7 nights</span>
                </p>
                <Button className="text-white bg-primary  hover:scale-110 duration-500 transition-all mt-8 sm:w-auto w-full">
                  Book now
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RoomCards;
