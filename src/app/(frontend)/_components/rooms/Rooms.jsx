"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import Card from "./_components/Card";
import { motion } from "framer-motion";

const Rooms = () => {
  return (
    <div className="lg:px-16 lg:py-28 py-16 max-w-7xl m-auto">
      <div className="flex justify-between items-center lg:mx-0 mx-5">
        <motion.p
          initial={{ x: -150, opacity: 0.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:text-4xl text-2xl font-extrabold"
        >
          Hostel rooms
        </motion.p>
        <motion.div
          initial={{ x: 150, opacity: 0.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button className="bg-primary-cstm text-primary font-bold">
            View all rooms
          </Button>
        </motion.div>
      </div>
      <Card />
    </div>
  );
};

export default Rooms;
