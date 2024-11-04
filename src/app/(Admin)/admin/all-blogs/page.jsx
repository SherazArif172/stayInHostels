"use client";

import React, { useEffect, useState } from "react";
import Imageee from "../../../../../public/blogs/image1.png";
import Image from "next/image";
import Link from "next/link";
import { Edit, Eye, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Trash } from "react-feather";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";

const Page = () => {
  const [blogs, setBlogs] = useState([]);

  const { toast } = useToast();

  useEffect(() => {
    const formData = async (_id) => {
      try {
        const response = await axios.get(`http://localhost:3000/api/blog`);
        setBlogs(response.data.blogs);
        console.log(response.data.blogs);
      } catch (error) {
        console.log(error, "here is error");
      }
    };
    formData(); // Call the async function
  }, []);

  const handleDelete = async (_id) => {
    console.log("Attempting to delete blog with ID:", _id); // Log the ID
    try {
      await axios.delete(`http://localhost:3000/api/blog?id=${_id}`);
      console.log("Deleted this:", _id);
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== _id));
      toast({
        title: "Success",
        description: "Blog deleted successfully!",
        style: {
          background: "green",
          color: "white",
        },
      });
    } catch (error) {
      console.error("Error deleting post:", error);
      toast({
        title: "Error",
        description: "Failed to delete blog.",
        style: {
          background: "red", // Custom background color for success
          color: "white", // Text color
        },
      });
    }
  };

  return (
    <div className="mt-10">
      <p className="font-bold text-3xl text-center">All Blogs</p>

      <div className="mt-8  grid lg:grid-cols-2  ">
        {blogs.map((blog) => (
          <article
            className="max-w-3xl mx-auto mb-7 bg-white rounded-lg overflow-hidden shadow-lg"
            key={blog._id}
          >
            <div className="relative h-64 w-full ">
              <Image
                src={blog.imageUrl}
                alt="Organized desk workspace"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <span>Mar 16, 2020</span>
                <span className="mx-2">•</span>
                <span>{blog.category}</span>
              </div>
              <div className="">
                <Link
                  href={`all-blogs/${blog._id}`}
                  className="text-2xl font-bold text-gray-900 mb-4 line-clamp-1 w-full hover:text-primary transition-all duration-400"
                >
                  {blog.title}
                </Link>
                <p className="text-gray-700 mb-6 line-clamp-1 w-full">
                  {blog.content}
                </p>
              </div>
              <div className="flex justify-end space-x-2">
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(blog._id)} // Attach handleDelete here
                >
                  <Trash2 className="mr-2 h-4 w-4" /> Delete
                </Button>
                <Button variant="outline" size="sm" type="button">
                  <Edit className="mr-2 h-4 w-4" /> Edit
                </Button>
                <Button variant="default" size="sm">
                  <Eye className="mr-2 h-4 w-4" /> View
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Page;
