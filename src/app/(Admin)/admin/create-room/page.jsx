"use client";
import Link from "next/link";
import React, { useState, useRef } from "react";
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
  oneNight: z.coerce
    .number()
    .positive({ message: "One night price must be greater than 0" }),
  sevenNights: z.coerce
    .number()
    .positive({ message: "Seven nights price must be greater than 0" }),
});

const Page = () => {
  const [file, setFile] = useState(null);
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
      oneNight: 0,
      sevenNights: 0,
    },
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("image", data.image);
    formData.append("sleeps", data.sleeps);
    formData.append("beds", data.beds);
    formData.append("oneNight", data.oneNight);
    formData.append("sevenNights", data.sevenNights);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/room",
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
        console.log("Success:", response.data);
      } else {
        console.log("Failed response:", response.statusText);
      }

      toast({
        title: "Success",
        description: "Room added successfully!",
        style: {
          background: "green",
          color: "white",
        },
      });

      router.push("/admin/all-rooms");
    } catch (error) {
      console.log(error, "not submitted");
      toast({
        title: "Error",
        description: "Failed to add Room.",
        style: {
          background: "red",
          color: "white",
        },
      });
    }
  };

  return (
    <div className="my-10 max-w-5xl m-auto">
      <div className="flex justify-between items-center mb-10">
        <h1 className="font-bold text-3xl text-center">Create Room</h1>
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
                <FormLabel className="font-bold text-lg text-primary">
                  Title
                </FormLabel>
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
                <FormLabel className="font-bold text-lg text-primary">
                  Description
                </FormLabel>
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
                <FormLabel className="font-bold text-lg text-primary">
                  Image
                </FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    ref={fileInputRef}
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
                <FormLabel className="font-bold text-lg text-primary">
                  Sleeps
                </FormLabel>
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
                <FormLabel className="font-bold text-lg text-primary">
                  Beds
                </FormLabel>
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

          <FormField
            control={form.control}
            name="oneNight"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold text-lg text-primary">
                  Price For one Night
                </FormLabel>
                <FormControl>
                  <Input placeholder="one Night" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sevenNights"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold text-lg text-primary">
                  Price For Seven Nights
                </FormLabel>
                <FormControl>
                  <Input placeholder="Seven Nights" type="number" {...field} />
                </FormControl>
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
