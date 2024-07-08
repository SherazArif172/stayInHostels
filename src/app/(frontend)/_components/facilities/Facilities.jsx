import React from "react";
import Facilitiec from "../../../../../public/facilities/facilities.webp";
import Image from "next/image";
import { ArrowRight, Wifi } from "lucide-react";
import { MapPin } from "lucide-react";
import { Luggage } from "lucide-react";
import { CircleParking } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Facilities = () => {
  return (
    <div className="flex lg:flex-row flex-col">
      <div className="lg:w-1/2 md:p-16 px-3 py-16 ">
        <p className="md:text-4xl text-2xl font-semibold ">
          We have everything you need
        </p>
        <p className="mt-6 text-lg">
          Posuere morbi leo urna molestie at elementum eu facilisis sed. Diam
          phasellus vestibulum lorem sed risus ultricies tristique
        </p>
        <div className="grid md:grid-cols-1">
          <div className="flex md:mt-6 md:flex-row flex-col justify-center items-center">
            <p className="flex md:flex-row flex-col items-center gap-3 md:mt-0 mt-4 md:w-1/2 text-base">
              <Wifi strokeWidth={1} className="w-16 h-16 text-primary" />
              Free available high speed WiFi
            </p>
            <p className="flex md:flex-row flex-col items-center gap-3 md:mt-0 mt-4 md:w-1/2 text-base">
              <MapPin strokeWidth={1} className="w-16 h-16 text-primary" />
              Сonvenient location in the center
            </p>
          </div>
          <div className="flex md:mt-6 md:flex-row flex-col justify-center items-center">
            <p className="flex md:flex-row flex-col items-center gap-3 md:mt-0 mt-4 md:w-1/2 text-base">
              <Luggage strokeWidth={1} className="w-14 h-14 text-primary" />
              Free storage of luggage of any size
            </p>
            <p className="flex md:flex-row flex-col items-center gap-3 md:mt-0 mt-4 md:w-1/2 text-base">
              <CircleParking
                strokeWidth={1}
                className="w-14 h-14 text-primary"
              />
              Parking place allocated to you
            </p>
          </div>
        </div>

        <div className="mt-10 flex md:flex-row flex-col-reverse items-center gap-4">
          <Button className="sm:w-auto w-full">Book now</Button>
          <Link href={"#"} className="flex gap-2 text-blue-900 font-semibold">
            More about <ArrowRight className="w-4 self-center" />
          </Link>
        </div>
      </div>
      <div className="lg:w-1/2 relative lg:aspect-[11/10] overflow-hidden lg:mx-0 mx-3">
        <Image
          src={Facilitiec}
          width={800}
          height={800}
          className="object-cover w-full h-full hover:scale-110 duration-1000"
          alt="image"
        />
      </div>
    </div>
  );
};

export default Facilities;
