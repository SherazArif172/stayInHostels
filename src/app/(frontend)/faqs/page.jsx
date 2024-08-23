"use client";

import React from "react";
import Link from "next/link";
import Faq from "../../../data/faq.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FaqQuestions from "./_components/FaqQuestions/FaqQuestions";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div className=" ">
      <div className="text-lg h-44 bg-primary-bgg md:px-14 px-11 md:py-14 py-10 max-w-[1920px] m-auto">
        <div className="max-w-4xl m-auto">
          <Link href="/" className="text-primary font-semibold">
            Home
          </Link>{" "}
          / Frequently asked questions
          <p className="md:text-5xl text-2xl font-extrabold mt-2">
            Frequently asked questions
          </p>
        </div>
      </div>
      <FaqQuestions />

      <div className="lg:py-16 py-8 lg:px-16 px-4   m-auto max-w-[1920px]">
        {/* <div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div> */}
        <motion.p
          initial={{ x: 150, opacity: 0.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="sm:text-4xl text-2xl font-extrabold text-center"
        >
          Frequently asked questions
        </motion.p>
        <motion.div
          initial={{ y: 150, opacity: 0.5 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full mt-12"
        >
          <Accordion
            type="single"
            collapsible
            className="w-full h-full max-w-7xl m-auto"
          >
            {Faq.map((faq, index) => (
              <AccordionItem value={faq.value} key={index}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
};

export default page;
