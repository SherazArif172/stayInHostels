import { Button } from "@/components/ui/button";
import React from "react";
import Card from "./_components/Card";

const Rooms = () => {
  return (
    <div className="lg:px-16 py-28">
      <div className="flex justify-between">
        <p className="text-4xl font-bold">Hostel rooms</p>
        <Button className="bg-primary">View all rooms</Button>
      </div>
      <Card />
    </div>
  );
};

export default Rooms;
