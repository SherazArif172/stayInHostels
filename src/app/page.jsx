import Image from "next/image";

import Hero from "./(frontend)/_components/hero/Hero";
// import HeroMain from "./(frontend)/_components/hero/HeroMain";

export default function Home() {
  return (
    <main>
      <h1>
        <Hero />
      </h1>
    </main>
  );
}
