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
FaqQuestions;

const page = () => {
  return (
    <div className=" ">
      <div className="text-lg h-44 bg-primary-cstm md:px-14 px-11 md:py-14 py-10 max-w-7xl m-auto">
        <Link href="/" className="text-primary font-semibold">
          Home
        </Link>{" "}
        / Frequently asked questions
        <p className="md:text-5xl text-2xl font-semibold mt-2">
          Frequently asked questions
        </p>
      </div>

      <div className="lg:py-16 py-8 lg:px-16 px-4 flex lg:flex-row flex-col lg:justify-between justify-center items-center m-auto max-w-7xl">
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
        <div className="w-full">
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
      <FaqQuestions />
    </div>
  );
};

export default page;
