import Image from "next/image";
import React from "react";
import Imagee from "../../../public/navbar/stay in hostel 1.png";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, MapPin, Twitter } from "lucide-react";

const footer = () => {
  return (
    <footer className="text-white bg-primary grid grid-cols-4 justify-center items-center py-16 px-16 w-full">
      <div className="w-fit flex justify-center flex-col">
        <div className="flex items-center gap-2">
          <Image src={Imagee} width={70} height={70} alt="image" />
          <p className="text-3xl self-center font-bold">Hosteller</p>
        </div>
        <p className="text-lg mt-5">
          Ut tellus elementum sagittis vitae et leo duis ut. Sit amet
          consectetur adipiscing elit duis. Ultrices gravida dictum fusce ut
          placer orci nulla pellentesque
        </p>
      </div>
      <div className="w-fit flex justify-center items-center flex-col">
        <p className="text-2xl font-semibold">Quick links</p>
        <ul className="flex flex-col gap-3 mt-6">
          <li className="hover:text-primary-cstm duration-300">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-primary-cstm duration-300">
            <Link href="/">About</Link>
          </li>
          <li className="hover:text-primary-cstm duration-300">
            <Link href="/">Rooms</Link>
          </li>
          <li className="hover:text-primary-cstm duration-300">
            <Link href="/">News</Link>
          </li>
        </ul>
      </div>
      <div className="w-fit flex justify-center flex-col">
        <p className="text-2xl font-semibold">Contact Us</p>
        <ul className="mt-6 flex flex-col gap-6">
          <li className="flex gap-4 items-center">
            <MapPin />
            <p>
              4826 Fadel Circles <br /> Darrylstad, AZ 90995
            </p>
          </li>
          <li className="flex gap-4 items-center">
            <MapPin />
            <p>
              (329) 580-7077 <br />
              (650) 382-5020
            </p>
          </li>
        </ul>
      </div>
      <div className="w-fit flex justify-center flex-col">
        <p className="text-2xl font-semibold">Follow Us</p>
        <p className="mt-6">Venenatis urna cursus eget nunc scelerisque</p>
        <div className="flex gap-4 clear-start mt-8">
          <Facebook className="fill-white" strokeWidth={1} />
          <Instagram className="" strokeWidth={2} />
          <Twitter className="" strokeWidth={2} />
          <Linkedin className="" strokeWidth={2} />
        </div>
      </div>
    </footer>
  );
};

export default footer;
