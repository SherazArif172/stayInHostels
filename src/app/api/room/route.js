import { connectDB } from "@/lib/config/db";
import Room from "@/lib/models/Room";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
const fs = require("fs");

const LoadData = async () => {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
  }
};

LoadData();

export async function GET(req) {
  try {
    const url = new URL(req.url); // Create a URL instance from req.url
    const roomId = url.searchParams.get("id");

    if (roomId) {
      const room = await Room.findById(roomId);
      return NextResponse.json(room);
    } else {
      const rooms = await Room.find({});
      return NextResponse.json({ rooms });
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

  const roomData = {
    image: `${imgUrl}`,
    title: `${formData.get("title")}`,
    description: `${formData.get("description")}`,
    sleeps: `${formData.get("sleeps")}`,
    beds: `${formData.get("beds")}`,
  };

  await Room.create(roomData);
  console.log("Data has been saved");

  return NextResponse.json({ Success: true, msg: "room added" });
}

export async function DELETE(req) {
  try {
    const url = new URL(req.url); // Create a URL instance from req.url
    const roomId = url.searchParams.get("id");
    const room = await Room.findById(roomId);

    if (!room) {
      console.error("room not found");
      return NextResponse.json({ error: "room not found" }, { status: 404 });
    }

    fs.unlink(`./public/${room.image}`, () => {});
    await Room.findByIdAndDelete(roomId);
    return NextResponse.json({ msg: "room deleted" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function PUT(req) {
  try {
    const url = new URL(req.url);
    const roomId = url.searchParams.get("id");

    if (!roomId) {
      return NextResponse.json(
        { error: "Room ID is required" },
        { status: 400 }
      );
    }

    const formData = await req.formData();
    const room = await Room.findById(roomId);

    if (!room) {
      return NextResponse.json({ error: "Room not found" }, { status: 404 });
    }

    // Update image if a new one is uploaded
    let imgUrl = room.image;
    const newImage = formData.get("image");
    if (newImage) {
      const imageByteData = await newImage.arrayBuffer();
      const buffer = Buffer.from(imageByteData);
      const timestamp = Date.now();
      const newPath = `./public/${timestamp}_${newImage.name}`;

      // Delete the old image
      if (room.image) {
        fs.unlink(`./public${room.image}`, (err) => {
          if (err) console.error("Failed to delete old image", err);
        });
      }

      // Save new image and update URL
      await writeFile(newPath, buffer);
      imgUrl = `/${timestamp}_${newImage.name}`;
    }

    // Update room data
    room.title = formData.get("title") || room.title;
    room.description = formData.get("description") || room.description;
    room.sleeps = formData.get("sleeps") || room.sleeps;
    room.beds = formData.get("beds") || room.beds;
    room.image = imgUrl;

    await room.save();
    console.log("Room data has been updated");

    return NextResponse.json({
      success: true,
      msg: "Room updated successfully",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to update room" },
      { status: 500 }
    );
  }
}
