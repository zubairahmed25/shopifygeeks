

"use client";
import React from "react";


const FreeConsult = () => {
  return (
    <div>    
      <div className="relative flex w-full justify-center mb-10">
      <button className="custom-gradient text-white py-3 px-12 rounded-lg font-clashMedium text-base"  onClick={() => window.location.href = 'https://calendly.com/shopifygeeks'}>
Book Free Consultation
</button>
      </div>
     </div>
  );
};

export default FreeConsult;
