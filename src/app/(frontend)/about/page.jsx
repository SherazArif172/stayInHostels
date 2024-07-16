import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="bg-primary-bgg h-44 p-14">
      <Link href="/" className="hover:text-primary">
        Home
      </Link>{" "}
      / about
      <p className="text-5xl font-semibold">About</p>
    </div>
  );
};

export default page;
