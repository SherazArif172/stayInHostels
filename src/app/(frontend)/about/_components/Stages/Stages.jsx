"use client";

import { Button } from "@/components/ui/button";
import { Banknote, CalendarCheck, LockKeyholeOpen, Phone } from "lucide-react";
import Image from "next/image";
import { fromJSON } from "postcss";
import React from "react";
import Bookingimg from "../../../../../../public/about_booking/booking.png";
import { motion } from "framer-motion";

const Stages = () => {
  return (
    <div className="flex lg:flex-row flex-col md:gap-16 gap-9 lg:px-16 px-4 lg:py-16 py-6 m-auto max-w-7xl ">
      <div className="w-full ">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:text-4xl text-3xl font-extrabold"
        >
          Stages of booking a room
        </motion.p>

        {/* Main  */}

        <div className="flex flex-col md:gap-9 gap-6 mt-6">
          <motion.div
            initial={{ y: 150, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-6"
          >
            <div className="p-7 bg-primary-cstm rounded-lg">
              <CalendarCheck
                className="self-center text-primary w-10 h-10"
                strokeWidth={2}
              />
            </div>
            <div className="">
              <p className="text-2xl font-extrabold">Room reservation</p>
              <p className="mt-1">
                Secure your preferred room in just a few clicks.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 150, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-6 "
          >
            <div className="p-7 bg-primary-cstm rounded-lg">
              <Banknote
                className="self-center text-primary w-10 h-10"
                strokeWidth={2}
              />
            </div>
            <div className="">
              <p className="text-2xl font-extrabold">
                Filling in documents and payment
              </p>
              <p className="mt-1">
                Complete the paperwork and payment easily online.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 150, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-6"
          >
            <div className="p-7 bg-primary-cstm rounded-lg">
              <LockKeyholeOpen
                className="self-center text-primary w-10 h-10"
                strokeWidth={2}
              />
            </div>
            <div className="">
              <p className="text-2xl font-extrabold">Сheck in hostel</p>
              <p className="mt-1">
                Enjoy a smooth and quick check-in process upon arrival.
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 150, opacity: 0.5 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button className="mt-9 sm:w-auto w-full">Choose room</Button>
        </motion.div>
      </div>
      <div className="relative aspect-[12/8]  w-full overflow-hidden shadow-custom rounded-lg">
        <Image
          src={Bookingimg}
          fill
          alt="image"
          className="object-cover w-full h-full hover:scale-110 duration-500 rounded-lg"
        />
      </div>
    </div>
  );
};

export default Stages;
