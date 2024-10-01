import Image from "next/image";
import React from "react";
import Imagee from "../../../public/navbar/footer.png";
import Link from "next/link";
import Tik from "../../../public/social/tikton.png";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const footer = () => {
  return (
    <footer className="m-auto  max-w-[1924px] bg-primary">
      <div className="text-white  py-16 md:px-8 px-4 w-full max-w-7xl m-auto">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 md:gap-28 gap-4 ">
          <div className=" ">
            <div className="flex items-center gap-2">
              <Image src={Imagee} width={150} height={150} alt="image" />
            </div>
            <p className="md:text-lg md:mt-5 mt-3 max-w-sm">
              Where comfort meets community, offering a welcoming space for
              free-spirited travelers to connect and explore.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className=" ">
              <p className="md:text-2xl text-xl font-extrabold">Contact Us</p>
              <ul className="md:mt-6 mt-3 flex flex-col gap-6">
                <li className="flex gap-4 items-center">
                  <Mail />
                  <Link
                    href="mailto:stayinnhostels@hotmail.com"
                    className="lg:text-base text-sm"
                  >
                    stayinnhostels@hotmail.com
                  </Link>
                </li>
                <li className="flex gap-4 items-center">
                  <Phone />
                  <p className="lg:text-base text-sm">
                    +923310008196 <br />
                  </p>
                </li>
              </ul>
            </div>
            <div className=" ">
              <p className="lg:text-2xl text-xl font-extrabold">Follow Us</p>
              <p className="md:mt-6 mt-3 md:text-base text-sm">
                Follow us on social media for updates and offers. Join our
                community!
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
                <Link href="https://www.youtube.com/@stayinnhostels">
                  <Youtube className="hover:scale-110 duration-300 w-6 h-6" />
                </Link>
                <Link href="https://www.tiktok.com/@stayinnhostels">
                  <Image src={Tik} width={20} height={20} alt="image" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[82px] bg-white flex justify-center items-center md:text-base text-sm text-center">
        merkulov © ClockInn Hostel Template all rights reserved Copyrights 2021
      </div>
    </footer>
  );
};

export default footer;
