"use client";
import {
  Menu,
  X,
  Facebook,
  Instagram,
  Twitter,
  Handshake,
  Linkedin,
} from "lucide-react";
import navData from "../../data/mobileNav.json";
import Link from "next/link";
import navImg from "../../../public/navbar/Frame.png";
import Image from "next/image";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center lg:hidden bg-white z-20">
      <Menu
        className="h-9 w-9 self-center text-primary cursor-pointer"
        strokeWidth={4}
        onClick={handleNavbar}
      />

      <aside className="">
        <div
          className={`fixed top-0 left-0 h-full bg-background w-full overflow-y-auto transition-transform duration-300 ease-in-out z-30 px-3 py-4 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div>
            <Link href="/">
              <div className="flex gap-2">
                <Image src={navImg} width={100} height={49} alt="image" />
              </div>
              <X
                className="h-9 w-9 self-center text-primary cursor-pointer absolute top-6 right-5 z-10 "
                strokeWidth={4}
                onClick={handleNavbar}
              />
            </Link>
          </div>
          <ul className="flex flex-col gap-5  w-full  mt-8 pl-3 overflow-y-auto">
            {navData.map((nav, index) => (
              <li
                className="relative w-fit group  text-foreground/70 text-lg font-extrabold  "
                key={index}
                onClick={handleNavbar}
              >
                <Link href={nav.path}>{nav.title}</Link>
              </li>
            ))}
            <div className="flex gap-3 mt-8">
              <Link href="https://www.instagram.com/stayinnhostels/">
                {" "}
                <Instagram className="w-9 h-9 hover:scale-110 transition-all duration-300 ease-in-out text-primary" />
              </Link>
              <Link href="https://web.facebook.com/stayinnhostels">
                {" "}
                <Facebook className="w-9 h-9 hover:scale-110 transition-all duration-300 ease-in-out text-primary" />
              </Link>

              <Link href="https://x.com/stayinnhostels">
                <Twitter className="w-9 h-9 hover:scale-110 transition-all duration-300 ease-in-out text-primary" />
              </Link>
              <Link href="https://www.linkedin.com/company/stayinnhostels">
                <Linkedin className="w-9 h-9 hover:scale-110 transition-all duration-300 ease-in-out text-primary" />
              </Link>
              <Link href="https://wa.me/03310008190">
                <FaWhatsapp className="w-9 h-9 hover:scale-110 transition-all duration-300 ease-in-out text-primary" />
              </Link>
            </div>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default MobileNav;
