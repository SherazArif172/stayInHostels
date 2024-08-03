"use client";

import { Clock, Mail, MailOpen, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Contacts = () => {
  return (
    <div className="flex lg:flex-row flex-col max-w-7xl m-auto lg:pt-16 pt-4 lg:gap-0 gap-8">
      <div className="lg:px-16 self-center w-full px-4">
        <motion.p
          initial={{ y: -150, opacity: 0.5 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-semibold md:text-left text-center"
        >
          Contacts
        </motion.p>
        <motion.p
          initial={{ y: -150, opacity: 0.5 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-5 md:text-left text-center"
        >
          Egestas pretium aenean pharetra magna ac. Et tortor consequat id porta
          nibh venenatis cras sed
        </motion.p>
        <div className="mt-7 ">
          <motion.div
            initial={{ y: 150, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex md:flex-row flex-col gap-7"
          >
            <div className="flex  justify-center items-center gap-5">
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
                <MailOpen
                  className="self-center text-primary w-7 h-7"
                  strokeWidth={1.5}
                />
              </div>
              <div className="w-44">
                <p className="text-2xl font-semibold">Email</p>
                <p className="mt-1">
                  <Link
                    href="stayinnhostels@hotmail.com"
                    className="text-primary"
                  >
                    stayinnhostels@hotmail.com
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
          </motion.div>
          <motion.div
            initial={{ y: 150, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex md:flex-row flex-col gap-7 mt-6"
          >
            <div className="flex justify-center items-center gap-5">
              <div className="p-7 bg-primary-cstm rounded-lg">
                <Clock
                  className="self-center text-primary w-7 h-7"
                  strokeWidth={1.5}
                />
              </div>
              <div className="w-44">
                <p className="text-2xl font-semibold">Working Time</p>
                <p className="mt-1 ">
                  Everyday <br />
                  9:00 am — 8:00 pm
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-5">
              <div className="p-7 bg-primary-cstm rounded-lg">
                <MapPin
                  className="self-center text-primary w-7 h-7"
                  strokeWidth={1.5}
                />
              </div>
              <div className="w-44">
                <p className="text-2xl font-semibold">Location</p>
                <p className="mt-1">
                  behria town ma
                  <br /> (Lahore)
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative w-full h-[500px]  pb-56">
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27010.6093473729!2d73.0263226!3d32.1954407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3921947a5fb8d879%3A0xddcf7cf655df0169!2sTHQ%20Hospital%20Kot%20Momin!5e0!3m2!1sen!2s!4v1720701466414!5m2!1sen!2s"
          // allowfullscreen=""
          // loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
        ></iframe> */}
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18089.86623074214!2d74.3804935728941!3d31.4495441742312!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391907523b5346f5%3A0x3a4d32ac49f25903!2sStay%20Inn%20Hostels!5e0!3m2!1sen!2s!4v1722710560866!5m2!1sen!2s"
        ></iframe>
      </div>
    </div>
  );
};

export default Contacts;
