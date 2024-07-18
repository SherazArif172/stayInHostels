import React from "react";
import Contacts from "../_components/contacts/Contacts";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className="bg-primary-cstm h-44 p-14 max-w-7xl m-auto">
        <div className="text-lg">
          <Link href="/" className="text-primary font-semibold">
            Home
          </Link>{" "}
          / contacts
        </div>
        <p className="text-5xl font-semibold mt-2">Contacts</p>
      </div>
      <div className="py-16">
        <Contacts />
      </div>
    </div>
  );
};

export default page;
