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
    <div className="md:px-16 px-4 lg:py-16 py-8 m-auto max-w-7xl ">
      <div className="flex lg:flex-row flex-col justify-between items-center lg:gap-10 mb-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:text-4xl text-3xl font-extrabold"
        >
          Frequently asked questions
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:text-right lg:mt-0 mt-4"
        >
          Find quick answers to common questions about your stay at Stay Inn
          Hostels.{" "}
        </motion.p>
      </div>
      <div>
        <Accordion type="single" collapsible className="w-full">
          {Faq.map((faq, index) => (
            <AccordionItem value={faq.value} key={index}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faqs;
