import React from "react";
import Navbar from "../dashboard/_components/Navbar";
import SideBar from "./_components/SideBar";
import { Sidebar } from "lucide-react";

const RootLayout = ({ children }) => {
  return (
    <div lang="en">
      <Navbar />
      {/* <Sidebar /> */}
      {children}
    </div>
  );
};

export default RootLayout;
