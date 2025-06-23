"use client";
import React from "react";
import { motion } from "framer-motion";

const logos = [
  "/logos/logo20.png",
  "/logos/logo21.png",
  "/logos/logo22.png",
  "/logos/logo1.jpeg",
  "/logos/logo2.jpeg",
  "/logos/logo3.jpeg",
  "/logos/logo4.jpeg",
  "/logos/logo5.jpeg",
  "/logos/logo6.jpeg",
];

const ClientLogos = () => {
  return (
    <div>    
      <div className="overflow-hidden">
      <div className="relative flex w-full">
        <motion.div
          className="flex space-x-12 min-w-max"
          animate={{ x: ["0%", "-100%"] }}
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
  );
};

export default ClientLogos;
