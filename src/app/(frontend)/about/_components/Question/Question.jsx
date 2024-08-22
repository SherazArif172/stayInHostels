"use client";

import { Check, MailOpen, User } from "lucide-react";
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Questionss from "./_components/Questionss";
import { motion } from "framer-motion";

const Question = () => {
  return (
    <div className="lg:px-16 px-4 lg:py-28 py-4 max-w-[1920px] m-auto bg-primary-bgg">
      <div className="flex lg:flex-row flex-col lg:gap-8 gap-6 max-w-7xl m-auto">
        <div className="w-full lg:self-center">
          <motion.p
            initial={{ y: 150, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:text-4xl text-3xl font-extrabold"
          >
            Rule settlement, eviction and stay
          </motion.p>
          <motion.div
            initial={{ y: 150, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-lg mt-7"
          >
            <p className="flex gap-2">
              <Check className="text-primary" /> Understand the hostel’s
              guidelines for a comfortable stay.
            </p>{" "}
            <br />
            <p className="flex gap-2">
              <Check className="text-primary" />
              Non-compliance with rules may lead to eviction.{" "}
            </p>{" "}
            <br />
            <p className="flex gap-2">
              <Check className="text-primary" /> Ensure your stay is within the
              agreed time frame.
            </p>
            <br />
            <p className="flex gap-2">
              <Check className="text-primary" />
              Maintain respect for fellow guests and hostel staff.
            </p>
          </motion.div>
        </div>
        <Questionss />
      </div>
    </div>
  );
};

export default Question;
