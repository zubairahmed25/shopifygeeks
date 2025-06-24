"use client";
import React, { useState, useRef } from "react";
import { CartBagIcon } from "@/icons";
import { motion, AnimatePresence } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function ServicesExpendableDetail() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [mountedSplineIndex, setMountedSplineIndex] = useState(null);
  const [splineLoadedIndex, setSplineLoadedIndex] = useState(null);

  const sectionRefs = useRef([]);

  const servicesList = [
    {
      heading: "Shopify Theme Development",
      title: "Custom Themes That Convert – No Strings Attached",
      detail: "Your store deserves more than a template. We craft bespoke Shopify themes that capture your brand's essence and drive conversions. Every pixel is purposeful, every interaction intentional. And here's the kicker – you only pay when you love what you see. No deposits, no retainers, just exceptional design delivered.",
      iframeSrc: "/shopifyThemeDev.splinecode",
      thumbnail: "/spline_theme.png",
    },
    {
      heading: "Shopify App Development",
      title: "Custom Apps That Scale Your Business",
      detail: "Need functionality that doesn't exist? We build it. Our custom Shopify apps seamlessly integrate with your workflow, automate the mundane, and unlock new revenue streams. We're so confident in our code, we don't ask for a dime until your app is live and transforming your business.",
      iframeSrc: "/shopifyCustomDev.splinecode",
      thumbnail: "/spline_custom_develope.png",
    },
    {
      heading: "Shopify Store Speed Optimization",
      title: "Because Every Second Costs You Sales",
      detail: "Here's a painful truth: A 1-second delay in page load time can slash conversions by 7%. Mobile users? They'll abandon your site in 3 seconds flat. We obsess over milliseconds so you don't have to. Our speed optimization service typically delivers 40-70% faster load times, meaning more sales, better SEO rankings, and happier customers. The best part? You'll see the speed boost before you see our invoice.",
      iframeSrc: "/shopifyAppDev.splinecode",
      thumbnail: "/spline_developement.png",
    },
    {
      heading: "Shopify Store Migration",
      title: "Switch Platforms Without Switching Off Sales",
      detail: "Stuck on WooCommerce? Outgrowing BigCommerce? Wrestling with Magento? We've migrated hundreds of stores from every major platform to Shopify – zero data loss, zero downtime, zero upfront costs. Whether you're bringing 100 products or 100,000, we handle the heavy lifting. Your customers won't even notice the switch, but your bottom line will.",
      iframeSrc: "/platformMigration.splinecode",
      thumbnail: "/spline_platform.png",
    },
    {
      heading: "Shopify Apps Integration",
      title: "The Right Apps = 30% More Revenue (It's Math, Not Magic)",
      detail: "Your tech stack can make or break your conversion rate. We don't just install apps – we architect ecosystems. Email automation that actually converts. Inventory management that prevents stockouts. Customer service tools that turn complaints into repeat buyers. We know which apps play nice together and which combinations multiply your revenue. Pay us after your conversion rate proves we're right.",
      iframeSrc: "/figmaToShopify.splinecode",
      thumbnail: "/spline_figma_develope.png",
    },
  ];

  const toggleActive = (index) => {
    const newActive = activeIndex === index ? null : index;
    setActiveIndex(newActive);

    if (newActive !== null) {
      setMountedSplineIndex(null);
      setSplineLoadedIndex(null);
      setTimeout(() => {
        setMountedSplineIndex(newActive);
      }, 500);
    } else {
      setMountedSplineIndex(null);
      setSplineLoadedIndex(null);
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
                  <div className="container flex md:flex-row flex-col gap-8 relative">
                    <div className="flex flex-col flex-1 gap-4 py-10 relative z-10">
                      <div className="bg-[#4462FF]/30 h-12 w-12 rounded-lg p-2">
                        <CartBagIcon />
                      </div>
                      <h2 className="md:text-3xl text-xl text-white font-bold">{item.title}</h2>
                      <p className="text-white sm:text-md text-base font-clashRegular">{item.detail}</p>
                    </div>
                    <div
                      className={`
        min-h-[300px] flex-1 overflow-hidden rounded-lg
        ${/* mobile layout: absolute background */ ""}
        max-md:absolute max-md:inset-0 max-md:z-0
        ${/* desktop layout: relative inline */ ""}
        md:relative
      `}
                    >
                      {/* thumbnail Fallback */}
                      <img
                        src={item.thumbnail}
                        alt="Preview"
                        className={`
          absolute inset-0 w-full h-full object-contain transition-opacity duration-500
          scale-[1.45] max-md:scale-[3] translate-y-1
          ${splineLoadedIndex === index ? "!opacity-0" : "opacity-100"}
          ${/* faded background look only for mobile */ ""}
          max-md:opacity-50
        `}
                      />
                      {mountedSplineIndex === index && (
                        <motion.div
                          className="absolute inset-0 w-full h-full"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 1 }}
                        >
                          <Spline
                            scene={item.iframeSrc}
                            className={`
              w-full h-full
              ${/* mobile-specific tweaks */ ""}
              max-md:absolute max-md:inset-0 max-md:z-10 max-md:opacity-50
            `}
                            onLoad={() => setSplineLoadedIndex(index)}
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
