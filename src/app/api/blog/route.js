import { connectDB } from "@/lib/config/db";

const LoadData = async () => {
  try {
    await connectDB();
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
};

LoadData();
