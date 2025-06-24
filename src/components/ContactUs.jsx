"use client";
import Spline from "@splinetool/react-spline";

export default function ContactUs() {
  return (
    <div className="flex min-h-[768px] bg-black md:flex-row flex-col relative" id="contact-us">
      <div className="md:flex hidden min-h-[768px] absolute inset-0">
        <div className="flex flex-1 bg-black"></div>
        <div className="flex flex-1"></div>
      </div>
      <div className="md:container p-0 max-w-full ">
        <div className="flex md:absolute static md:flex-row flex-col">
          <div className="flex flex-1 flex-col py-20 px-12 sm:px-0 gap-10 md:min-h-[600px] sm:h-auto relative overflow-hidden">

            <div className="flex flex-col items-start gap-10 text-start relative z-10">
              <h1 className="md:text-4xl sm:text-2xl text-2xl text-white font-semibold">
                Let’s Build
                <br /> Something Better — Together.
              </h1>
              <p className="text-white w-full bg-transparent border-b border-solid text-md font-clashRegular">
                Book your free consultation. No pressure. No commitments. Just clarity.
              </p>
            </div>

            <div
              className={`
        flex items-center justify-end relative
        ${/* desktop: normal inline positioning */ ""}
        md:static md:flex-1 md:w-auto md:h-auto
        ${/* mobile: background effect */ ""}
        max-md:absolute max-md:inset-0 max-md:z-0 max-md:pointer-events-none max-md:w-[400px] max-md:h-[300px]
      `}
            >
              <Spline scene="/contact.splinecode" />
            </div>
          </div>

          <div className="flex flex-[1.2] bg-[#2D4EFF] h-[768px] w-full">
            <form className="flex flex-col w-full md:py-20 sm:py-12 p-8 gap-6">
              <div className="flex w-full">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="text-white placeholder-white w-full bg-transparent border-b border-solid border-[#B7B9B3] py-3 text-xl font-clashRegular"
                />
              </div>
              <div className="flex w-full">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="text-white placeholder-white w-full bg-transparent border-b border-solid border-[#B7B9B3] py-3 text-xl font-clashRegular"
                />
              </div>
              <div className="flex w-full">
                <textarea
                  type="email"
                  placeholder="Your Message"
                  className="text-white min-h-48 max-h-48 placeholder-white w-full bg-transparent border-b border-solid border-[#B7B9B3] py-3 text-xl font-clashRegular"
                />
              </div>
              <button className="text-[#4462FF] text-base font-clashRegular py-3 px-8 bg-white w-max border border-solid border-transparent hover:border-[#4462FF] anim">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
