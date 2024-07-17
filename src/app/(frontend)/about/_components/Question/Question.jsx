import { Check, MailOpen, User } from "lucide-react";
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Question = () => {
  return (
    <div className="lg:px-16 px-4 lg:py-16 py-8 flex lg:flex-row flex-col lg:gap-8 gap-6">
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
      <div className="w-full bg-white shadow-custom md:px-16 px-4 md:py-16 py-8 rounded-lg max-w-full">
        <p className="md:text-4xl text-3xl font-bold">
          We are ready answer your question{" "}
        </p>
        <div className="mt-10">
          <div className="flex sm:flex-row flex-col gap-6">
            <div className="border w-full px-5 border-black rounded-lg flex justify-between items-center">
              <Input type="email" placeholder="Email" />{" "}
              <User strokeWidth={1} />
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
      </div>
    </div>
  );
};

export default Question;
