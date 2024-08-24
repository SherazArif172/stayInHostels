import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MailOpen, Star, User } from "lucide-react";
import React from "react";

const LeaveComments = () => {
  return (
    <div className="lg:max-w-3xl mt-16">
      <p className="text-2xl font-extrabold">Leave Comment</p>
      <div className="grid md:grid-cols-2 md:gap-7">
        <div className="mt-6 flex flex-col gap-4 ">
          <div className="flex  justify-between">
            Location
            <div className="flex gap-2">
              {Array.from({ length: 5 }, (_, index) => (
                <Star
                  key={index}
                  //   className={index < rating ? "text-yellow-500" : "text-gray-300"}
                  className="text-primary  w-5 h-5"
                />
              ))}
            </div>
          </div>
          <div className="flex justify-between">
            Comfort
            <div className="flex gap-2">
              {Array.from({ length: 5 }, (_, index) => (
                <Star
                  key={index}
                  //   className={index < rating ? "text-yellow-500" : "text-gray-300"}
                  className="text-primary  w-5 h-5"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex justify-between">
            Pricing
            <div className="flex gap-2">
              {Array.from({ length: 5 }, (_, index) => (
                <Star
                  key={index}
                  //   className={index < rating ? "text-yellow-500" : "text-gray-300"}
                  className="text-primary  w-5 h-5"
                />
              ))}
            </div>
          </div>
          <div className="flex justify-between">
            Service
            <div className="flex gap-2">
              {Array.from({ length: 5 }, (_, index) => (
                <Star
                  key={index}
                  //   className={index < rating ? "text-yellow-500" : "text-gray-300"}
                  className="text-primary  w-5 h-5"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="flex sm:flex-row flex-col gap-6">
          <div className="border w-full px-5 border-black rounded-lg flex justify-between items-center">
            <Input type="email" placeholder="Email" /> <User strokeWidth={1} />
          </div>
          <div className="border w-full px-5 border-black rounded-lg flex justify-between items-center">
            <Input type="email" placeholder="Email" />{" "}
            <MailOpen strokeWidth={1} />
          </div>
        </div>
        <div className="mt-10">
          <Textarea placeholder="Message" />
        </div>
        <Button className="mt-8">Submit</Button>
      </div>
    </div>
  );
};

export default LeaveComments;
