"use client";

import React, { useState } from "react";
import Heroimg from "../../../../../public/hero/hero.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Blocks, CalendarDays, ChevronDown, User } from "lucide-react";
import { motion } from "framer-motion";
import { Calendar } from "@/components/ui/calendar";

const Hero = () => {
  return (
    <div className="flex lg:flex-row flex-col py-9  relative  max-w-7xl lg:bg-background bg-primary-bgg m-auto">
      <div className="flex justify-center items-center lg:pl-7 lg:h-[700px] lg:pt-0 pt-12">
        <div className="lg:h-[560px] lg:w-[700px] w-screen lg:bg-primary-bgg lg:pl-9 pl-3 lg:py-20 rounded-l-lg">
          <motion.h1
            className="text-5xl  font-extrabold lg:max-w-lg max-w-2xl "
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Hosteller — amazing hostel for the free spirited traveler
          </motion.h1>
          <motion.p
            className="max-w-lg my-8 pl-4 border-l-[3px] border-primary text-lg "
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Egestas pretium aenean pharetra magna ac. Et tortor consequat id
            porta nibh venenatis cras sed. Vel turpis nunc eget lorem dolor sed
          </motion.p>
        </div>
      </div>
      <motion.div
        className="relative aspect-video z-10 w-full lg:block hidden"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src={Heroimg}
          fill
          className="object-cover w-full h-full"
          alt="image"
        />
      </motion.div>

      <Booking />
      <MobileBook />
    </div>
  );
};

export default Hero;

const Booking = () => {
  const [setshown, setsetshown] = useState(false);

  return (
    <motion.div
      className="lg:flex hidden rounded-md  shadow-custom w-[829px] lg:mt-0 mt-5 pl-14 lg:absolute lg:bottom-44 lg:left-16 z-10 bg-background "
      initial={{ y: 150, opacity: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div
        className="w-full py-4 "
        onClick={() => {
          setsetshown(!setshown);
        }}
      >
        <p className="font-semibold">Check-in</p>
        <div className="flex gap-4 mt-2 cursor-pointer">
          <CalendarDays className="text-primary" />
          <p>Add date</p>
          <ChevronDown />
        </div>
        <div
          className={`${
            setshown ? "block" : "hidden"
          } absolute top-20 bg-background`}
        >
          {/* <Calendar /> */}
        </div>
      </div>
      <div className="w-full my-4 border-l-2  pl-7">
        <p className="font-semibold">Check-out</p>
        <div className="flex gap-5 mt-2">
          <CalendarDays className="text-primary" />
          <p>Add date</p>
          <ChevronDown />
        </div>
      </div>

      <div className="w-full my-4 border-l-2 pl-7 ml-4">
        <p className="font-semibold">Guest</p>
        <div className="flex mt-2 gap-4">
          <User className=" text-primary" />
          <p> 1 adult</p>
        </div>
      </div>
      <div className="w-[798px] pl-10 rounded-r-md">
        <Button className="w-full py-4 h-full rounded-l-none text-base font-bold  rounded-r-md bg-primary text-white hover:bg-white  hover:text-primary">
          Search
        </Button>
      </div>
    </motion.div>
  );
};

const MobileBook = () => {
  return (
    <div className="">
      <div className="lg:hidden block lg:mt-0 mt-5 rounded-md  shadow-custom w-full px-5 ">
        jashdjh
      </div>
    </div>
  );
};
