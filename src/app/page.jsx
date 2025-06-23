import VideoPlayer from "@/components/VideoPlayer";
import ClientLogos from "@/components/ClientLogos";
import Partners from "@/components/Partners";
import ServicesExpendableDetail from "@/components/ServicesExpendableDetail";
import ContactUs from "@/components/ContactUs";
import HeroSection from "@/components/HeroSection";
import { ArrowUpIcon } from "@/icons";
import PreloaderWrapper from "./PreLoaderWrapper";

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
              <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold text-white leading-tight">
                Code. Design. Impact.
              </h1>
              <h4 className="text-white text-xl font-clashRegular text-end sm:text-center">
                We create striking, high-performance
                <br className="sm:block hidden" />
                websites that turn ideas into reality.
              </h4>
            </div>
          </div>

          <HeroSection />
        </div>

        {/* Video Section */}
        <div className="flex items-center justify-center w-full border-t border-b border-solid border-white">
          <div className="container">
            <div className="flex items-center justify-center gap-2 py-3">
              <h6 className="text-white text-md font-clashLight">
                Discover our process
              </h6>
              <div className="flex items-center justify-center h-4 w-4">
                <ArrowUpIcon />
              </div>


            </div>
          </div>

        </div>

        <div id="about-us"> <VideoPlayer src="/video.ts" /></div>

        {/* Clients Logos Section */}
        <div className="flex w-full bg-white py-10">
          <div className="container">
            <div className="flex flex-col w-full">
              <h3 className="text-[#07090B] text-base font-clashLight font-bold mb-12 text-center">
                {`POWERING BRANDS THAT MOVED THE MARKET`}
              </h3>
              <ClientLogos />
            </div>
          </div>
        </div>


        {/* Partners Logos Section */}
        <div className="flex w-full bg-black">
          <div className="container">
            <div className="flex flex-row justify-center items-center w-full px-6 md:px-12 ">
              <h3 className="text-white text-base font-clashLight font-bold text-center pr-[25px]">
                {`OUR SHOPIFY PARTNERS`}
              </h3>
              <Partners />
            </div>
          </div>
        </div>

        {/* Our Services Section */}
        <div className="flex w-full flex-col bg-white ">
          <div className="container">
            <div className="flex items-center gap-10 py-20 md:flex-row flex-col">
              <h1 className="flex flex-1 text-6xl text-[#07090B] font-bold">
                Our Services
              </h1>
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
