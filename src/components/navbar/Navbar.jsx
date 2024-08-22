"use client";

import Image from "next/image";
import Navimg from "../../../public/navbar/Frame.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import navData from "../../data/navbar.json";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.header
      className="max-w-[1920px] min-h-[108px] m-auto   z-20 bg-background"
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="flex justify-between items-center lg:px-10 md:px-7 px-4 py-8 max-w-5xl m-auto">
        <Link href="/">
          <div className="flex gap-2">
            <Image
              src={Navimg}
              width={120}
              height={59}
              alt="image"
              className=""
            />
          </div>
        </Link>

        <div className="lg:block hidden  bg-white transition-all duration-300  self-center">
          <ul className="flex items-center gap-12 w-full px-0  mt-0 h-auto min-h-full  bg-auto bg-white">
            {navData.map((nav, index) => (
              <li
                className="relative w-fit group  text-foreground/70 hover-transition"
                key={index}
              >
                <Link href={nav.path}>
                  {nav.title}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}

            <Button className="  font-semibold">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </ul>
        </div>
        <MobileNav />
      </nav>
    </motion.header>
  );
};

export default Navbar;
