"use client";

import { Mulish } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/footer";
import { usePathname } from "next/navigation"; // Import usePathname
import Head from "next/head"; // Import the Head component from Next.js

// export const metadata = {
//   title: "stayinn hostels",
//   description:
//     "Discover affordable and comfortable hostel accommodations at Stay Inn Hostels. Whether you're traveling for business, studying, or exploring new cities, our modern and convenient hostels offer the perfect place to stay. Enjoy amenities like free Wi-Fi, cozy rooms, and easy access to local attractions. Book your stay today!",
// };

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname("/dashboard"); // Get the current pathname

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>stayinn hostels</title>
        <meta
          name="description"
          content="Discover affordable and comfortable hostel accommodations at Stay Inn Hostels. Whether you're traveling for business, studying, or exploring new cities, our modern and convenient hostels offer the perfect place to stay. Enjoy amenities like free Wi-Fi, cozy rooms, and easy access to local attractions. Book your stay today!"
        />
      </Head>
      <body className={mulish.className}>
        {pathname !== "/dashboard" && <Navbar />}
        {children}
        {pathname !== "/dashboard" && <Footer />}
      </body>
    </html>
  );
}
