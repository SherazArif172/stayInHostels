import React from "react";
import DetailedFacilities from "./_components/DetailedFacilities";
import Rules from "./_components/Rules";
import Bookings from "./_components/Bookings";
import Choose from "../../../../../../components/Choose";
import Comments from "./_components/Comments";

const Text = () => {
  return (
    <div className=" flex gap-8">
      <div className="max-w-3xl">
        <p className="mt-12 ">
          Experience unparalleled comfort and privacy in our Superior Double Bed
          Private Ensuite. This spacious and elegantly furnished room features a
          luxurious double bed designed for restful sleep and relaxation. <br />
          <br />
          Enjoy the added convenience of a private ensuite bathroom, complete
          with modern amenities and stylish fixtures, ensuring a serene and
          comfortable stay. Perfect for both business and leisure travelers
          seeking a touch of sophistication.
        </p>
        <DetailedFacilities />
        <Rules />
        <Comments />
      </div>
      <div className="">
        <Bookings />
        <Choose />
      </div>
    </div>
  );
};

export default Text;
