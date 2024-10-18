// "use client";

import React from "react";
import Navbar from "../dashboard/_components/Navbar";
import SideBar from "./_components/SideBar";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="">
          <SideBar />
        </div>
        <main className="w-full p-6">{children}</main>
      </div>
    </div>
  );
};

export default RootLayout;
