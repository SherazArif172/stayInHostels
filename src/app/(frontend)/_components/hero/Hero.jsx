import Image from "next/image";
import hero from "../../../../../public/hero/hero.jpg";

const Hero = () => {
  return (
    <div className="flex py-16">
      <div className="flex justify-center items-center">
        <p className="text-primary text-4xl">
          Hosteller — amazing hostel for the free spirited traveler
        </p>
      </div>
      <div className="w-[600px] h-[600px] ">
        <Image
          src={hero}
          width={600}
          height={600}
          alt="image"
          className="lg:block hidden bg-cover "
        />
      </div>
    </div>
  );
};

export default Hero;
