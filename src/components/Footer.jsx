import ImageBox from "@/components/ImageBox";
import FooterSocial from "@/components/FooterSocial";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-[#191919] text-white">
      <div className="border-b border-solid border-[#5A5A5A]/40 w-full py-16">
        <p className="text-white lg:text-6xl md:text-5xl sm:text-4xl text-2xl font-semibold text-center">
          hello@shopifygeeks.io
        </p>
      </div>
      <div className="container">
        <div className="flex md:gap-4 gap-8 py-16 md:flex-row flex-col">
          <div className="flex flex-1 flex-col gap-12 md:items-start items-center">
            <ImageBox
              src="/logo.svg"
              width={130}
              height={40}
              alt="Company Logo"
            />
            <div className="md:flex hidden">
              <FooterSocial />
            </div>
          </div>
          <div className="md:hidden flex items-center justify-center">
            <FooterSocial />
          </div>
        </div>
      </div>
    </footer>
  );
}
