"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
// import { tree } from "next/dist/build/templates/app-page";

const Choose = () => {
  return (
    <motion.div
      initial={{ y: 150, opacity: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileInView={{ y: 0, opacity: 1 }}
      className=" lg:max-w-[360px] lg:mx-0  mt-9 shadow-custom p-11 bg-primary text-white rounded-md"
    >
      <p className="text-4xl font-extrabold ">Stay Longer, Save More</p>
      <p className="text-lg mt-4">
        It&apos;s simple the longer you stay, the more you save!
      </p>
      <p className="border-l-2 border-white pl-4 mt-4">
        Save up to 20% off the nightly rate on stays between 7-14 nights <br />
        <br />
        Save up to 30% off the nightly rate on stays between 14-29 nights
      </p>
      <Link href={"/rooms"}>
        <Button className="mt-4 px-4 py-6 bg-primary-cstm text-primary font-semibold hover:border border-primary-cstm">
          Choose room
        </Button>
      </Link>
    </motion.div>
  );
};

export default Choose;
