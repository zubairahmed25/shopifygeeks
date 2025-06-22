"use client";
import React, { useState, useRef, useEffect } from "react";
import { CartBagIcon } from "@/icons";
import { motion, AnimatePresence } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function ServicesExpendableDetail() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [mountedSplineIndex, setMountedSplineIndex] = useState(null);

  const sectionRefs = useRef([]);

  const servicesList = [
    {
      heading: "Shopify Theme Development",
      title: "Shopify Theme Development",
      detail: "Enhance your store’s capabilities...",
      iframeSrc: "/shopifyThemeDev.splinecode",
      thumbnail: "/spline_theme.png",
    },
    {
      heading: "Shopify Custom Development",
      title: "Shopify Custom Development",
      detail: "Custom apps and features...",
      iframeSrc: "/shopifyCustomDev.splinecode",
      thumbnail: "/spline_custom_develope.png",
    },
    {
      heading: "Shopify App Development",
      title: "Shopify App Development",
      detail: "Apps that scale with your business...",
      iframeSrc: "/shopifyAppDev.splinecode",
      thumbnail: "/spline_developement.png",
    },
    {
      heading: "Platform Migration",
      title: "Platform Migration",
      detail: "Migrate your store without disruption...",
      iframeSrc: "/platformMigration.splinecode",
      thumbnail: "/spline_platform.png",
    },
    {
      heading: "Figma to Shopify Development",
      title: "Figma to Shopify Development",
      detail: "Pixel-perfect dev from Figma designs...",
      iframeSrc: "/figmaToShopify.splinecode",
      thumbnail: "/spline_figma_develope.png",
    },
  ];

  const toggleActive = (index) => {
    const newActive = activeIndex === index ? null : index;
    setActiveIndex(newActive);

    if (newActive !== null) {
      setMountedSplineIndex(null);
      setTimeout(() => {
        setMountedSplineIndex(newActive);
      }, 500); // Spline fade-in delay
    } else {
      setMountedSplineIndex(null);
    }

    if (newActive !== null && window.innerWidth >= 768 && newActive === 4) {
      setTimeout(() => {
        sectionRefs.current[newActive]?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 150);
    }
  };

  return (
    <div className="flex flex-col w-full" id="services">
      {servicesList.map((item, index) => (
        <div
          key={index}
          className="flex flex-col w-full"
          ref={(el) => (sectionRefs.current[index] = el)}
        >
          {activeIndex !== index && (
            <div
              className="border-t border-solid border-black py-6 hover:cursor-pointer flex z-50"
              onClick={() => toggleActive(index)}
            >
              <div className="container">
                <h1 className="sm:text-3xl text-xl text-[#07090B] font-semibold">
                  {item.heading}
                </h1>
              </div>
            </div>
          )}

          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                layout
                initial={{ maxHeight: 0, opacity: 0 }}
                animate={{ maxHeight: 600, opacity: 1 }}
                exit={{ maxHeight: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="bg-black md:min-h-60 min-h-[100px] max-md:relative">
                  <div className="container flex md:flex-row flex-col gap-8">
                    <div className="flex flex-col flex-1 gap-4 py-10">
                      <div className="bg-[#4462FF]/30 h-12 w-12 rounded-lg p-2">
                        <CartBagIcon />
                      </div>
                      <h2 className="md:text-5xl text-xl text-white font-bold">
                        {item.title}
                      </h2>
                      <p className="text-white sm:text-lg text-base font-clashRegular">
                        {item.detail}
                      </p>
                    </div>

                    {/* spline with thumbnail transition */}
                    <div className="flex flex-1 relative min-h-[300px] rounded-lg overflow-hidden">
                      {/* thumbnail image */}
                      <img
                        src={item.thumbnail}
                        alt="Preview"
                        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 
    scale-[0.85] max-md:scale-[1.10] translate-y-1 max-md:opacity-50
    ${mountedSplineIndex === index
                            ? "!opacity-0"
                            : "opacity-100"
                          }`}
                      />

                      {/* spline shown after delay */}
                      {mountedSplineIndex === index && (
                        <motion.div
                          className="absolute w-full h-full"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Spline
                            scene={item.iframeSrc}
                            className="w-full h-full max-md:absolute max-md:inset-0 max-md:z-10 max-md:opacity-50"
                          />
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
