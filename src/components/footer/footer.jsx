import Image from "next/image";
import React from "react";
import Imagee from "../../../public/navbar/Frame.png";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const footer = () => {
  return (
    <footer>
      <div className="text-white bg-primary py-16 md:px-8 px-4 w-full m-auto  max-w-7xl">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 md:gap-28 gap-4 ">
          <div className=" ">
            <div className="flex items-center gap-2">
              <Image src={Imagee} width={50} height={50} alt="image" />
              <p className="md:text-3xl text-2xl self-center font-bold">
                Hosteller
              </p>
            </div>
            <p className="md:text-lg md:mt-5 mt-3">
              Ut tellus elementum sagittis vitae et leo duis ut. Sit amet
              consectetur adipiscing elit duis. Ultrices gravida dictum fusce ut
              placer orci nulla pellentesque.Ultrices gravida dictum fusce ut
              placer orci nulla pellentesque
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className=" ">
              <p className="md:text-2xl text-xl font-extrabold">Contact Us</p>
              <ul className="md:mt-6 mt-3 flex flex-col gap-6">
                <li className="flex gap-4 items-center">
                  <MapPin />
                  <p className="lg:text-base text-sm">
                    4826 Fadel Circles <br /> Darrylstad, AZ 90995
                  </p>
                </li>
                <li className="flex gap-4 items-center">
                  <Phone />
                  <p className="lg:text-base text-sm">
                    +923310008196 <br />
                    +923118100096
                  </p>
                </li>
              </ul>
            </div>
            <div className=" ">
              <p className="lg:text-2xl text-xl font-extrabold">Follow Us</p>
              <p className="md:mt-6 mt-3 md:text-base text-sm">
                Venenatis urna cursus eget nunc scelerisque
              </p>
              <div className="flex gap-4 clear-start md:mt-8 mt-4">
                <Link href="https://web.facebook.com/stayinnhostels">
                  <Facebook
                    className="fill-white hover:scale-110 duration-300"
                    strokeWidth={1}
                  />
                </Link>
                <Link href="https://www.instagram.com/stayinnhostels/">
                  <Instagram
                    className="hover:scale-110 duration-300"
                    strokeWidth={2}
                  />
                </Link>
                <Link href="https://x.com/stayinnhostels">
                  <Twitter
                    className="hover:scale-110 duration-300"
                    strokeWidth={2}
                  />
                </Link>
                <Link href="https://www.linkedin.com/company/stayinnhostels">
                  <Linkedin
                    className="hover:scale-110 duration-300"
                    strokeWidth={2}
                  />
                </Link>
                <Link href="https://wa.me/03310008190">
                  <FaWhatsapp className="hover:scale-110 duration-300 w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[82px] flex justify-center items-center md:text-base text-sm text-center">
        merkulov © ClockInn Hostel Template all rights reserved Copyrights 2021
      </div>
    </footer>
  );
};

export default footer;
