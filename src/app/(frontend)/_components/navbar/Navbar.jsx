"use client";

import Image from "next/image";
import Navimg from "../../../../../public/navbar/stay in hostel 1.png";
import { Menu, X, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClose, setisClose] = useState(false);

  const navToggleHandler = () => {
    setIsOpen(!isOpen);
    setisClose(!isClose);
  };

  return (
    <header>
      <nav className="flex justify-between px-16 py-4">
        <Link href="/">
          <div className="flex gap-2">
            <Image src={Navimg} width={70} height={70} alt="image" />
            <p className="text-3xl self-center font-bold text-primary">
              Hosteller
            </p>
          </div>
        </Link>

        <div
          className={`lg:static absolute ${
            isOpen ? "left-0 top-0" : "-left-full top-0"
          } bg-white transition-all duration-300 lg:w-auto w-full self-center`}
        >
          <Link href="/" className="lg:hidden block lg:px-0 px-6 mt-2">
            <div className="flex gap-2">
              <Image src={Navimg} width={70} height={70} alt="image" />
              <p className="text-3xl self-center font-bold text-primary">
                Hosteller
              </p>
            </div>
          </Link>
          <ul className="flex lg:flex-row  flex-col lg:items-center lg:gap-16 gap-6 lg:w-full w-full lg:px-0 px-8 lg:mt-0 mt-6 ">
            <li className="relative group lg:text-base text-lg font-semibold text-foreground/70">
              <Link href="/">
                Home
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="relative group lg:text-base text-lg font-semibold text-foreground/70">
              <Link href="/">
                About
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="relative group lg:text-base text-lg font-semibold text-foreground/70">
              <Link href="/">
                Rooms
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="relative group lg:text-base text-lg font-semibold text-foreground/70">
              <Link href="/">
                News
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="relative group lg:text-base text-lg font-semibold text-foreground/70">
              <Link href="/">
                Pages
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="relative group lg:text-base text-lg font-semibold text-foreground/70 lg:hidden block">
              <Link href="/">
                Contact Us
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>

            <Button className="lg:block hidden">
              <Link href="/">Contact Us</Link>
            </Button>
            <div className="lg:hidden flex gap-3">
              <Facebook className="w-9 h-9" />
              <Instagram className="w-9 h-9" />
              <Twitter className="w-9 h-9" />
            </div>
          </ul>
        </div>
        <div className="self-center lg:hidden block">
          {isOpen ? (
            <X
              className={`lg:hidden block h-9 w-9 self-center text-primary absolute right-10 top-4 cursor-pointer`}
              strokeWidth={4}
              onClick={navToggleHandler}
            />
          ) : (
            <Menu
              className="lg:hidden block h-9 w-9 self-center text-primary cursor-pointer"
              strokeWidth={4}
              onClick={navToggleHandler}
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
