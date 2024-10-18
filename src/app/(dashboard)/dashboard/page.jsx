"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useContext } from "react";
// import TitlePage from "../components/TitlePage";

function page() {
  return (
    <>
      {/* <TitlePage
        title="Home"
        description="Discover new songs from various musicians"
      /> */}
      <Card className="mt-10 border-dashed">
        <CardContent>
          <center>
            <CardHeader>
              <CardTitle className="font-bold">{`That's It`}</CardTitle>
              <CardDescription className="text-slate-300">
                Replace this with your content
              </CardDescription>
            </CardHeader>

            <Button asChild>
              <a href="https://ui.shadcn.com/">Shadcn UI</a>
            </Button>
          </center>
        </CardContent>
      </Card>
    </>
  );
}

export default page;
