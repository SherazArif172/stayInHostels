import { Button } from "@/components/ui/button";
import React from "react";

const Choose = () => {
  return (
    <div className=" lg:max-w-[360px] lg:mx-0  mt-9 shadow-custom p-11 bg-primary text-white rounded-md">
      <p className="text-4xl font-bold ">Stay Longer, Save More</p>
      <p className="text-lg mt-4">
        It&apos;s simple the longer you stay, the more you save!
      </p>
      <p className="border-l-2 border-white pl-4 mt-4">
        Save up to 30% on daily rate for stays longer than 14 nights <br />
        <br />
        Save up to 20% off the nightly rate on stays between 7-14 nights
      </p>
      <Button className="mt-4 px-4 py-6 bg-primary-cstm text-primary font-semibold">
        Choose room
      </Button>
    </div>
  );
};

export default Choose;
