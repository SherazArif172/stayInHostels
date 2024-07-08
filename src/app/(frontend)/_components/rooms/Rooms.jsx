import { Button } from "@/components/ui/button";
import React from "react";
import Card from "./_components/Card";

const Rooms = () => {
  return (
    <div className="lg:px-16 py-28">
      <div className="flex justify-between items-center lg:mx-0 mx-5">
        <p className="md:text-4xl text-2xl font-bold">Hostel rooms</p>
        <Button className="bg-primary">View all rooms</Button>
      </div>
      <Card />
    </div>
  );
};

export default Rooms;
