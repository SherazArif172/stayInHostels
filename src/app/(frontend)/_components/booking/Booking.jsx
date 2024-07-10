import { Hotel } from "lucide-react";
import Image from "next/image";
import React from "react";
import Bookingg from "../../../../../public/booking/booking.webp";

const Booking = () => {
  return (
    <div className="flex mt-28">
      <div className="p-16 w-1/2">
        <p className="md:text-4xl text-2xl font-semibold ">
          Find suitable budget accommodation
        </p>
        <p className="mt-4">
          Condimentum id venenatis a condimentum vitae sapien pellentesque
          habitant. At augue eget arcu dictum varius duis at consectetur
        </p>
        <div className="mt-4">
          <div className="flex gap-5 items-center">
            <div className="bg-primary p-3 rounded-md">
              <Hotel className="text-white w-12 h-12" strokeWidth={1.1} />
            </div>
            <div>
              <p className="text-xl font-semibold">Hostel territory</p>
              <p>Consequat interdum varius sit amet mattis</p>
            </div>
          </div>
          <div className="flex gap-5 items-center mt-7">
            <div className="bg-primary p-3 rounded-md">
              <Hotel className="text-white w-12 h-12" strokeWidth={1.1} />
            </div>
            <div>
              <p className="text-xl font-semibold">Hostel territory</p>
              <p>Consequat interdum varius sit amet mattis</p>
            </div>
          </div>
          <div className="flex gap-5 items-center mt-7">
            <div className="bg-primary p-3 rounded-md">
              <Hotel className="text-white w-12 h-12" strokeWidth={1.1} />
            </div>
            <div>
              <p className="text-xl font-semibold">Hostel territory</p>
              <p>Consequat interdum varius sit amet mattis</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <Image
          src={Bookingg}
          width={700}
          height={700}
          className="w-5/6"
          alt="image"
        />
      </div>
    </div>
  );
};

export default Booking;
