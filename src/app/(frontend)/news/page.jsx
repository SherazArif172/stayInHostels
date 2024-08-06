import React from "react";
import { Button } from "@/components/ui/button";
import Blogss from "../../../data/news.json";
import Image from "next/image";
import { CalendarDays, Eye, MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

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
        <div className="mt-8  flex lg:flex-row flex-col gap-24 max-w-[800px]">
          <div className="">
            {" "}
            {Blogss.map((blogs, index) => (
              <div
                // initial={{ y: 150, opacity: 0.5 }}
                // whileInView={{ y: 0, opacity: 1 }}
                // viewport={{ once: true }}
                // transition={{ duration: 0.5 }}
                className="shadow-custom flex justify-center items-center mt-7 group"
                key={index}
              >
                <div className="relative  aspect-[20/20] w-1/2 overflow-hidden rounded-l-lg">
                  <Image
                    src={blogs.image}
                    fill
                    className="w-full h-full object-cover group-hover:scale-110 duration-500 rounded-l-lg"
                    alt="image"
                  />
                  <p className="absolute right-0 top-7 bg-white p-2 rounded-l-lg text-primary font-semibold">
                    {blogs.topic}
                  </p>
                </div>
                <div className="p-8">
                  <Link
                    href="#"
                    className="text-xl font-semibold hover:text-primary duration-300"
                  >
                    {blogs.title}
                  </Link>
                  <p className="mt-3 text-lg">{blogs.description}</p>
                  <div className="mt-5 flex justify-between">
                    <p className="flex gap-1 justify-center items-center">
                      <CalendarDays
                        className="text-primary w-6 h-6"
                        strokeWidth={1}
                      />
                      {blogs.date}
                    </p>
                    <p className="flex gap-1 justify-center items-center">
                      <Eye className="text-primary w-6 h-6" strokeWidth={1} />
                      {blogs.views}
                    </p>
                    <p className="flex gap-1 justify-center items-center">
                      <MessageCircle
                        className="text-primary w-6 h-6"
                        strokeWidth={1}
                      />
                      1 comment
                    </p>
                    <div></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="">dkj</div>
        </div>
      </div>{" "}
    </div>
  );
};

export default news;
