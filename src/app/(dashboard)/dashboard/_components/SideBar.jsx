"use client";

import { Button } from "@/components/ui/button";
import { Home, Settings, Users, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const SideBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div>
      <aside
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 text-white transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0`}
      >
        <div className="flex items-center justify-between p-4">
          <span className="text-2xl font-semibold">Admin Panel</span>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={toggleSidebar}
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        <nav className="mt-8">
          <NavItem icon={<Home className="h-5 w-5" />} label="Home" />
          <NavItem icon={<Users className="h-5 w-5" />} label="Users" />
          <NavItem icon={<Settings className="h-5 w-5" />} label="Settings" />
        </nav>
      </aside>
    </div>
  );
};

export default SideBar;

function NavItem({ icon, label }) {
  return (
    <Link
      href="#"
      className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200"
    >
      {icon}
      <span className="ml-3">{label}</span>
    </Link>
  );
}
