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

const page = () => {
  return (
    <div className="bg-primary-cstm h-44 p-14 max-w-7xl m-auto">
      <div className="text-lg">
        <Link href="/" className="text-primary font-semibold">
          Home
        </Link>{" "}
        / Frequently asked questions
      </div>
      <p className="text-5xl font-semibold mt-2">Frequently asked questions</p>

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

export default page;
