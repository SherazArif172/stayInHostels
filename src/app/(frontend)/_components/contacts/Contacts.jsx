import { Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

const Contacts = () => {
  return (
    <div className="flex max-w-7xl m-auto py-16">
      <div className="px-16 self-center">
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
              <div className="w-44">
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
              <div className="w-44">
                <p className="text-2xl font-semibold">Email</p>
                <p className="mt-1">
                  <Link
                    href="mailto:info@ShopVessels.com"
                    className="text-primary"
                  >
                    info@ShopVessels.com
                  </Link>{" "}
                  <br />{" "}
                  <Link
                    href="mailto:info@ShopVessels.com"
                    className="text-primary"
                  >
                    info@ShopVessels.com
                  </Link>
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
              <div className="w-44">
                <p className="text-2xl font-semibold">Working Time</p>
                <p className="mt-1 ">
                  behria town ma
                  <br /> (Lahore)
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
              <div className="w-44">
                <p className="text-2xl font-semibold">Phone</p>
                <p className="mt-1">
                  (329) 580-7077 <br /> (650) 382-5020
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27010.6093473729!2d73.0263226!3d32.1954407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3921947a5fb8d879%3A0xddcf7cf655df0169!2sTHQ%20Hospital%20Kot%20Momin!5e0!3m2!1sen!2s!4v1720701466414!5m2!1sen!2s"
          width="500"
          height="450"
          // style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contacts;
