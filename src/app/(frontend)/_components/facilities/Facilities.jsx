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
    <div className="flex">
      <div className="w-1/2 p-16">
        <p className="text-5xl font-semibold ">We have everything you need</p>
        <p className="mt-6 text-lg">
          Posuere morbi leo urna molestie at elementum eu facilisis sed. Diam
          phasellus vestibulum lorem sed risus ultricies tristique
        </p>
        <div className="flex mt-6">
          <p className="flex items-center gap-3 w-1/2 text-base">
            <Wifi strokeWidth={1} className="w-16 h-16 text-primary" />
            Free available high speed WiFi
          </p>
          <p className="flex items-center gap-3 w-1/2 text-base">
            <MapPin strokeWidth={1} className="w-16 h-16 text-primary" />
            Сonvenient location in the center
          </p>
        </div>
        <div className="flex mt-6">
          <p className="flex items-center gap-3 w-1/2 text-base">
            <Luggage strokeWidth={1} className="w-14 h-14 text-primary" />
            Free storage of luggage of any size
          </p>
          <p className="flex items-center gap-3 w-1/2 text-base">
            <CircleParking strokeWidth={1} className="w-14 h-14 text-primary" />
            Parking place allocated to you
          </p>
        </div>
        <div className="mt-10 flex items-center gap-4">
          <Button>Book now</Button>
          <Link href={"#"} className="flex gap-2 text-blue-900 font-semibold">
            More about <ArrowRight className="w-4 self-center" />
          </Link>
        </div>
      </div>
      <div className="w-1/2 relative aspect-[11/10] overflow-hidden">
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
