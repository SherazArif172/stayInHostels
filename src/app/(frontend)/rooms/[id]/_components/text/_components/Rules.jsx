import { Check } from "lucide-react";
import React from "react";

const Rules = () => {
  return (
    <div className="lg:mt-16 mt-12">
      <p className="text-2xl font-extrabold md:text-start text-center md:shadow-none shadow-custom">
        Rules
      </p>
      <div className="grid md:grid-cols-2">
        <div className="flex flex-col gap-7 mt-5">
          <p className="flex gap-3">
            <Check className="text-primary" />
            Understand the hostel’s guidelines for a comfortable stay.
          </p>
          <p className="flex gap-3">
            <Check className="text-primary" />
            Understand the hostel’s guidelines for a comfortable stay.
          </p>
        </div>
        <div className="flex flex-col gap-7 mt-5">
          <p className="flex gap-3">
            <Check className="text-primary" />
            Understand the hostel’s guidelines for a comfortable stay.
          </p>
          <p className="flex gap-3">
            <Check className="text-primary" />
            Understand the hostel’s guidelines for a comfortable stay.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rules;
