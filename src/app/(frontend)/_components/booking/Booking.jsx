import { Bed, HandHelping, Hotel } from "lucide-react";
import Image from "next/image";
import React from "react";
import Bookingg from "../../../../../public/booking/booking.webp";
import { Button } from "@/components/ui/button";

const Booking = () => {
  return (
    <div className="flex lg:flex-row flex-col my-28  relative w-full max-w-7xl m-auto bg-primary-bg">
      <div className="lg:px-16 px-6 py-16 lg:w-1/2 w-full lg:m-0 m-auto">
        <p className="md:text-4xl text-2xl font-semibold lg:w-auto md:w-[480px] ">
          Find suitable budget accommodation
        </p>
        <p className="mt-4 lg:w-auto md:w-[480px]">
          Condimentum id venenatis a condimentum vitae sapien pellentesque
          habitant. At augue eget arcu dictum varius duis at consectetur
        </p>
        <div className="mt-4">
          <div className="flex gap-5 items-center ">
            <div className="bg-primary p-3 rounded-md">
              <Hotel className="text-white w-12 h-12" strokeWidth={1.1} />
            </div>
            <div>
              <p className="text-xl font-semibold">Hostel territory</p>
              <p className="w-48">Consequat interdum varius sit amet mattis</p>
            </div>
          </div>
          <div className="flex gap-5 items-center mt-7 ">
            <div className="bg-primary p-3 rounded-md">
              <HandHelping className="text-white w-12 h-12" strokeWidth={1.1} />
            </div>
            <div>
              <p className="text-xl font-semibold">Accommodates guests</p>
              <p className="w-48">Consequat interdum varius sit amet mattis</p>
            </div>
          </div>
          <div className="flex gap-5 items-center mt-7 ">
            <div className="bg-primary p-3 rounded-md">
              <Bed className="text-white w-12 h-12" strokeWidth={1.1} />
            </div>
            <div>
              <p className="text-xl font-semibold">Grateful guests</p>
              <p className="w-48">Consequat interdum varius sit amet mattis</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 w-full lg:m-0 m-auto relative aspect-[12/12] overflow-hidden ">
        <Image
          src={Bookingg}
          fill
          className=" object-cover lg:w-5/6 w-full  hover:scale-110 duration-1000 md:px-0 px-3"
          alt="image"
        />
      </div>
      <div className="absolute top-72 right-[470px] lg:block hidden">
        <Family />
      </div>
    </div>
  );
};

export default Booking;

const Family = () => {
  return (
    <div className="border shadow-custom w-80 bg-white p-14 rounded-lg m-auto">
      <p className="font-bold text-xl">Family Room with Private Bathroom</p>
      <p className="text-lg mt-3">
        <span className="text-5xl font-semibold">$149</span>/ 1 night
      </p>
      <Button className="bg-primary-cstm text-primary font-bold mt-3">
        see availability
      </Button>
    </div>
  );
};
