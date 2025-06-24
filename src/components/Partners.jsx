
"use client";
import React from "react";
import { motion } from "framer-motion";

const logos = [
  "/logos/d1.svg",
"/logos/d2.svg",
"/logos/d3.svg",
"/logos/d4.svg",
"/logos/d5.svg",
"/logos/d6.svg",
"/logos/d7.svg",
"/logos/d8.svg",
"/logos/d9.svg",

];

const Partners = () => {
  return (
    <div>
      <div className="overflow-hidden h-[300px] flex justify-center"> {/* fixing div height as more area will be better with vertical scrolling */}
        <div className="flex flex-row gap-8">

          <div className="relative w-28 flex justify-center">
            <motion.div
              className="flex flex-col space-y-12 absolute"
              animate={{ y: ["0%", "-50%"] }} // changing animation to vertical
              transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt="Client Logo"
                  className="w-28 h-auto object-contain"
                  style={{ left: "-11px", top: "15px" }}
                />
              ))}

            </motion.div>

          </div>
          <div className="relative w-28 flex justify-center">
            <motion.div
              className="flex flex-col space-y-12 absolute"
              animate={{ y: ["-50%", "0%"] }} // changing animation to vertical
              transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt="Client Logo"
                  className="w-28 h-auto object-contain"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Partners;






