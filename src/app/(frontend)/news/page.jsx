import React from "react";
import { Button } from "@/components/ui/button";
import Blogss from "../../../data/news.json";
import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  Eye,
  MessageCircle,
  Search,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import Category from "../../../data/categories.json";
import SideBar from "./_components/SideBar/SideBar";

const news = () => {
  return (
    <div className=" ">
      <div className="text-lg h-44 bg-primary-bgg md:px-14 px-11 md:py-14 py-10 max-w-7xl m-auto">
        <Link href="/" className="text-primary font-semibold">
          Home
        </Link>{" "}
        / News
        <p className="md:text-5xl text-2xl font-semibold mt-2">News</p>
      </div>
      <div className="lg:px-16 px-4 lg:py-16 py-8 max-w-6xl m-auto">
        <div className="mt-8  flex lg:flex-row flex-col  gap-8 ">
          {/* news  */}
          <div className="max-w-[800px]">
            {" "}
            {Blogss.map((blogs, index) => (
              <div
                className="shadow-custom flex md:flex-row flex-col justify-center items-center mt-7 group "
                key={index}
              >
                <div className="relative  aspect-[15/15] w-full h-full overflow-hidden md:rounded-l-lg rounded-t-lg ">
                  <Image
                    src={blogs.image}
                    fill
                    className="w-full h-full object-cover group-hover:scale-110 duration-500 lg:rounded-l-lg rounded-t-lg"
                    alt="image"
                  />
                  <p className="absolute right-0 top-7 bg-white p-2 rounded-l-lg text-primary font-extrabold">
                    {blogs.topic}
                  </p>
                </div>
                <div className="sm:px-8 px-4 py-6">
                  <Link
                    href="#"
                    className="text-xl font-extrabold hover:text-primary duration-300"
                  >
                    {blogs.title}
                  </Link>
                  <p className="mt-3 text-lg">{blogs.description}</p>
                  <div className="mt-5 flex md:justify-between md:gap-0 gap-3">
                    <p className="flex gap-1 justify-center items-center">
                      <CalendarDays
                        className="text-primary md:w-6 md:h-6 w-4 h-4"
                        strokeWidth={1}
                      />
                      {blogs.date}
                    </p>
                    <p className="flex gap-1 justify-center items-center">
                      <Eye
                        className="text-primary  md:w-6 md:h-6 w-4 h-4"
                        strokeWidth={1}
                      />
                      {blogs.views}
                    </p>
                    <p className="flex gap-1 justify-center items-center">
                      <MessageCircle
                        className="text-primary md:w-6 md:h-6 w-4 h-4"
                        strokeWidth={1}
                      />
                      1 comment
                    </p>
                    {/* <div></div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* side bar  */}

          <SideBar />
        </div>
      </div>{" "}
    </div>
  );
};

export default news;
