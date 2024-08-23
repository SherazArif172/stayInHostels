import Image from "next/image";
import Link from "next/link";
import React from "react";
import Bed from "../../../../../public/single room/bed.png";
import Bathroom from "../../../../../public/single room/bathroom.png";
import Sofa from "../../../../../public/single room/sofa.png";
import Bunk_bed from "../../../../../public/single room/bed/bunk-bed.png";
import { BedSingle, User } from "lucide-react";
import Text from "./_components/text/Text";
import LeaveComments from "./_components/text/LeaveComments";
import Booking from "../../_components/booking/Booking";
import Facilities from "../../_components/facilities/Facilities";
import Stages from "../../about/_components/Stages/Stages";
import Rooms from "../../_components/rooms/Rooms";

const page = ({ params }) => {
  const id = params.id;

  return (
    <div className="max-w-[1920px] m-auto ">
      <div className="text-lg h-44 bg-primary-bgg md:px-14 px-11 md:py-14 py-10 ">
        <div className="max-w-5xl m-auto">
          <Link href="/" className="text-primary font-semibold">
            Home
          </Link>{" "}
          / Superior Double Bed Private Ensuite
          <p className="md:text-5xl text-2xl font-extrabold mt-2">
            Superior Double Bed Private Ensuite {id}
          </p>
        </div>
      </div>
      <div className="max-w-7xl m-auto py-28">
        <div className="flex justify-center  gap-7">
          {" "}
          <Image
            src={Bed}
            width={300}
            height={300}
            alt="image"
            className="w-full  max-w-3xl"
          />
          <div className="flex flex-col gap-7">
            <Image
              src={Bathroom}
              width={300}
              height={300}
              alt="image"
              className="w-full rounded-lg "
            />
            <Image
              src={Sofa}
              width={300}
              height={300}
              alt="image"
              className="w-full rounded-lg "
            />
          </div>
        </div>
        <div className="flex pl-14 mt-5 gap-9">
          <div className="flex justify-center items-center gap-2">
            <User className="text-primary" /> 3 Sleeps
          </div>
          <div className="flex gap-2">
            <BedSingle className="text-primary" /> 1 full bed
          </div>
          <div className="flex gap-2">
            <Image src={Bunk_bed} width={22} height={22} alt="image" /> 2 twin
            bed
          </div>
        </div>
        <div>
          <div className="px-14">
            <Text />
            <LeaveComments />
          </div>
        </div>
      </div>
      <Booking />
      <Stages />
      <Rooms />
    </div>
  );
};

export default page;
