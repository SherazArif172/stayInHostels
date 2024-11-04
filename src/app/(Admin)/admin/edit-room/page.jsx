"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// File upload size and type restrictions
const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

// Zod validation schema for form inputs
const formSchema = z.object({
  title: z
    .string()
    .nonempty({ message: "Title is required." })
    .min(2, { message: "Minimum 2 characters required." }),
  description: z
    .string()
    .nonempty({ message: "Description is required." })
    .min(2, { message: "Minimum 2 characters required." }),
  image: z
    .instanceof(File)
    .refine((file) => file?.size <= MAX_FILE_SIZE, "Max image size is 5MB.")
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png, and .webp formats are supported."
    ),
  sleeps: z.enum(["2 sleeps", "3 sleeps", "4 sleeps"], {
    errorMap: () => ({ message: "Sleep is required" }),
  }),
  beds: z.enum(["2 beds", "3 beds", "4 beds"], {
    errorMap: () => ({ message: "Bed is required" }),
  }),
});

const Page = ({ params }) => {
  const [room, setRoom] = useState(null);
  const id = params.id;
  console.log(id);
  const fileInputRef = useRef(null);
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      sleeps: "",
      beds: "",
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/room?id=${id}`);
        setRoom(res.data.room);
      } catch (error) {
        console.log(error, "error ");
      }
    };
    fetchData();
  }, [id, form]);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("image", data.image); // Directly from form data
    formData.append("sleeps", data.sleeps);
    formData.append("beds", data.beds);
    try {
      const response = await axios.put(
        `http://localhost:3000/api/room?id=${_id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        form.reset();
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        toast({
          title: "Success",
          description: "Room updated successfully!",
          style: {
            background: "green",
            color: "white",
          },
        });
        router.push("/admin/all-rooms");
      } else {
        toast({
          title: "Error",
          description: "Failed to update room.",
          style: {
            background: "red",
            color: "white",
          },
        });
      }
    } catch (error) {
      console.error("Error updating room:", error);
      toast({
        title: "Error",
        description: "Failed to update room.",
        style: {
          background: "red",
          color: "white",
        },
      });
    }
  };

  if (!room) {
    return <div>Loading...</div>; // Optional loading state
  }

  return (
    <div className="my-10 max-w-5xl m-auto">
      <div className="flex justify-between items-center mb-10">
        <h1 className="font-bold text-3xl text-center">Edit Room</h1>
        <Link href="/admin">
          <Button>Back</Button>
        </Link>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="title" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <textarea
                    placeholder="Enter a description"
                    {...field}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    rows={4}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    // ref={fileInputRef}
                    onChange={(e) => {
                      field.onChange(e.target.files[0]);
                      setFile(e.target.files[0]);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sleeps"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sleeps</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Sleeps" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2 sleeps">2 Sleeps</SelectItem>
                    <SelectItem value="3 sleeps">3 Sleeps</SelectItem>
                    <SelectItem value="4 sleeps">4 Sleeps</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="beds"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Beds</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Beds" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2 beds">2 Beds</SelectItem>
                    <SelectItem value="3 beds">3 Beds</SelectItem>
                    <SelectItem value="4 beds">4 Beds</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default Page;
