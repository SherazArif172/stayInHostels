import Image from "next/image";
import React from "react";
import GuestSays from "../../../../../public/guestsSays/guestsSays.webp";
import { Star } from "lucide-react";

const Reviews = () => {
  return (
    <div className="flex py-28">
      <div className="w-1/2">
        <Image src={GuestSays} width={800} height={800} className="" />
      </div>
      <div className="w-1/2 p-16">
        <p className="md:text-4xl text-2xl font-semibold ">
          What our guests say
        </p>
        <div className="mt-12 shadow-custom p-16">
          <div className="flex gap-2">
            {Array.from({ length: 5 })
              .fill(1)
              .map((_) => (
                <Star className="text-orange-400 fill-orange-400" size={20} />
              ))}
          </div>
          <p className="mt-3">
            <span className="font-semibold text-xl">Date of Stay: </span> july
            2021
          </p>
          <p className="mt-8">
            <span className="font-semibold text-xl">
              Lorem ipsum dolor sit amet consectetur
            </span>
            <br /> adipisicing elit. Vitae commodi temporibus nobis totam
            exercitationem aut accusamus quam, a sit perferendis dolores rem
            voluptatibus deserunt ea ullam cumque atque repellat eos! Fuga
            maxime, nulla laudantium iure quas tenetur harum recusandae dolorum.
          </p>
          <p className="mt-8">Mr Smith</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
