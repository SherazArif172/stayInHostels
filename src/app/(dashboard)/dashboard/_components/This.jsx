"use client";

import { useState } from "react";
import {
  Menu,
  X,
  Search,
  Home,
  Users,
  Settings,
  LogOut,
  ChevronDown,
  PlusCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
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

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center justify-between p-4 bg-white shadow-md">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden mr-2"
              onClick={toggleSidebar}
            >
              <Menu className="h-6 w-6" />
            </Button>
            <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
          </div>
          {/* <UserDropdown /> */}
        </header>

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4">
          <div className="flex justify-between items-center mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search users..."
                className="pl-10 pr-4 py-2 w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" /> Add User
            </Button>
          </div>

          {/* Add your table or grid of users here */}
          <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">User List</h2>
            {/* Add your user list or table component here */}
          </div>
        </main>
      </div>
    </div>
  );
}

function NavItem({ icon, label }) {
  return (
    <a
      href="#"
      className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200"
    >
      {icon}
      <span className="ml-3">{label}</span>
    </a>
  );
}
