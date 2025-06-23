"use client";
import React from "react";
import { motion } from "framer-motion";

const logos = [
  "/logos/logo6.png",
  "/logos/logo7.png",
  "/logos/logo8.png",
  "/logos/logo9.png",
  "/logos/logo10.png",
  "/logos/logo11.png",
  "/logos/logo6.png",
  "/logos/logo7.png",
  "/logos/logo8.png",
  "/logos/logo9.png",
  "/logos/logo10.png",
  "/logos/logo11.png",
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
