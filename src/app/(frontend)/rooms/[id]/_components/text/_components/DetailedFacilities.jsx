import {
  AirVent,
  Bed,
  CookingPot,
  Dumbbell,
  Luggage,
  ParkingCircle,
  ShowerHead,
  WashingMachine,
  Wifi,
} from "lucide-react";
import React from "react";

const DetailedFacilities = () => {
  return (
    <div className="mt-16">
      <p className="text-2xl font-extrabold">Room facilities</p>
      <div className="grid grid-cols-3">
        <div className="flex flex-col gap-5 mt-6">
          <p className="flex gap-2 text-lg font-medium">
            <Bed className="text-primary" /> Large bed
          </p>
          <p className="flex gap-2 text-lg font-medium">
            <Wifi className="text-primary" />
            High speed WiFi
          </p>
          <p className="flex gap-2 text-lg font-medium">
            <AirVent className="text-primary" />
            Air conditioning
          </p>
        </div>
        <div className="flex flex-col gap-5 mt-6">
          <p className="flex gap-2 text-lg font-medium">
            <ParkingCircle className="text-primary" /> Parking space
          </p>
          <p className="flex gap-2 text-lg font-medium">
            <Luggage className="text-primary" />
            Storage of luggage
          </p>
          <p className="flex gap-2 text-lg font-medium">
            <ShowerHead className="text-primary" /> Shower in the room
          </p>
        </div>
        <div className="flex flex-col gap-5 mt-6">
          <p className="flex gap-2 text-lg font-medium">
            <Dumbbell className="text-primary" /> General paid gym
          </p>
          <p className="flex gap-2 text-lg font-medium">
            <CookingPot className="text-primary" /> Shared kitchen
          </p>
          <p className="flex gap-2 text-lg font-medium">
            <WashingMachine className="text-primary" />
            Dry cleaning
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailedFacilities;
