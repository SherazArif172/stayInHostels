"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import Card from "./_components/Card";
import { motion } from "framer-motion";
import Link from "next/link";

const Rooms = () => {
  return (
    <div className="lg:px-16 lg:py-28 py-16 max-w-[1920px] m-auto">
      <div className="max-w-7xl m-auto">
        <div className="flex justify-between items-center lg:mx-0 mx-5 ">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:text-4xl text-2xl font-extrabold"
          >
            Hostel rooms
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Link href={"/rooms"}>
              <Button className="bg-primary-cstm text-primary font-bold">
                View all rooms
              </Button>
            </Link>
          </motion.div>
        </div>
        <Card />
      </div>
    </div>
  );
};

export default Rooms;
