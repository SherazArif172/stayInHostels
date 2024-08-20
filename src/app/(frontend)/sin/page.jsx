import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="text-lg h-44 bg-primary-bgg md:px-14 px-11 md:py-14 py-10 max-w-7xl m-auto">
        <Link href="/" className="text-primary font-semibold">
          Home
        </Link>{" "}
        / Superior Double Bed Private Ensuite
        <p className="md:text-5xl text-2xl font-extrabold mt-2">
          Superior Double Bed Private Ensuite{" "}
        </p>
      </div>
    </div>
  );
};

export default page;
