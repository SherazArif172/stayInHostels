"use client";

import { Button } from "@/components/ui/button";
import { BedSingle, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";

const Page = () => {
  const [rooms, setRooms] = useState([]);

  const { toast } = useToast();

  useEffect(() => {
    const formData = async (_id) => {
      try {
        const response = await axios.get(`http://localhost:3000/api/room`);
        setRooms(response.data.rooms);
      } catch (error) {
        console.log(error, "here is error");
      }
    };
    formData(); // Call the async function
  }, []);

  const handleDelete = async (_id) => {
    console.log("Attempting to delete blog with ID:", _id); // Log the ID
    try {
      await axios.delete(`http://localhost:3000/api/room?id=${_id}`);
      console.log("Deleted this:", _id);
      setRooms((prevBlogs) => prevBlogs.filter((room) => room._id !== _id));
      toast({
        title: "Success",
        description: "Blog deleted successfully!",
        style: {
          background: "green",
          color: "white",
        },
      });
    } catch (error) {
      console.error("Error deleting room", error);
      toast({
        title: "Error",
        description: "Failed to delete room.",
        style: {
          background: "red", // Custom background color for success
          color: "white", // Text color
        },
      });
    }
  };

  return (
    <div className="lg:py-16 py-8 lg:px-16 px-4  m-auto">
      {/* Main div */}

      {rooms.map((room, index) => (
        <div className="max-w-6xl m-auto" key={room._id}>
          <div
            initial={{ y: 150, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex lg:flex-row flex-col lg:items-center shadow-custom rounded-lg mt-6 "
          >
            <div className="relative lg:aspect-[15/10] aspect-video lg:max-w-96 w-full lg:rounded-l-lg rounded-t-lg overflow-hidden">
              <Image
                src={room.image}
                fill
                className="object-cover lg:rounded-l-lg rounded-t-lg w-full hover:scale-110 duration-500"
                alt="image"
              />
            </div>
            <div className="md:px-8 px-5 flex lg:flex-row flex-col md:justify-between md:items-center lg:py-0 py-5  w-full">
              <div className="w-full">
                <div className="mt-6">
                  {" "}
                  <Link
                    href="#"
                    className="font-extrabold text-2xl hover:text-primary duration-300 line-clamp-2"
                  >
                    {room.title}{" "}
                  </Link>
                </div>
                <p className=" mt-4 text-lg line-clamp-1">{room.description}</p>
                <div className="flex gap-10 mt-4">
                  <div className="flex gap-1 justify-center items-center h-[50px]">
                    <User strokeWidth={1} className="w-5" />
                    <p className="">{room.sleeps}</p>
                  </div>
                  <div className="flex gap-1 justify-center items-center">
                    <BedSingle strokeWidth={1} className="w-5" />
                    <p className=" ">{room.beds}</p>
                  </div>
                </div>
              </div>
              <div className="lg:flex lg:justify-center lg:w-auto  w-full">
                <div className="w-full  md:text-end  ">
                  {/* <p className="md:text-3xl text-3xl font-extrabold mt-6">
                offer <span className="text-base font-normal"> / 1 night</span>
              </p> */}
                  {/* <p className="font-extrabold text-2xl mt-6 text-foreground/70">
                offer 2<span className="text-base font-normal">/ 7 nights</span>
              </p> */}

                  <Button className="text-white bg-primary   hover:scale-110 duration-500 transition-all mt-8 w-full">
                    <Link href={`/admin/all-rooms/${room._id}`}>Edit Room</Link>
                  </Button>
                  <Button
                    className=" block hover:scale-110 duration-500 transition-all mt-8  w-full focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    onClick={() => handleDelete(room._id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
