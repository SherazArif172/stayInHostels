"use client";

import React from "react";
import Video from "../../../../../../public/benifits/video.webp";
import Image from "next/image";
import { motion } from "framer-motion";

const Benifits = () => {
  return (
    <div className="lg:pt-16 pt-8 lg:pb-16  lg:px-16 px-4 max-w-[1920px] m-auto">
      <motion.div
        initial={{ y: 150, opacity: 0.5 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex md:flex-row flex-col justify-between lg:gap-28 gap-5"
      >
        <p className="md:text-4xl text-3xl md:max-w-96 font-semibold">
          The main benefits to choose Hosteller
        </p>
        <p className="md:text-right md:text-lg  md:w-5/12 px-2">
          Aliquam eleifend mi in nulla. Viverra nibh cras pulvinar mattis nunc
        </p>
      </motion.div>
      <div className="flex md:flex-row flex-col shadow-custom mt-7">
        <div className="md:px-16 px-8 md:my-16 mt-10">
          <p className="md:text-5xl text-4xl font-semibold text-primary">
            240+
          </p>
          <p className="mt-3">
            Consequat interdum varius sit amet mattis vulputate enim nulla
          </p>
        </div>
        <div className="md:px-16 px-8 md:my-16 mt-10 md:border-l-2 border-primary-cstm">
          <p className="md:text-5xl text-4xl font-semibold text-primary">60+</p>
          <p className="mt-3">
            Consequat interdum varius sit amet mattis vulputate enim nulla
          </p>
        </div>
        <div className="md:px-16 px-8 md:my-16 my-10 md:border-l-2 border-primary-cstm">
          <p className="md:text-5xl text-4xl font-semibold text-primary">98%</p>
          <p className="mt-3">
            Consequat interdum varius sit amet mattis vulputate enim nulla
          </p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="md:aspect-[14/6] aspect-square relative overflow-hidden rounded-lg"
      >
        <Image
          src={Video}
          fill
          alt="image"
          className="object-cover w-full h-full hover:scale-110 duration-500 rounded-lg"
        />
      </motion.div>{" "}
    </div>
  );
};

export default Benifits;
