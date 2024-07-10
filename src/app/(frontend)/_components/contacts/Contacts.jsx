import { Phone } from "lucide-react";
import React from "react";

const Contacts = () => {
  return (
    <div className="flex max-w-7xl m-auto">
      <div className="px-16 w-1/2">
        <p className="text-4xl font-semibold">Contacts</p>
        <p className="">
          Egestas pretium aenean pharetra magna ac. Et tortor consequat id porta
          nibh venenatis cras sed
        </p>
        <div>
          <div className="flex justify-center items-center">
            <Phone className="self-center" />
            <div className="">
              <p>Phone</p>
              <p>
                (329) 580-7077 <br /> (650) 382-5020
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2">kjsdf</div>
    </div>
  );
};

export default Contacts;
