import Image from "next/image";

import Navbar from "../components/navbar/Navbar";
import Hero from "./(frontend)/_components/hero/Hero";

export default function Home() {
  return (
    <main>
      <h1>
        <Navbar />
        <Hero />
      </h1>
    </main>
  );
}
