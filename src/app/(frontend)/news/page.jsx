import Link from "next/link";
import React from "react";

const news = () => {
  return (
    <div className=" ">
      <div className="text-lg h-44 bg-primary-cstm md:px-14 px-11 md:py-14 py-10 max-w-7xl m-auto">
        <Link href="/" className="text-primary font-semibold">
          Home
        </Link>{" "}
        / News
        <p className="md:text-5xl text-2xl font-semibold mt-2">News</p>
      </div>
      <div className="max-w-7xl m-auto py-16 "></div>
    </div>
  );
};

export default news;
