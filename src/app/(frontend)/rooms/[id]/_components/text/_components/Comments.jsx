import React from "react";
import Commentsman from "../../../../../../../../public/comments/commentsman.png";
import Image from "next/image";
import { Reply } from "lucide-react";

const Comments = () => {
  return (
    <div className="mt-20">
      <p className="text-2xl font-extrabold">Post comments</p>
      <div className="shadow-custom px-9 py-8">
        <div className="flex justify-between ">
          <div className="flex justify-center items-center gap-8">
            <Image src={Commentsman} width={40} height={40} alt="image" />
            <div>
              <p className="text-lg font-extrabold">Gloria Ellis</p>
              <p className="font-medium"> June 16, 2021</p>
            </div>
          </div>
          <Reply />
        </div>
        <p className="mt-5 font-medium max-w-[550px] m-auto">
          Fantastic hostel! Comfortable facilities and a warm, welcoming vibe.
          Highly recommend!
        </p>
      </div>
    </div>
  );
};

export default Comments;
