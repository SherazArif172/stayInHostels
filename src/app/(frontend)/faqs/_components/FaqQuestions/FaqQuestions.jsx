import React from "react";
import Questionss from "@/app/(frontend)/about/_components/Question/_components/Questionss";
import Image from "next/image";
import Faqimg from "../../../../../../public/faqs/faqimg.webp";

const FaqQuestions = () => {
  return (
    <div className="lg:py-16 py-8 lg:px-16 px-4 max-w-7xl m-auto flex gap-7">
      <div className="w-full ">
        <Questionss className="shadow-none" />
      </div>
      <div className="relative aspect-square w-full roundedr--lg overflow-hidden">
        <Image
          src={Faqimg}
          fill
          alt="image"
          className="object-cover w-full h-full rounded-lg hover:scale-110 duration-500"
        />
      </div>
    </div>
  );
};

export default FaqQuestions;
