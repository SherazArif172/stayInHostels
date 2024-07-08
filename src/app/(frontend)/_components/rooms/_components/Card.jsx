import React from "react";
import Image from "next/image";
import image1 from "../../../../../../public/rooms/room1.webp";
import { User, BedSingle, ArrowRight } from "lucide-react";
import Link from "next/link";
import Cards from "../../../../../data/cards.json";
import Choose from "./Choose";

const Card = () => {
  return (
    <div className="flex gap-6 flex-wrap justify-center lg:mx-0 mx-5">
      {Cards.map((data) => (
        <div className=" lg:max-w-[360px]  mt-9 shadow-custom" key={data.id}>
          <div className="relative">
            <Image
              src={data.image}
              className="relative bg-cover"
              width={700}
              height={700}
              alt="image"
            />
            <p className="absolute right-0 bottom-6 bg-background px-4 py-1 rounded-l-md">
              <span className="text-2xl font-bold">${data.price}</span>/{" "}
              {data.night} night
            </p>
          </div>
          <div className="p-6">
            <p className="text-2xl font-bold">{data.title}</p>
            <div className="flex gap-10">
              <div className="flex gap-2 justify-center items-center h-[50px]">
                <User />
                <p className="text-lg ">{data.sleep} Sleeps</p>
              </div>
              <div className="flex gap-2 justify-center items-center">
                <BedSingle />
                <p className="text-lg ">{data.beds} Bed</p>
              </div>
            </div>
            <Link href={"#"} className="flex gap-2 text-blue-900">
              see availablity <ArrowRight className="w-4" />
            </Link>
          </div>
        </div>
      ))}
      <Choose />
    </div>
  );
};

export default Card;
