"use client";

import Image from "next/image";
import React from "react";
import Ownerimg from "../../../../../../public/owner/owner.webp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Owner = () => {
  return (
    <div className="lg:py-16 py-8 lg:px-16 px-4 max-w-7xl m-auto">
      <div className="flex md:flex-row flex-col md:items-center  gap-10">
        <motion.div
          initial={{ x: -150, opacity: 0.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
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
            initial={{ x: 150, opacity: 0.5 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-semibold text-xl"
          >
            Mauris a diam maecenas sed enim ut sem. Scelerisque in dictum non
            consectetur a erat nam. Commodo viverra maecenas accumsan lacus
          </motion.p>
          <motion.div
            initial={{ x: 150, opacity: 0.5 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex md:flex-row flex-col mt-2 md:gap-11 "
          >
            <p>Johnathan Jennings </p>
            <p>Founder of the hostel Hosteller</p>
          </motion.div>
        </div>
      </div>
      <div className="mt-10 flex md:flex-row flex-col md:gap-16 gap-8">
        <motion.div
          initial={{ x: 150, opacity: 0.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:pl-8 pl-4 border-l-2 border-primary md:w-1/2"
        >
          <p className="font-semibold text-xl ">
            Are you looking for an apartment?
          </p>
          <p className="mt-2 ">
            Tellus mauris a diam maecenas sed enim. Facilisi etiam dignissim
            diam quis enim lobortis scelerisque <br /> fermentum
          </p>
          <Button className="mt-7">View rooms</Button>
        </motion.div>
        <motion.div
          initial={{ x: 150, opacity: 0.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-1/2"
        >
          <p className="text-xl font-semibold">Newsletter</p>
          <p className="mt-4">
            Urna id volutpat lacus laoreet. Viverra vitae <br /> congue eu
            consequat ac
          </p>
          <div className="border border-black md:mt-10 mt-7 w-80 rounded-lg px-4 flex items-center ">
            <Input placeholder="Email adress" />{" "}
            <div className="animate-pulse relative z-10 h-full">
              <ArrowRight className="w-8  " />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Owner;
