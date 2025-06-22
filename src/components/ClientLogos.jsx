"use client";
import React from "react";
import { motion } from "framer-motion";

const logos = [
  "/logos/logo1.png",
  "/logos/logo2.png",
  "/logos/logo3.png",
  "/logos/logo4.png",
  "/logos/logo5.png",
  "/logos/logo1.png",
  "/logos/logo2.png",
  "/logos/logo3.png",
  "/logos/logo4.png",
  "/logos/logo5.png",
];

const ClientLogos = () => {
  return (
<div className="overflow-hidden h-[300px]"> {/* fixing div height as more area will be better with vertical scrolling */}
  <div className="relative w-full flex justify-center">
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
        />
      ))}
    </motion.div>
  </div>
</div>

  );
};

export default ClientLogos;
