import Image from "next/image";
import React from "react";
import PartnerData from "../../../../data/partner.json";

const Partners = () => {
  return (
    <div className="lg:py-16 py-8 bg-primary-bgg max-w-[1920px] m-auto mt-28">
      <div className="max-w-7xl grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6  items-center m-auto">
        {PartnerData.map((data, index) => (
          <div key={index} className="m-auto">
            <p className="font-bold">
              <span className="text-3xl font-extrabold">{data.title1}</span>
              {data.title2}
            </p>
            <p className="mt-1">{data.comment}</p>

            <Image
              src={data.image}
              width={140}
              height={140}
              className="mt-3"
              alt="image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
