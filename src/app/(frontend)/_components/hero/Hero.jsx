"use client";

import React, { useState } from "react";
import Heroimg from "../../../../../public/hero/hero.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Blocks, CalendarDays, ChevronDown, User } from "lucide-react";
import { motion } from "framer-motion";
import { Calendar } from "@/components/ui/calendar";

const Hero = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-end py-9  relative  max-w-[1920px] lg:bg-background bg-primary-bgg m-auto">
      <div className="md:flex justify-center items-center lg:pl-7 lg:h-[700px] lg:pt-0 pt-12">
        <div className="lg:h-[540px] lg:w-[700px] w-screen lg:bg-primary-bgg lg:pl-9 pl-3  px-3 rounded-l-lg lg:pt-16 pt-8">
          <motion.h1
            className="text-5xl  font-extrabold  lg:max-w-xl "
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary">STAY INN</span> HOSTELS — Your
            Gateway to Memorable{" "}
            <span className="text-primary"> Adventures</span>
          </motion.h1>
          <motion.p
            className="max-w-lg my-8 pl-4 border-l-[3px] border-primary text-lg "
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Where comfort meets community, offering a welcoming space for
            free-spirited travelers to connect, explore, and create
            unforgettable memories together.
          </motion.p>
        </div>
      </div>
      <motion.div
        className="relative aspect-video z-10 w-full lg:block hidden max-w-4xl"
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
      className="lg:flex hidden rounded-md  shadow-custom w-[829px] lg:mt-0 mt-5 pl-14 lg:absolute lg:bottom-52 lg:left-16 z-10 bg-background "
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
        <p className="font-extrabold">Check-in</p>
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
        <p className="font-extrabold">Check-out</p>
        <div className="flex gap-5 mt-2">
          <CalendarDays className="text-primary" />
          <p>Add date</p>
          <ChevronDown />
        </div>
      </div>

      <div className="w-full my-4 border-l-2 pl-7 ml-4">
        <p className="font-extrabold">Guest</p>
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
  const [setshown, setsetshown] = useState(false);

  return (
    <div className="px-5">
      <div className="lg:hidden block lg:mt-0 mt-5 rounded-md  shadow-custom w-full px-10 md:py-12 py-5">
        {/* div one  */}

        <div className="flex md:flex-row flex-col md:gap-14">
          <div
            className="w-full py-4 border-b border-primary-cstm"
            onClick={() => {
              setsetshown(!setshown);
            }}
          >
            <p className="font-extrabold">Check-in</p>
            <div className="flex justify-between gap-4 mt-2 cursor-pointer w-full">
              <div className="flex justify-center items-center gap-3">
                <CalendarDays className="text-primary" />
                <p>Add date</p>
              </div>
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
          <div className="w-full py-4  border-b border-primary-cstm">
            <p className="font-extrabold">Check-out</p>
            <div className="flex justify-between gap-5 mt-2">
              <div className="flex gap-3 justify-center items-center">
                <CalendarDays className="text-primary" />
                <p>Add date</p>
              </div>
              <ChevronDown />
            </div>
          </div>
        </div>

        {/* div two  */}

        <div className="flex md:flex-row flex-col md:gap-14 justify-center items-center gap-">
          <div className="w-full py-4 border-b border-primary-cstm ">
            <p className="font-extrabold">Guest</p>
            <div className="flex mt-2 gap-4">
              <User className=" text-primary" />
              <p> 1 adult</p>
            </div>
          </div>
          <Button className="w-full mt-12 bg-primary text-white hover:bg-primary-cstm hover:text-primary ">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};
