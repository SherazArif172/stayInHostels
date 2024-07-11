import { Phone } from "lucide-react";
import React from "react";

const Contacts = () => {
  return (
    <div className="flex max-w-7xl m-auto">
      <div className="px-16 w-1/2">
        <p className="text-4xl font-semibold">Contacts</p>
        <p className="mt-5">
          Egestas pretium aenean pharetra magna ac. Et tortor consequat id porta
          nibh venenatis cras sed
        </p>
        <div className="mt-7 ">
          <div className="flex gap-7">
            <div className="flex justify-center items-center gap-5">
              <div className="p-7 bg-primary-cstm rounded-lg">
                <Phone
                  className="self-center text-primary w-7 h-7"
                  strokeWidth={1.5}
                />
              </div>
              <div className="">
                <p className="text-2xl font-semibold">Phone</p>
                <p className="mt-1">
                  (329) 580-7077 <br /> (650) 382-5020
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-5">
              <div className="p-7 bg-primary-cstm rounded-lg">
                <Phone
                  className="self-center text-primary w-7 h-7"
                  strokeWidth={1.5}
                />
              </div>
              <div className="">
                <p className="text-2xl font-semibold">Phone</p>
                <p className="mt-1">
                  (329) 580-7077 <br /> (650) 382-5020
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-7 mt-6">
            <div className="flex justify-center items-center gap-5">
              <div className="p-7 bg-primary-cstm rounded-lg">
                <Phone
                  className="self-center text-primary w-7 h-7"
                  strokeWidth={1.5}
                />
              </div>
              <div className="">
                <p className="text-2xl font-semibold">Phone</p>
                <p className="mt-1">
                  (329) 580-7077 <br /> (650) 382-5020
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-5">
              <div className="p-7 bg-primary-cstm rounded-lg">
                <Phone
                  className="self-center text-primary w-7 h-7"
                  strokeWidth={1.5}
                />
              </div>
              <div className="">
                <p className="text-2xl font-semibold">Phone</p>
                <p className="mt-1">
                  (329) 580-7077 <br /> (650) 382-5020
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2">kjsdf</div>
    </div>
  );
};

export default Contacts;
