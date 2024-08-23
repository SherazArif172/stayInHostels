import React from "react";
import Commentsman from "../../../../../../../../public/comments/commentsman.png";
import Image from "next/image";

const Comments = () => {
  return (
    <div className="mt-20">
      <p className="text-2xl font-extrabold">Post comments</p>
      <div className="shadow-custom">
        <div>
          <div>
            <Image src={Commentsman} width={30} height={30} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
