"use client";
import { Menu, X, Facebook, Instagram, Twitter, Handshake } from "lucide-react";
import navData from "../../data/mobileNav.json";
import Link from "next/link";
import navImg from "../../../public/navbar/stay in hostel 1.png";
import Image from "next/image";
import { useState } from "react";

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
          className={`h-full bg-background w-full  overflow-y-auto  absolute -left-full top-0 px-3 py-4 ${
            isOpen ? "left-0" : "-left-full"
          } transition-all duration-300 ease-in-out `}
        >
          <div>
            <Link href="/">
              <div className="flex gap-2">
                <Image src={navImg} width={70} height={70} alt="image" />
                <p className="text-3xl self-center font-bold text-primary">
                  Hosteller
                </p>
              </div>
              <X
                className="h-9 w-9 self-center text-primary cursor-pointer absolute top-9 right-5 z-10 "
                strokeWidth={4}
                onClick={handleNavbar}
              />
            </Link>
          </div>
          <ul className="flex flex-col gap-5  w-full  mt-8 pl-3 overflow-y-auto">
            {navData.map((nav, index) => (
              <li
                className="relative w-fit group  text-foreground/70 text-lg font-semibold  "
                key={index}
                onClick={handleNavbar}
              >
                <Link href={nav.path}>{nav.title}</Link>
              </li>
            ))}
            <div className="flex gap-3 mt-8">
              <Link href={"/"}>
                {" "}
                <Instagram className="w-9 h-9 hover:scale-110 transition-all duration-300 ease-in-out text-primary" />
              </Link>
              <Link href={"/"}>
                {" "}
                <Facebook className="w-9 h-9 hover:scale-110 transition-all duration-300 ease-in-out text-primary" />
              </Link>

              <Link href={"/"}>
                <Twitter className="w-9 h-9 hover:scale-110 transition-all duration-300 ease-in-out text-primary" />
              </Link>
            </div>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default MobileNav;
