"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import * as React from "react";
import navItems from "../../../../data/sidebar.json";
import NavImg from "../../../../../public/navbar/footer.png";

import {
  Home,
  Users,
  Folder,
  Calendar,
  FileText,
  BarChart,
} from "lucide-react";
import Image from "next/image";

const icons = {
  Home,
  Users,
  Folder,
  Calendar,
  FileText,
  BarChart,
};

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="absolute top-4 left-4 z-50 p-2 bg-gray-800 rounded-md lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </button>

      <aside
        className={` z-40 w-64  h-[calc(100vh-64px)] overflow-hidden flex flex-col transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 bg-gray-900 text-white`}
      >
        <div className="flex items-center px-8 py-5 mb-2 font-bold text-2xl">
          <p className="lg:block hidden">Dashboard</p>
          <Image
            src={NavImg}
            width={140}
            height={140}
            className="lg:hidden block"
            alt="image"
          />
        </div>

        <nav className="px-3 py-4 flex-grow overflow-y-auto">
          {navItems.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <Link
                key={index}
                href="#"
                className="flex items-center px-4 py-2 text-gray-300 rounded-lg hover:bg-gray-700"
              >
                <div key={item.name} className="flex items-center p-2">
                  <Icon className="w-6 h-6 mr-2" />
                  <span>{item.name}</span>
                </div>
              </Link>
            );
          })}

          {/* <div className="mt-8">
            <h3 className="px-4 text-sm font-semibold text-gray-400 uppercase">
              Your teams
            </h3>
            {teams.map((team) => (
              <Link
                key={team.name}
                href="#"
                className="flex items-center px-4 py-2 mt-1 text-gray-300 rounded-lg hover:bg-gray-700"
              >
                <span className="w-6 h-6 mr-3 text-sm font-medium text-gray-300 bg-gray-700 rounded-full flex items-center justify-center">
                  {team.initial}
                </span>
                {team.name}
              </Link>
            ))}
          </div> */}

          <Link
            href="#"
            className="flex items-center px-4 py-2 mt-8 text-gray-300 rounded-lg hover:bg-gray-700"
          >
            <span className="mr-3">⚙️</span>
            Settings
          </Link>
        </nav>
      </aside>
    </>
  );
}
