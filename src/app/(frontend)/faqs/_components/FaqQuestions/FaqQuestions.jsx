"use client";

import React from "react";
import Questionss from "@/app/(frontend)/about/_components/Question/_components/Questionss";
import Image from "next/image";
import Faqimg from "../../../../../../public/faqs/faqimg.webp";
import { Input } from "@/components/ui/input";
import { MailOpen, User } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const FaqQuestions = () => {
  return (
    <div className="lg:py-16 py-8 lg:px-16 px-4 max-w-7xl m-auto flex lg:flex-row flex-col  lg:gap-16 gap-12 items-center">
      <motion.div
        initial={{ y: 150, opacity: 0.5 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full bg-white rounded-l-lg max-w-full"
      >
        <p className="md:text-4xl text-3xl font-bold">
          We are ready answer your question{" "}
        </p>
        <div className="mt-10">
          <div className="flex sm:flex-row flex-col gap-6">
            <div className="border w-full px-5 border-black rounded-lg flex justify-between items-center">
              <Input type="text" placeholder="Name" /> <User strokeWidth={1} />
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
        <Button className="mt-10 sm:w-auto w-full">Send message</Button>
      </motion.div>
      <motion.div
        initial={{ x: 150, opacity: 0.5 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative lg:aspect-[10/12] aspect-video w-full rounded-lg overflow-hidden"
      >
        <Image
          src={Faqimg}
          fill
          alt="image"
          className="object-cover w-full h-full rounded-lg hover:scale-110 duration-500"
        />
      </motion.div>
    </div>
  );
};

export default FaqQuestions;
