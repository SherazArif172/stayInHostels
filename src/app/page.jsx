import Image from "next/image";

import Hero from "./(frontend)/_components/hero/Hero";
import Rooms from "./(frontend)/_components/rooms/Rooms";
// import HeroMain from "./(frontend)/_components/hero/HeroMain";

export default function Home() {
  return (
    <main>
      <Hero />
      <Rooms />
    </main>
  );
}
