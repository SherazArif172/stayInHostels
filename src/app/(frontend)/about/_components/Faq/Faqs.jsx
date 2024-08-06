"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Faq from "../../../../../data/faq.json";
import { motion } from "framer-motion";

const Faqs = () => {
  return (
    <div className="md:px-16 px-4 lg:py-16 py-8 m-auto max-w-7xl">
      <div className="flex lg:flex-row flex-col justify-between lg:gap-40">
        <motion.p
          initial={{ x: -150, opacity: 0.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:text-4xl text-3xl font-bold"
        >
          Frequently asked questions about hostel
        </motion.p>
        <motion.p
          initial={{ x: 150, opacity: 0.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:text-right lg:mt-0 mt-4"
        >
          Diam phasellus vestibulum lorem sed risus ultricies tristique
        </motion.p>
      </div>
      <div
      // initial={{ y: 150, opacity: 0.5 }}
      // whileInView={{ y: 0, opacity: 1 }}
      // viewport={{ once: true }}
      // transition={{ duration: 0.5 }}
      // className="mt-8"
      >
        {Faq.map((faq, index) => (
          <Accordion key={index} type="single" collapsible className="w-full">
            <AccordionItem value={faq.value}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
