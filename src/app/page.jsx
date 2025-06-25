
import VideoPlayer from "@/components/VideoPlayer";
import ClientLogos from "@/components/ClientLogos";
import Partners from "@/components/Partners";
import ServicesExpendableDetail from "@/components/ServicesExpendableDetail";
import ContactUs from "@/components/ContactUs";
import HeroSection from "@/components/HeroSection";
import { ArrowUpIcon } from "@/icons";
import PreloaderWrapper from "./PreLoaderWrapper";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Quote from "@/components/Quote";
import FreeConsult from "@/components/FreeConsult";

export const metadata = {
  title: `Shopify Geeks - Shopify Development Agency`,
  description:
    "At Shopify Geeks, our team specializes in a wide range of services designed to elevate your online store. Whether you need a stunning new theme, custom functionality, or a seamless migration to Shopify, we’ve got you covered. Explore our core services below and discover how we can help your business grow.",

  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `Shopify Geeks - Shopify Development Agency`,
    url: "",
  },
  alternates: {
    canonical: ``,
  },
};

export default async function Home() {
  return (
    <PreloaderWrapper>
      <div className="flex flex-col" id="home">
        {/* Hero Section */}
        <div className="flex items-end justify-center bg-black min-h-[76vh] relative">
          <div className="container z-10 h-full flex items-center">
            <div className="flex flex-col gap-3 w-full transform -translate-y-16">
              <h1 className="text-5xl sm:text-5xl md:text-7xl font-bold text-white leading-tight max-sm:text-[2.8rem]">
                Shopify Development,<br/> Simplified.
              </h1>
              <h4 className="text-white text-left text-xl font-clashRegular sm:text-left">
                No retainers. No commitments. Only the good stuff.
              </h4>
            </div>
          </div>

          <HeroSection />
        </div>

        {/* Video Section */}
 


        <div id="about-us"> <VideoPlayer src="/video.ts" /></div>
  <FreeConsult/>

 {/* Quote Section */}
 <Quote/>


         {/* BEFORE after Section */}
         <BeforeAfterSlider />


        {/* Clients Logos Section */}
        <div className="flex w-full bg-white py-10">
          <div className="container">
            <div className="flex flex-col w-full">
              <h1 className="text-[#07090B] md:text-4xl sm:text-2xl text-2xl text-center mb-4 font-semibold">
                {`Powering Brands That Moved The Market`}
              </h1>
              <ClientLogos />
            </div>
          </div>
        </div>


        {/* Partners Logos Section */}
        <div className="flex w-full bg-[#191919] py-10">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-center items-center w-full px-6 md:px-12 gap-4 md:gap-0">
              <h3 className="text-white md:text-4xl sm:text-2xl text-2xl text-center mb-4 font-semibold">
                {`Our Shopify Partners`}
              </h3>
              <Partners />
            </div>
          </div>
        </div>


        {/* Our Services Section */}
        <div className="flex w-full flex-col bg-white ">
          <div className="container">
            <div className="flex items-center gap-4 py-10 md:flex-row flex-col">
            <h3 className="text-[#07090B] md:text-4xl sm:text-2xl text-2xl text-center font-semibold">
                {`What we do?`}
              </h3>
              <p className="flex flex-1 text-base text-[#07090B] font-clashRegular">
                At Shopify Geeks, our team specializes in a wide range of
                services designed to elevate your online store. Whether you need
                a stunning new theme, custom functionality, or a seamless
                migration to Shopify, we’ve got you covered. Explore our core
                services below and discover how we can help your business grow.
              </p>
            </div>
          </div>
          <ServicesExpendableDetail />
        </div>

        {/* Contact Us Section */}
        <ContactUs />
      </div>
    </PreloaderWrapper>
  );
}
