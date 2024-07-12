import Image from "next/image";
import React from "react";
import Imagee from "../../../public/navbar/stay in hostel 1.png";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

const footer = () => {
  return (
    <footer className="text-white bg-primary py-16 md:px-8 px-4 w-full">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 md:gap-28 gap-4 ">
        <div className=" ">
          <div className="flex items-center gap-2">
            <Image src={Imagee} width={50} height={50} alt="image" />
            <p className="text-3xl self-center font-bold">Hosteller</p>
          </div>
          <p className="text-lg md:mt-5 mt-3">
            Ut tellus elementum sagittis vitae et leo duis ut. Sit amet
            consectetur adipiscing elit duis. Ultrices gravida dictum fusce ut
            placer orci nulla pellentesque.Ultrices gravida dictum fusce ut
            placer orci nulla pellentesque
          </p>
        </div>
        {/* <div className="  ">
          <div className="lg:w-40 m-auto">
            <p className="text-2xl font-semibold">Quick links</p>
            <ul className="flex flex-col gap-3 md:mt-6 mt-3">
              <li className="hover:text-primary-cstm duration-300 w-fit">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-primary-cstm duration-300 w-fit">
                <Link href="/">About</Link>
              </li>
              <li className="hover:text-primary-cstm duration-300 w-fit">
                <Link href="/">Rooms</Link>
              </li>
              <li className="hover:text-primary-cstm duration-300 w-fit">
                <Link href="/">News</Link>
              </li>
            </ul>
          </div>
        </div> */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className=" ">
            <p className="text-2xl font-semibold">Contact Us</p>
            <ul className="md:mt-6 mt-3 flex flex-col gap-6">
              <li className="flex gap-4 items-center">
                <MapPin />
                <p>
                  4826 Fadel Circles <br /> Darrylstad, AZ 90995
                </p>
              </li>
              <li className="flex gap-4 items-center">
                <Phone />
                <p>
                  (329) 580-7077 <br />
                  (650) 382-5020
                </p>
              </li>
            </ul>
          </div>
          <div className=" ">
            <p className="text-2xl font-semibold">Follow Us</p>
            <p className="md:mt-6 mt-3">
              Venenatis urna cursus eget nunc scelerisque
            </p>
            <div className="flex gap-4 clear-start md:mt-8 mt-4">
              <Link href="#">
                <Facebook
                  className="fill-white hover:scale-110 duration-300"
                  strokeWidth={1}
                />
              </Link>
              <Link href="#">
                <Instagram
                  className="hover:scale-110 duration-300"
                  strokeWidth={2}
                />
              </Link>
              <Link href="#">
                <Twitter
                  className="hover:scale-110 duration-300"
                  strokeWidth={2}
                />
              </Link>
              <Link href="#">
                <Linkedin
                  className="hover:scale-110 duration-300"
                  strokeWidth={2}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
