"use client";

import Image from "next/image";
import React from "react";
import Image1 from "../../../../../public/gallery/gallery04.png";
import Image2 from "../../../../../public/gallery/full02.png";
import Image3 from "../../../../../public/gallery/full03.png";
import Image4 from "../../../../../public/gallery/full01.png";
import { Button } from "@/components/ui/button";
import { Scan } from "lucide-react";
import { motion } from "framer-motion";
// import ImageGallery from "react-image-gallery";

const Gallery = () => {
  return (
    <div className="lg:py-16 py-8 lg:px-14 px-4 m-auto max-w-7xl">
      <div className="flex justify-between items-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:text-4xl text-2xl font-extrabold "
        >
          {" "}
          Photos of our rooms
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Button>View all photos</Button>
        </motion.div>
      </div>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-11 mt-8">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative aspect-[11/16] overflow-hidden group"
        >
          <Image
            src={Image1}
            fill
            className=" w-full h-full object-cover group-hover:scale-110 duration-500 rounded-lg"
            alt="image"
          />
          <div className="w-full h-full hover:bg-primary/70 duration-500 z-10 relative flex justify-center items-center group">
            {" "}
            <Scan
              className="hidden group-hover:block hover:duration-500 text-white w-24 h-24"
              strokeWidth={1}
            />
          </div>
        </motion.div>
        <div className="flex flex-col gap-11">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[12/8] overflow-hidden group"
          >
            {" "}
            <Image
              src={Image2}
              fill
              className="w-full h-full object-cover group-hover:scale-110 duration-500 rounded-lg"
              alt="image"
            />
            <div className="w-full h-full hover:bg-primary/70 duration-500 z-10 relative flex justify-center items-center group">
              {" "}
              <Scan
                className="hidden group-hover:block hover:duration-500 text-white w-24 h-24"
                strokeWidth={1}
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[12/8] overflow-hidden group"
          >
            <Image
              src={Image3}
              fill
              className="w-full h-full object-cover group-hover:scale-110 duration-500 rounded-lg"
              alt="image"
            />
            <div className="w-full h-full hover:bg-primary/70 duration-500 z-10 relative flex justify-center items-center group">
              {" "}
              <Scan
                className="hidden group-hover:block hover:duration-500 text-white w-24 h-24"
                strokeWidth={1}
              />
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative aspect-[11/16] overflow-hidden group"
        >
          <Image
            src={Image4}
            fill
            className="w-full h-full object-cover group-hover:scale-110 duration-500 rounded-lg"
            alt="image"
          />
          <div className="w-full h-full hover:bg-primary/70 duration-500 z-10 relative flex justify-center items-center group">
            {" "}
            <Scan
              className="hidden group-hover:block hover:duration-500 text-white w-24 h-24"
              strokeWidth={1}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
