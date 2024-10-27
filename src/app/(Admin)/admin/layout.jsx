"use client";

import * as React from "react";
import {
  Check,
  ChevronsUpDown,
  GalleryVerticalEnd,
  Search,
} from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Bell, Menu, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Navimgg from "../../../../public/navbar/Frame.png";

import { Toaster } from "@/components/ui/toaster";
import Image from "next/image";
import Link from "next/link";

const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Posts",
      url: "#",
      items: [
        {
          title: "Create News",
          url: "/admin/create",
        },
        {
          title: "All News",
          url: "/admin/all-blogs",
        },
      ],
    },
    // {
    //   title: "Building Your Application",
    //   url: "#",
    //   items: [
    //     {
    //       title: "Routing",
    //       url: "#",
    //     },
    //     {
    //       title: "Data Fetching",
    //       url: "#",
    //       isActive: true,
    //     },
    //     {
    //       title: "Rendering",
    //       url: "#",
    //     },
    //     {
    //       title: "Caching",
    //       url: "#",
    //     },
    //     {
    //       title: "Styling",
    //       url: "#",
    //     },
    //     {
    //       title: "Optimizing",
    //       url: "#",
    //     },
    //     {
    //       title: "Configuring",
    //       url: "#",
    //     },
    //     {
    //       title: "Testing",
    //       url: "#",
    //     },
    //     {
    //       title: "Authentication",
    //       url: "#",
    //     },
    //     {
    //       title: "Deploying",
    //       url: "#",
    //     },
    //     {
    //       title: "Upgrading",
    //       url: "#",
    //     },
    //     {
    //       title: "Examples",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "API Reference",
    //   url: "#",
    //   items: [
    //     {
    //       title: "Components",
    //       url: "#",
    //     },
    //     {
    //       title: "File Conventions",
    //       url: "#",
    //     },
    //     {
    //       title: "Functions",
    //       url: "#",
    //     },
    //     {
    //       title: "next.config.js Options",
    //       url: "#",
    //     },
    //     {
    //       title: "CLI",
    //       url: "#",
    //     },
    //     {
    //       title: "Edge Runtime",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "Architecture",
    //   url: "#",
    //   items: [
    //     {
    //       title: "Accessibility",
    //       url: "#",
    //     },
    //     {
    //       title: "Fast Refresh",
    //       url: "#",
    //     },
    //     {
    //       title: "Next.js Compiler",
    //       url: "#",
    //     },
    //     {
    //       title: "Supported Browsers",
    //       url: "#",
    //     },
    //     {
    //       title: "Turbopack",
    //       url: "#",
    //     },
    //   ],
    // },
  ],
};

const layout = ({ children }) => {
  return (
    <div className="flex">
      <SidebarProvider>
        <Sidebar>
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <DropdownMenu></DropdownMenu>
              </SidebarMenuItem>
            </SidebarMenu>
            {/* <form>
              <SidebarGroup className="py-0">
                <SidebarGroupContent className="relative">
                  <Label htmlFor="search" className="sr-only">
                    Search
                  </Label>
                  <SidebarInput
                    id="search"
                    placeholder="Search the docs..."
                    className="pl-8"
                  />
                  <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
                </SidebarGroupContent>
              </SidebarGroup>
            </form> */}
            <Link href="/">
              <p className="font-bold text-3xl">Dashboard</p>
            </Link>
          </SidebarHeader>
          <SidebarContent>
            {data.navMain.map((item) => (
              <SidebarGroup key={item.title}>
                <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {item.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild isActive={item.isActive}>
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            ))}
          </SidebarContent>
          <SidebarRail />
        </Sidebar>
        <SidebarInset>
          <nav className="bg-white border-b border-gray-200 px-4 py-2.5 z-50 ">
            <div className="flex flex-wrap justify-between items-center">
              <div className="flex justify-start items-center">
                <button
                  data-drawer-target="drawer-navigation"
                  data-drawer-toggle="drawer-navigation"
                  aria-controls="drawer-navigation"
                  className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100"
                ></button>
                <Link
                  href="/dashboard"
                  className="flex items-center justify-between mr-4"
                >
                  <div className="flex gap-2">
                    <Image
                      src={Navimgg}
                      width={120}
                      height={59}
                      alt="image"
                      className=""
                    />
                  </div>
                </Link>
              </div>
              <div className="flex items-center lg:order-2">
                <div className="hidden md:block mr-3">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Search className="w-5 h-5 text-gray-500" />
                    </div>
                    <Input
                      type="search"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg"
                      placeholder="Search..."
                    />
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-6 w-6" />
                  <span className="sr-only">Notifications</span>
                  <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full top-0 right-0">
                    5
                  </div>
                </Button>
                <Button variant="ghost" size="icon">
                  <User className="h-6 w-6" />
                  <span className="sr-only">User menu</span>
                </Button>
              </div>
            </div>
          </nav>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 ">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </header>
          <main className="px-10 flex-grow">{children}</main>
          <Toaster />
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default layout;
