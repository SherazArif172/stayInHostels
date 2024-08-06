import { Input } from "@/components/ui/input";
import { ArrowRight, Search } from "lucide-react";
import Link from "next/link";
import React from "react";
import Category from "../../../../../data/categories.json";
import tag from "../../../../../data/tag.json";

const SideBar = () => {
  return (
    <div className="md:max-w-[350px] w-full shadow-custom px-7 mt-7 py-7">
      {" "}
      <div className="border border-black md:mt-10 mt-7 md:w-full w-full rounded-lg px-4 flex bg-white items-center ">
        <Input placeholder="search" />
        <div className=" relative z-10 h-full">
          <Search className="w-8  " />
        </div>
      </div>
      <ul className="mt-10">
        <p className="font-extrabold text-2xl mb-3">Categories</p>
        {Category.map((cate, index) => (
          <Link href={cate.path} key={index}>
            <li className="w-full py-3 hover:bg-primary-cstm px-4 rounded-lg">
              {cate.name}
            </li>
          </Link>
        ))}
      </ul>
      <div>
        <p className="font-extrabold text-2xl mt-3">Recommended articles</p>
      </div>
      <div>
        <p className="font-extrabold text-2xl mt-3">Tag</p>
        <ul className="flex gap-4 text-lg font-bold flex-wrap mt-3">
          {tag.map((tag, index) => (
            <li
              className="relative w-fit group  text-foreground/70 hover-transition"
              key={index}
            >
              <Link href={"/"}>
                {tag.name}

                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-14">
        <p className="font-extrabold text-2xl mt-3">
          Subscribe to our mailing list
        </p>
        <div className="border border-black md:mt-4 md:w-full  w-full rounded-lg px-4 flex bg-white items-center ">
          <Input placeholder="Email adress" />
          <div className="animate-pulse relative z-10 h-full">
            <ArrowRight className="w-8  " />
          </div>
        </div>
      </div>
      {/* instagram  */}
      <div className="mt-9">
        <p className="font-extrabold text-2xl mt-3">Instagram</p>
      </div>
    </div>
  );
};

export default SideBar;
