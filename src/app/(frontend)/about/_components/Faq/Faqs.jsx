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
    <div className="md:px-16 px-4 lg:py-16 py-8">
      {Faq.map((faq, index) => (
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" key={index}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};

export default Faqs;
