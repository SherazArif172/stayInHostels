import { Mulish } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/footer";

export const metadata = {
  title: "stay inn hostels",
  description:
    "Discover affordable and comfortable hostel accommodations at Stay Inn Hostels. Whether you're traveling for business, studying, or exploring new cities, our modern and convenient hostels offer the perfect place to stay. Enjoy amenities like free Wi-Fi, cozy rooms, and easy access to local attractions. Book your stay today!",
};

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
