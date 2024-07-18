"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Faq from "../../../../../data/faq.json";

const Faqs = () => {
  return (
    <div className="md:px-16 px-4 lg:py-16 py-8 m-auto max-w-7xl">
      <div className="flex lg:flex-row flex-col justify-between lg:gap-40">
        <p className="md:text-4xl text-3xl font-bold">
          Frequently asked questions about hostel
        </p>
        <p className="lg:text-right lg:mt-0 mt-4">
          Diam phasellus vestibulum lorem sed risus ultricies tristique
        </p>
      </div>
      <div className="mt-8">
        <Accordion type="single" collapsible className="w-full">
          {Faq.map((faq, index) => (
            <AccordionItem value="item-1" key={index}>
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
