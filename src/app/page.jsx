import Image from "next/image";

import Hero from "./(frontend)/_components/hero/Hero";
import Rooms from "./(frontend)/_components/rooms/Rooms";
// import HeroMain from "./(frontend)/_components/hero/HeroMain";
import Facilities from "./(frontend)/_components/facilities/Facilities";
// import Reviews from "./(frontend)/_components/reviews/Reviews";
import Booking from "./(frontend)/_components/booking/Booking";

export default function Home() {
  return (
    <main>
      <Hero />
      <Rooms />
      <Facilities />
      {/* <Reviews /> */}
      <Booking />
    </main>
  );
}
