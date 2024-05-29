"use client";

import Image from "next/image";
import Navimg from "../../../public/navbar/stay in hostel 1.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import navData from "../../data/navbar.json";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between px-10 py-8  ">
        <Link href="/">
          <div className="flex gap-2">
            <Image src={Navimg} width={70} height={70} alt="image" />
            <p className="text-3xl self-center font-bold text-primary">
              Hosteller
            </p>
          </div>
        </Link>

        <div className="lg:block hidden  bg-white transition-all duration-300  self-center">
          <ul className="flex items-center gap-16 w-full px-0  mt-0 h-auto min-h-full  bg-auto bg-white">
            {navData.map((nav) => (
              <li className="relative w-fit group  text-foreground/70">
                <Link href={nav.path}>
                  {nav.title}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}

            <Button className="">
              <Link href="/">Contact Us</Link>
            </Button>
          </ul>
        </div>
        <MobileNav />
      </nav>
    </header>
  );
};

export default Navbar;
