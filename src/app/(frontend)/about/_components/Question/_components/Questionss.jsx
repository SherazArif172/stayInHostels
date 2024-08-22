"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MailOpen, User } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const Questionss = () => {
  return (
    <motion.div
      initial={{ y: 150, opacity: 0.5 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full bg-white shadow-custom md:px-16 px-4 md:py-16 py-8 rounded-lg max-w-full"
    >
      <p className="md:text-4xl text-3xl font-extrabold">
        We are ready answer your question{" "}
      </p>
      <div className="mt-10">
        <div className="flex sm:flex-row flex-col gap-6">
          <div className="border w-full px-5 border-black rounded-lg flex justify-between items-center">
            <Input type="email" placeholder="Email" /> <User strokeWidth={1} />
          </div>
          <div className="border w-full px-5 border-black rounded-lg flex justify-between items-center">
            <Input type="email" placeholder="Email" />{" "}
            <MailOpen strokeWidth={1} />
          </div>
        </div>
        <div className="mt-10">
          <Textarea placeholder="Message" />
        </div>
      </div>
      <Button className="mt-10 sm:w-auto w-full">Get in touch</Button>
    </motion.div>
  );
};

export default Questionss;
