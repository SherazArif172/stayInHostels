import { Button } from "@/components/ui/button";
import { ArrowDown, CalendarCheck, ChevronDown } from "lucide-react";
import React from "react";

const Bookings = () => {
  return (
    <div className="shadow-custom md:p-20 p-10">
      <p>
        <span className="text-5xl font-extrabold text-primary">$59</span>/1
        night
      </p>
      <div className="mb-3">
        <p className="text-lg font-extrabold mt-6 ">Check-in</p>
        <div className="flex gap-3 text-lg font-medium mt-3">
          <CalendarCheck className="text-primary" />
          Add arrival date
          <ChevronDown className="text-primary" />
        </div>
      </div>
      <div className="border-t-2">
        <p className="text-lg font-extrabold mt-3">Check-in</p>
        <div className="flex gap-3 text-lg font-medium mt-3">
          <CalendarCheck className="text-primary" />
          Add arrival date
          <ChevronDown className="text-primary" />
        </div>
      </div>
      <Button className="mt-8">Book now</Button>
    </div>
  );
};

export default Bookings;
