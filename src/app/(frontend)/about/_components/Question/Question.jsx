import { Check, MailOpen, User } from "lucide-react";
import React from "react";
import { Input } from "@/components/ui/input";

const Question = () => {
  return (
    <div className="px-16 py-16 flex gap-8">
      <div className="w-full">
        <p className="md:text-4xl text-3xl font-bold">
          Rule settlement, eviction and stay
        </p>
        <div className="text-lg mt-7">
          <p className="flex">
            <Check /> Time of arrival is after 14-00. Time of departure is to
            12-00
          </p>{" "}
          <br />
          <p className="flex">
            <Check />
            Does a settlement take place only at complete payment
          </p>{" "}
          <br />
          <p className="flex">
            <Check className="" /> Is there a settlement in hostel only after
            the presence of passport
          </p>
          <br />
          <p className="flex">
            <Check />
            Volutpat odio facilisis mauris sit amet massa vitae tortor
            condimentum. Quam elementum pulvinar etiam non quam lacus
            suspendisse. Eget gravida cum sociis natoque
          </p>
        </div>
      </div>
      <div className="w-full bg-white shadow-custom p-16">
        <p className="md:text-4xl text-3xl font-bold">
          We are ready answer your question{" "}
        </p>
        <div className="mt-10">
          <div className="flex gap-6">
            <div className="border px-5 border-black rounded-lg flex justify-between items-center">
              <Input type="email" placeholder="Email" />{" "}
              <User strokeWidth={1} />
            </div>
            <div className="border px-5 border-black rounded-lg flex justify-between items-center">
              <Input type="email" placeholder="Email" />{" "}
              <MailOpen strokeWidth={1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
