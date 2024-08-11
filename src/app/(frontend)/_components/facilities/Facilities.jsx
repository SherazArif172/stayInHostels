"use client";

import React from "react";
import Facilitiec from "../../../../../public/facilities/facilities.webp";
import Image from "next/image";
import { ArrowRight, Wifi } from "lucide-react";
import { MapPin } from "lucide-react";
import { Luggage } from "lucide-react";
import { CircleParking } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const Facilities = () => {
  return (
    <div className="flex lg:flex-row flex-col max-w-[1920px] m-auto">
      <div className="lg:w-1/2 md:p-16 px-3 lg:py-16 py-8 ">
        <motion.p
          initial={{ y: 150, opacity: 0.5 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:text-4xl text-2xl font-extrabold "
        >
          We have everything you need
        </motion.p>
        <motion.p
          initial={{ y: 150, opacity: 0.5 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-6 text-lg"
        >
          Posuere morbi leo urna molestie at elementum eu facilisis sed. Diam
          phasellus vestibulum lorem sed risus ultricies tristique
        </motion.p>
        <div className="grid md:grid-cols-1">
          <motion.div
            initial={{ y: 150, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex md:mt-6 md:flex-row flex-col justify-center items-center gap-4"
          >
            <p className="flex md:flex-row font-semibold flex-col items-center gap-3 md:mt-0 mt-4 md:w-1/2 text-base">
              <Wifi strokeWidth={1} className="w-16 h-16 text-primary" />
              Free available high speed WiFi
            </p>
            <p className="flex md:flex-row font-semibold flex-col items-center gap-3 md:mt-0 mt-4 md:w-1/2 text-base">
              <MapPin strokeWidth={1} className="w-16 h-16 text-primary" />
              Сonvenient location in the center
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 150, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex md:mt-6 md:flex-row flex-col justify-center items-center gap-4"
          >
            <p className="flex md:flex-row font-semibold flex-col items-center gap-3 md:mt-0 mt-4 md:w-1/2 text-base">
              <Luggage strokeWidth={1} className="w-14 h-14 text-primary" />
              Free storage of luggage of any size
            </p>
            <p className="flex md:flex-row font-semibold flex-col items-center gap-3 md:mt-0 mt-4 md:w-1/2 text-base">
              <CircleParking
                strokeWidth={1}
                className="w-14 h-14 text-primary"
              />
              Parking place allocated to you
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ x: 150, opacity: 0.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex md:flex-row flex-col-reverse items-center gap-4"
        >
          <Link href={"/rooms"}>
            <Button className="sm:w-auto w-full">Book now</Button>
          </Link>
          <Link href={"#"} className="flex gap-2 text-blue-900 font-semibold">
            More about <ArrowRight className="w-4 self-center" />
          </Link>
        </motion.div>
      </div>
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="lg:w-1/2 relative lg:aspect-[11/10] overflow-hidden lg:mx-0 mx-3"
      >
        <Image
          src={Facilitiec}
          width={800}
          height={800}
          className="object-cover w-full h-full hover:scale-110 duration-1000"
          alt="image"
        />
      </motion.div>
    </div>
  );
};

export default Facilities;
