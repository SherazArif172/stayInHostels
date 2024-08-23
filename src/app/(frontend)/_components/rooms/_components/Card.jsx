"use client";

import React from "react";
import Image from "next/image";
import { User, BedSingle, ArrowRight } from "lucide-react";
import Link from "next/link";
import Cards from "../../../../../data/cards.json";
import Choose from "../../../../../components/Choose";
import { motion } from "framer-motion";

const Card = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1  md:gap-6 gap-0 justify-center lg:mx-0 mx-5 ">
      {Cards.map((data, index) => (
        <motion.div
          initial={{ y: 150, opacity: 0.5 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className=" lg:max-w-[360px]  mt-9 shadow-custom  rounded-md "
          key={index}
        >
          <div className="relative">
            <Image
              src={data.image}
              className="relative bg-cover rounded-t-md"
              width={700}
              height={700}
              alt="image"
            />
            <p className="absolute right-0 bottom-6 bg-background px-4 py-1 rounded-l-md">
              <span className="text-2xl font-bold">${data.price}</span>/{" "}
              {data.night} night
            </p>
          </div>
          <div className="p-6">
            <p className="text-2xl font-extrabold">{data.title}</p>
            <div className="flex gap-10">
              <div className="flex gap-2 justify-center items-center h-[50px]">
                <User className="text-primary" />
                <p className="text-lg ">{data.sleep} Sleeps</p>
              </div>
              <div className="flex gap-2 justify-center items-center">
                <BedSingle className="text-primary" />
                <p className="text-lg ">{data.beds} Bed</p>
              </div>
            </div>
            <Link href={"#"} className="flex gap-2 text-primary font-bold">
              see availablity <ArrowRight className="w-4" />
            </Link>
          </div>
        </motion.div>
      ))}
      <Choose />
    </div>
  );
};

export default Card;
