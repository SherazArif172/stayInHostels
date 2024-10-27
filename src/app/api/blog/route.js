import { connectDB } from "@/lib/config/db";
import Post from "@/lib/models/Post";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
const fs = require("fs");

const LoadData = async () => {
  try {
    await connectDB();
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
};

LoadData();

export async function GET(req) {
  try {
    const url = new URL(req.url); // Create a URL instance from req.url

    const blogId = url.searchParams.get("id");
    console.log(blogId);

    if (blogId) {
      console.log(blogId);
      const blog = await Post.findById(blogId);
      return NextResponse.json(blog);
    } else {
      const blogs = await Post.find({});
      return NextResponse.json({ blogs });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  const formData = await req.formData();
  const timestamp = Date.now();

  const image = formData.get("image");
  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteData);
  const path = `./public/${timestamp}_${image.name}`;
  await writeFile(path, buffer);
  const imgUrl = `/${timestamp}_${image.name}`;

  const blogData = {
    imageUrl: `${imgUrl}`,
    title: `${formData.get("title")}`,
    content: `${formData.get("description")}`,
    category: `${formData.get("category")}`,
  };

  await Post.create(blogData);
  console.log("Data has been saved");

  return NextResponse.json({ Success: true, msg: "blog added" });
}

export async function DELETE(req) {
  try {
    const url = new URL(req.url); // Create a URL instance from req.url
    const blogId = url.searchParams.get("id");
    const blog = await Post.findById(blogId);

    if (!blog) {
      console.error("Blog not found");
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    fs.unlink(`./public/${blog.image}`, () => {});
    await Post.findByIdAndDelete(blogId);
    return NextResponse.json({ msg: "Blog deleted" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
