import { Check, MailOpen, User } from "lucide-react";
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Questionss from "./_components/Questionss";

const Question = () => {
  return (
    <div className="lg:px-16 px-4 lg:py-16 py-4 flex lg:flex-row flex-col lg:gap-8 gap-6 max-w-7xl m-auto">
      <div className="w-full lg:self-center">
        <p className="md:text-4xl text-3xl font-bold">
          Rule settlement, eviction and stay
        </p>
        <div className="text-lg mt-7">
          <p className="flex gap-2">
            <Check /> Time of arrival is after 14-00. Time of departure is to
            12-00
          </p>{" "}
          <br />
          <p className="flex gap-2">
            <Check />
            Does a settlement take place only at complete payment
          </p>{" "}
          <br />
          <p className="flex gap-2">
            <Check className="" /> Is there a settlement in hostel only after
            the presence of passport
          </p>
          <br />
          <p className="flex gap-2">
            <Check className="w-20 " />
            Volutpat odio facilisis mauris sit amet massa vitae tortor
            condimentum. Quam elementum pulvinar etiam non quam lacus
            suspendisse. Eget gravida cum sociis natoque
          </p>
        </div>
      </div>
      <Questionss />
    </div>
  );
};

export default Question;
