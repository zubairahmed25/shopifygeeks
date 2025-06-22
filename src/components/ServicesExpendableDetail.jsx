"use client";
import React, { useState, useRef, useEffect } from "react";
import { CartBagIcon } from "@/icons";
import { motion, AnimatePresence } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function ServicesExpendableDetail() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showSplineIndex, setShowSplineIndex] = useState(null);
 const [splineLoaded, setSplineLoaded] = useState(false);

  const sectionRefs = useRef([]);

  const servicesList = [
    {
      heading: "Shopify Theme Development",
      title: "Shopify Theme Development",
      detail:
        "Enhance your store’s capabilities with our bespoke Shopify app development. We create secure, scalable apps designed to streamline operations, improve user experience, and provide valuable insights.",
      iframeSrc: "/shopifyThemeDev.splinecode",
      thumbnail: "/spline.png",
    },
    {
      heading: "Shopify Custom Development",
      title: "Shopify Custom Development",
      detail:
        "Our bespoke Shopify app development includes secure, scalable apps that streamline operations and improve user experience.",
      iframeSrc: "/shopifyCustomDev.splinecode",
      thumbnail: "/spline.png",
    },
    {
      heading: "Shopify App Development",
      title: "Shopify App Development",
      detail:
        "We develop secure and scalable apps for Shopify, designed to grow with your business.",
      iframeSrc: "/shopifyAppDev.splinecode",
      thumbnail: "/spline.png",
    },
    {
      heading: "Platform Migration",
      title: "Platform Migration",
      detail:
        "Seamless migration services that ensure your store operates efficiently across platforms.",
      iframeSrc: "/platformMigration.splinecode",
      thumbnail: "/spline.png",
    },
    {
      heading: "Figma to Shopify Development",
      title: "Figma to Shopify Development",
      detail:
        "Transform your Figma designs into fully functional Shopify stores with our expert development services.",
      iframeSrc: "/figmaToShopify.splinecode",
      thumbnail: "/spline.png",
    },
  ];

  useEffect(() => {
    if (activeIndex !== null) {
      const timer = setTimeout(() => {
        setShowSplineIndex(activeIndex);
      }, 900); // Match animation duration
      return () => clearTimeout(timer);
    } else {
      setShowSplineIndex(null);
      setSplineLoaded(false)
    }
  }, [activeIndex]);

  const toggleActive = (index) => {
    const newActiveIndex = activeIndex === index ? null : index;
    setActiveIndex(newActiveIndex);

    if (newActiveIndex !== null && window.innerWidth >= 768) {
      if (newActiveIndex === 4) {
        setTimeout(() => {
          sectionRefs.current[newActiveIndex]?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 150);
      }
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
                animate={{
                  maxHeight: activeIndex === index ? 600 : 0,
                  opacity: activeIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                exit={{ maxHeight: 0, opacity: 1 }}
                className="overflow-hidden"
              >
                <div className="bg-black md:min-h-60 min-h-[100px] max-md:relative">
                  <div className="container flex md:flex-row flex-col gap-8">
                    <div className="flex flex-col flex-1 gap-4 max-h-fit md:min-h-full min-h-fit py-10">
                      <div className="bg-[#4462FF]/30 h-12 w-12 rounded-lg p-2">
                        <CartBagIcon />
                      </div>
                      <h2 className="md:text-5xl text-xl text-white font-bold max-md:z-20">
                        {item.title}
                      </h2>
                      <p className="text-white sm:text-lg text-base font-clashRegular max-md:z-20">
                        {item.detail}
                      </p>
                    </div>
                    <div className="flex flex-1 ">
                        {/*here we delay spline rendering until the animation is complete*/}
                      {showSplineIndex === index ? (
                        <Spline
                          scene={item.iframeSrc}
                          className="h-full w-full max-md:absolute max-md:inset-0 max-md:z-10 max-md:opacity-50"
                          onLoad={() =>
                            console.log(`Spline loaded for ${item.title}`)
                          }
                        />
                      ) : (
                        <div className="absolute inset-0 flex justify-center items-center ">
                         <span className="text-white"></span>
                        </div>
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
