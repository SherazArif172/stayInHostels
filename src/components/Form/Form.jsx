import React from "react";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { MailOpen, User } from "lucide-react";

const Form = () => {
  return (
    <div className="mt-10">
      <div className="flex sm:flex-row flex-col gap-6">
        <div className="border w-full px-5 border-black rounded-lg flex justify-between items-center">
          <Input type="text" placeholder="Name" /> <User strokeWidth={1} />
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
  );
};

export default Form;
