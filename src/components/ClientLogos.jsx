"use client";
import React from "react";
import { motion } from "framer-motion";

const logos = [
  "/logos/c1.png",
  "/logos/c2.png",
  "/logos/c3.png",
  "/logos/c4.png",
  "/logos/c5.png",
  "/logos/c6.png",  
  "/logos/c7.png",
  "/logos/c8.png",
  "/logos/c9.png",
  "/logos/c10.png",
  "/logos/c11.png",
  "/logos/c1.png",
  "/logos/c2.png",
  "/logos/c3.png",
  "/logos/c4.png",
  "/logos/c5.png",
  "/logos/c6.png",  
  "/logos/c7.png",
  "/logos/c8.png",
  "/logos/c9.png",
  "/logos/c10.png",
  "/logos/c11.png",
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
