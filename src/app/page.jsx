import dynamic from "next/dynamic";
import Reviews from "./(frontend)/_components/reviews/Reviews";

const Hero = dynamic(() => import("./(frontend)/_components/hero/Hero"));
const Rooms = dynamic(() => import("./(frontend)/_components/rooms/Rooms"));
const Facilities = dynamic(() =>
  import("./(frontend)/_components/facilities/Facilities")
);

const Partners = dynamic(() =>
  import("./(frontend)/_components/partners/Partners")
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
  // throw new Error("error");
  return (
    <main>
      <Hero />
      <Rooms />
      <Facilities />
      <Partners />
      {/* <Reviews /> */}
      <Booking />
      <Gallery />
      <Blogs />
      <Contacts />
    </main>
  );
}
