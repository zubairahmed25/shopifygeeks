"use client";

import React, { useState, useRef } from "react";

const VideoPlayer = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef(null);

  const handleInitialPlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setHasStarted(true);
    }
  };

  return (
    <div className="md:min-h-[500px] min-h-[300px] bg-[#191919] py-10">
      <div className="container">
        


      <div className="flex flex-col md:flex-row justify-center items-center w-full px-6 md:px-12 gap-4 md:gap-0">
              <h3 className="text-white md:text-4xl sm:text-2xl text-2xl text-center mb-4 font-semibold">
                {`Discover Our Process`}
              </h3>
              </div>





        <div className="w-full h-auto flex justify-center items-center md:py-20">
          <div className="relative">
            <video
              ref={videoRef}
              className="sm:min-w-96 min-w-full sm:min-h-96 min-h-full h-full w-full rounded-lg shadow-lg"
              src="https://www.dropbox.com/scl/fi/33rti7g98s7grmxldalet/Video-1-Horizontal.mp4?rlkey=vypjb58iv1j2fhc2q2emsvhsw&st=iacuhnpu&raw=1"
              loop
              playsInline
              controls
              poster="/video-thumbnail.png"
            />

            {!hasStarted && (
              <div
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                onClick={handleInitialPlay}
              >
                <div className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
