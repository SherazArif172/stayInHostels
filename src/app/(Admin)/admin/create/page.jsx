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
  category: z.enum(["light", "dark", "system"], {
    errorMap: () => ({ message: "Category is required" }),
  }),
});

const Page = () => {
  const [file, setFile] = useState(null);
  const [selectedTheme, setSelectedTheme] = useState("");
  const fileInputRef = useRef(null);

  const { toast } = useToast();
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("image", file);
    formData.append("theme", selectedTheme);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/blog",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        form.reset();
        form.setValue("category", "");
        setFile(null);
        setSelectedTheme("");

        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }

        console.log("Success:", response.data);
      } else {
        console.log("Failed response:", response.statusText);
      }

      toast({
        title: "Success",
        description: "Blog added successfully!",
        style: {
          background: "green",
          color: "white",
        },
      });

      router.push("/admin/all-blogs");
    } catch (error) {
      console.log(error, "not submitted");
      toast({
        title: "Error",
        description: "Failed to add blog.",
        style: {
          background: "red", // Custom background color for success
          color: "white", // Text color
        },
      });
    }
  };

  return (
    <div className="my-10 max-w-5xl m-auto">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-3xl text-center">Create Blog</h1>
        <Link href="/dashboard">
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
                    placeholder="name"
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
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select
                  onValueChange={(value) => {
                    field.onChange(value);
                    setSelectedTheme(value);
                  }}
                  value={field.value}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Science</SelectItem>
                    <SelectItem value="dark">Tour</SelectItem>
                    <SelectItem value="system">Asthatic</SelectItem>
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
