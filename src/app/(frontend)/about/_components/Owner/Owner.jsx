"use client";

import Image from "next/image";
import React from "react";
import Ownerimg from "../../../../../../public/owner/owner.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const Owner = () => {
  return (
    <div className="lg:py-24 py-8 lg:px-16 px-4 max-w-[1920px]  bg-primary-bgg">
      <div className="max-w-6xl m-auto">
        <div className="flex md:flex-row flex-col md:items-center gap-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative md:w-44 w-40 aspect-square rounded-full "
          >
            <Image
              src={Ownerimg}
              fill
              className="object-cover rounded-full "
              alt="image"
            />
          </motion.div>
          <div className="md:w-4/6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-extrabold text-xl"
            >
              “ Founded with a vision to make comfortable and affordable hostel
              stays accessible to every traveler. “
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex md:flex-row flex-col mt-2 md:gap-11 "
            >
              <p>Sajjad Arif Bhatti</p>
              <p>Founder of “STAY INN HOSTELS”</p>
            </motion.div>
          </div>
        </div>
        <div className="mt-10 flex md:flex-row flex-col md:gap-16 gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:pl-8 pl-4 border-l-2 border-primary md:w-1/2"
          >
            <p className="font-extrabold text-xl ">
              Are you looking for an apartment?
            </p>
            <p className="mt-2 ">
              Explore our selection of comfortable <br /> and affordable options
              tailored to your <br /> needs.
            </p>
            <Link href={"/rooms"}>
              <Button className="mt-7">View rooms</Button>
            </Link>{" "}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-1/2"
          >
            <p className="text-xl font-extrabold">Newsletter</p>
            <p className="mt-4">
              Stay updated with the latest news, offers, <br /> and travel tips
              by subscribing to ou <br /> newsletter.
            </p>
            <div className="border border-black md:mt-10 mt-7 w-80 rounded-lg px-4 flex bg-white items-center ">
              <Input placeholder="Email adress" />
              <div className="animate-pulse relative z-10 h-full">
                <ArrowRight className="w-8  " />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Owner;
