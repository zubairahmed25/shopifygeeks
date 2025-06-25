"use client";
import Spline from "@splinetool/react-spline";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import BeforeAfterSlider from "./BeforeAfterSlider";

export default function ContactUs() {

  emailjs.init({
    publicKey: 'mIIEoYoxBPnRy7HT7',
    limitRate: {
      // Set the limit rate for the application
      id: 'app',
      // Allow 1 request per 10s
      throttle: 10000,
    },
  }); 

  const form = useRef();
  const [showDialog, setShowDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_o6i217s', 'template_k84rjqj', form.current, {
        publicKey: 'mIIEoYoxBPnRy7HT7',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setDialogMessage("Thank you for trusting our geeks with your business. Your Shopify transformation starts now! Expect to hear from us within 24 hours");
          setIsSuccess(true);
          setShowDialog(true);
          // Reset form
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setDialogMessage("Looks like your requst did not go through. Kindly send us an email at hello@shopifygeeks.io so we can assist you further.");
          setIsSuccess(false);
          setShowDialog(true);
        },
      );
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  return (
    <>
      <div className="flex min-h-[768px] bg-[#191919] md:flex-row flex-col relative" id="contact-us">
        <div className="md:flex hidden min-h-[768px] absolute inset-0">
          <div className="flex flex-1 bg-[#191919]"></div>
          <div className="flex flex-1"></div>
        </div>
        <div className="md:container p-0 max-w-full ">
          <div className="flex md:absolute static md:flex-row flex-col">
            <div className="flex flex-1 flex-col py-20 px-12 sm:px-0 gap-10 md:min-h-[600px] sm:h-auto relative overflow-hidden">

              <div className="flex flex-col items-start gap-10 text-start relative z-10">
                <h1 className="md:text-4xl sm:text-2xl text-2xl text-white font-semibold">
                  Let's Build
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
          max-md:absolute max-md:inset-0 max-md:z-0 max-md:pointer-events-none max-md:w-[400px] max-md:h-[300px] max-md:opacity-50
        `}
              >
                <Spline scene="/contact.splinecode" />
              </div>
            </div>

            <div className="flex flex-[1.2] bg-[#2D4EFF] h-[768px] w-full">
              <form className="flex flex-col w-full md:py-20 sm:py-12 p-8 gap-6" ref={form} onSubmit={sendEmail}>
                <div className="flex w-full">
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="user_name"
                    className="text-white placeholder-white w-full bg-transparent border-b border-solid border-[#B7B9B3] py-3 text-xl font-clashRegular"
                  />
                </div>
                <div className="flex w-full">
                  <input
                    type="email"
                    placeholder="Your Email"
                    name="user_email"
                    className="text-white placeholder-white w-full bg-transparent border-b border-solid border-[#B7B9B3] py-3 text-xl font-clashRegular"
                  />
                </div>
                <div className="flex w-full">
                  <textarea
                    type="text"
                    placeholder="Your Message"
                    name="message"
                    className="text-white min-h-48 max-h-48 placeholder-white w-full bg-transparent border-b border-solid border-[#B7B9B3] py-3 text-xl font-clashRegular"
                  />
                </div>
                <button type="submit" className="text-[#4462FF] text-base font-clashRegular py-3 px-8 bg-white w-max border border-solid border-transparent hover:border-[#4462FF] anim">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Dialog Modal */}
      {showDialog && (
        <div className="fixed inset-0 bg-[#191919] bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4 relative">
            {/* Close button */}
            <button
              onClick={closeDialog}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
            >
              ×
            </button>
            
            {/* Dialog content */}
            <div className="text-center">
              {isSuccess ? (
                <div className="text-green-600 text-4xl mb-4">✓</div>
              ) : (
                <div className="text-red-600 text-4xl mb-4">!</div>
              )}
              <p className="text-gray-800 text-lg font-medium">
                {dialogMessage}
              </p>
            </div>
          </div>
        </div>
      )}
  

      
    </>
  );
}