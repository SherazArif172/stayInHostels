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
import Stages from "../../about/_components/Stages/Stages";
import Rooms from "../../_components/rooms/Rooms";

const page = ({ params }) => {
  const id = params.id;

  return (
    <div className="max-w-[1920px] m-auto ">
      <div className="text-lg h-44 bg-primary-bgg md:px-14 px-11 md:py-14 py-10 ">
        <div className="max-w-[930px] m-auto">
          <Link href="/" className="text-primary font-semibold">
            Home
          </Link>{" "}
          / Superior Double Bed Private Ensuite
          <p className="md:text-5xl text-2xl font-extrabold mt-2">
            Superior Double Bed Private Ensuite {id}
          </p>
        </div>
      </div>
      <div className="lg:max-w-7xl lg:m-auto px-4 md:py-20 py-16">
        <div className="flex justify-center lg:gap-7 w-full mb-14">
          {" "}
          <Image
            src={Bed}
            width={1000}
            height={1000}
            alt="image"
            className="w-full  lg:max-w-3xl "
          />
          {/* <div className="lg:flex flex-col gap-7  hidden">
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
          </div> */}
        </div>
        <div className="flex lg:pl-14 mt-5 lg:gap-9 gap-3">
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
          <div className="">
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
