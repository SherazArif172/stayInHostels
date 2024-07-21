import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./(frontend)/_components/hero/Hero"));
const Rooms = dynamic(() => import("./(frontend)/_components/rooms/Rooms"));
const Facilities = dynamic(() =>
  import("./(frontend)/_components/facilities/Facilities")
);
const Booking = dynamic(() =>
  import("./(frontend)/_components/booking/Booking")
);
const Blogs = dynamic(() => import("./(frontend)/_components/blogs/blogs"));
const Contacts = dynamic(() =>
  import("./(frontend)/_components/contacts/Contacts")
);
const Gallery = dynamic(() =>
  import("./(frontend)/_components/gallery/Gallery")
);

// Now you can use these components in your application

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
