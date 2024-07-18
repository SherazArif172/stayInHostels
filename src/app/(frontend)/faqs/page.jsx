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

const page = () => {
  return (
    <div className=" max-w-7xl m-auto">
      <div className="text-lg h-44 bg-primary-cstm p-14">
        <Link href="/" className="text-primary font-semibold">
          Home
        </Link>{" "}
        / Frequently asked questions
        <p className="text-5xl font-semibold mt-2">
          Frequently asked questions
        </p>
      </div>

      <div className="lg:py-16 py-8 lg:px-16 px-4 flex lg:flex-row flex-col lg:justify-between justify-center items-center">
        <div>
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
        </div>
        <div className="lg:w-3/4 w-full">
          <Accordion type="single" collapsible className="w-full h-full">
            {Faq.map((faq, index) => (
              <AccordionItem value="item-1" key={index}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default page;
