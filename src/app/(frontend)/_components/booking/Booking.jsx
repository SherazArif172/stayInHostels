"use client";

import { Bed, HandHelping, Hotel } from "lucide-react";
import Image from "next/image";
import React from "react";
import Bookingg from "../../../../../public/booking/booking.png";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Booking = () => {
  return (
    <div className="lg:py-24 py-8 bg-primary-bgg lg:my-16 max-w-[1920px] m-auto">
      <div className="flex lg:flex-row flex-col  lg:py-0 py-4  relative w-full  max-w-7xl m-auto">
        <div className="lg:px-16 px-6 py-16 lg:w-1/2 w-full lg:m-0 m-auto">
          <motion.p
            initial={{ y: 150, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:text-4xl text-2xl font-extrabold lg:w-auto md:w-[480px] "
          >
            Find suitable budget accommodation
          </motion.p>
          <motion.p
            initial={{ y: 150, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-4 lg:w-auto md:w-[480px]"
          >
            Discover affordable stays that don&apos;t compromise on comfort,
            offering the perfect balance of quality and value for every
            traveler.
          </motion.p>
          <div className="mt-4">
            <motion.div
              initial={{ y: 150, opacity: 0.5 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex gap-5 items-center "
            >
              <div className="bg-primary p-3 rounded-md">
                <Hotel className="text-white w-12 h-12" strokeWidth={1.1} />
              </div>
              <div>
                <p className="text-xl font-extrabold">Hostel territory</p>
                <p className="w-48">Relax in our inviting common areas.</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 150, opacity: 0.5 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex gap-5 items-center mt-7 "
            >
              <div className="bg-primary p-3 rounded-md">
                <HandHelping
                  className="text-white w-12 h-12"
                  strokeWidth={1.1}
                />
              </div>
              <div>
                <p className="text-xl font-extrabold">Accommodates guests</p>
                <p className="w-48">Comfortable rooms for every traveler.</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 150, opacity: 0.5 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex gap-5 items-center mt-7 "
            >
              <div className="bg-primary p-3 rounded-md">
                <Bed className="text-white w-12 h-12" strokeWidth={1.1} />
              </div>
              <div>
                <p className="text-xl font-extrabold">Grateful guests</p>
                <p className="w-48">Hear from satisfied travelers. </p>
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2 w-full lg:m-0 m-auto relative aspect-[12/12] overflow-hidden "
        >
          <Image
            src={Bookingg}
            fill
            className=" object-cover lg:w-5/6 w-full  hover:scale-110 duration-1000 md:px-0 px-3"
            alt="image"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="absolute top-72 right-[470px] lg:block hidden"
        >
          <Family />
        </motion.div>
      </div>
    </div>
  );
};

export default Booking;

const Family = () => {
  return (
    <div className="border shadow-custom w-80 bg-white p-14 rounded-lg m-auto">
      <p className="font-extrabold text-xl">
        Family Room with Private Bathroom
      </p>
      <p className="text-lg mt-3">
        <span className="text-5xl font-extrabold">$149</span>/ 1 night
      </p>
      <Button className="bg-primary-cstm text-primary font-bold mt-3">
        see availability
      </Button>
    </div>
  );
};
