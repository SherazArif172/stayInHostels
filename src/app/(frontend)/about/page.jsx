import Link from "next/link";
import React from "react";
import Benifits from "./_components/Benifits/Benifits";
import Rooms from "../_components/rooms/Rooms";
import Stages from "./_components/Stages/Stages";
import Question from "./_components/Question/Question";

const page = () => {
  return (
    <div>
      <div className="bg-primary-cstm h-44 p-14">
        <div className="text-lg">
          <Link href="/" className="text-primary font-semibold">
            Home
          </Link>{" "}
          / About
        </div>
        <p className="text-5xl font-semibold mt-2">About</p>
      </div>
      <Benifits />
      <Rooms />
      <Stages />
      <Question />
    </div>
  );
};

export default page;
