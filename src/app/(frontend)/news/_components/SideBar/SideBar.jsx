import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, Search } from "lucide-react";
import Link from "next/link";
import React from "react";
import Category from "../../../../../data/categories.json";
import tag from "../../../../../data/tag.json";
import Image from "next/image";

const SideBar = () => {
  return (
    <div className="lg:max-w-[350px] w-full shadow-custom px-7 mt-7 py-7  lg:sticky lg:top-8 lg:self-start lg:overflow-y-auto lg:max-h-[calc(100vh-4rem)]">
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
              <Link href={tag.path}>
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

    // side bar

    // <div className="lg:w-1/3 lg:sticky lg:top-8 lg:self-start">
    //   <div className="overflow-y-auto max-h-[calc(100vh-4rem)]">
    //     {/* Search */}
    //     <div className="mb-8">
    //       <div className="relative">
    //         <input
    //           type="text"
    //           placeholder="Search"
    //           className="w-full p-2 pr-10 border rounded-md"
    //         />
    //         <Search
    //           className="absolute right-3 top-2.5 text-gray-400"
    //           size={20}
    //         />
    //       </div>
    //     </div>

    //     {/* Categories */}
    //     <div className="mb-8">
    //       <h3 className="text-lg font-semibold mb-4">Categories</h3>
    //       <ul className="space-y-2">
    //         <li className="text-gray-700">Travel</li>
    //         <li className="bg-blue-100 p-2 rounded">Tourist Guide</li>
    //         <li className="text-gray-700">City Sights</li>
    //         <li className="text-gray-700">Communication</li>
    //       </ul>
    //     </div>

    //     {/* Recommended Articles */}
    //     <div className="mb-8">
    //       <h3 className="text-lg font-semibold mb-4">Recommended articles</h3>
    //       <div className="space-y-4">
    //         {[1, 2, 3].map((i) => (
    //           <div key={i} className="flex items-center space-x-4">
    //             <Image
    //               src="/placeholder.svg?height=60&width=60"
    //               alt={`Recommended article ${i}`}
    //               width={60}
    //               height={60}
    //               className="rounded-md object-cover"
    //             />
    //             <div>
    //               <h4 className="font-medium">Travel and Working Holidays</h4>
    //               <p className="text-sm text-gray-500">June 16, 2021</p>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     {/* Tags */}
    //     <div className="mb-8">
    //       <h3 className="text-lg font-semibold mb-4">Tag</h3>
    //       <div className="flex flex-wrap gap-2">
    //         {["Room", "People", "Guide", "Season", "City", "Sights"].map(
    //           (tag) => (
    //             <span
    //               key={tag}
    //               className="bg-gray-200 px-3 py-1 rounded-full text-sm"
    //             >
    //               {tag}
    //             </span>
    //           )
    //         )}
    //       </div>
    //     </div>

    //     {/* Subscribe */}
    //     <div className="mb-8">
    //       <h3 className="text-lg font-semibold mb-4">
    //         Subscribe to our mailing list
    //       </h3>
    //       <div className="flex">
    //         <input
    //           type="email"
    //           placeholder="Email address"
    //           className="flex-grow p-2 border rounded-l-md"
    //         />
    //         <button className="bg-blue-500 text-white p-2 rounded-r-md">
    //           <Mail size={20} />
    //         </button>
    //       </div>
    //     </div>

    //     {/* Instagram */}
    //     <div>
    //       <h3 className="text-lg font-semibold mb-4">Instagram</h3>
    //       <div className="grid grid-cols-3 gap-2">
    //         {[1, 2, 3, 4, 5, 6].map((i) => (
    //           <Image
    //             key={i}
    //             src="/placeholder.svg?height=100&width=100"
    //             alt={`Instagram post ${i}`}
    //             width={100}
    //             height={100}
    //             className="rounded-md object-cover"
    //           />
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default SideBar;
