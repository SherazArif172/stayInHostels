import Image from "next/image";

import Hero from "./(frontend)/_components/hero/Hero";
import Rooms from "./(frontend)/_components/rooms/Rooms";
// import HeroMain from "./(frontend)/_components/hero/HeroMain";
import Facilities from "./(frontend)/_components/facilities/Facilities";
// import Reviews from "./(frontend)/_components/reviews/Reviews";
import Booking from "./(frontend)/_components/booking/Booking";
import Blogs from "./(frontend)/_components/blogs/blogs";
import Contacts from "./(frontend)/_components/contacts/Contacts";
import Gallery from "./(frontend)/_components/gallery/Gallery";

export default function Home() {
  return (
    <main>
      <Hero />
      <Rooms />
      <Facilities />
      {/* <Reviews /> */}
      <Booking />
      <Gallery />
      <Blogs />
      <Contacts />
    </main>
  );
}
