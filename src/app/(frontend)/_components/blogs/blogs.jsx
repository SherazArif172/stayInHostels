"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import Blogss from "../../../../data/blogs.json";
import Image from "next/image";
import { CalendarDays, Eye } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const blogs = () => {
  return (
    <div className="lg:px-16 px-4 lg:py-16 py-8 max-w-7xl m-auto">
      <div className="flex justify-between">
        <p className="text-4xl font-semibold ">Hosteller news</p>
        <Button className="bg-primary-cstm text-primary font-bold">
          View all news
        </Button>
      </div>
      <div className="mt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
        {Blogss.map((blogs, index) => (
          <div className="shadow-custom" key={index}>
            <div className="relative aspect-[12/8] w-full">
              <Image
                src={blogs.image}
                fill
                className="w-full h-full object-cover"
                alt="image"
              />
              <p className="absolute top-7 bg-white p-2 rounded-r-lg text-primary font-semibold">
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
                <div></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default blogs;
