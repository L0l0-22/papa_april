"use client";

import Image from "next/image";

export default function DownloadApp({ isOffers = true }) {
  return (
    <div className="py-6 md:py-12 bg-biege">
      
      {isOffers ? (
        <div className="bg-biege px-6 py-20 lg:py-0">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            
            {/* Text */}
            <div className="w-full lg:w-1/2 lg:ml-14 space-y-12 flex flex-col justify-center items-center lg:items-start">
              <h2 className="text-2xl md:text-4xl font-bold">
                Download Our App
              </h2>

              <p className="text-lg font-normal text-center lg:text-left">
                Get our best offers direct to your device and order <br />
                Papa Johns wherever you go.
              </p>

              <div className="relative w-[180px] h-[80px]">
                <Image
                  src="/appStore.png"
                  alt="App Store"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-[300px] md:w-[400px] lg:w-[500px] h-[300px] md:h-[400px] lg:h-[500px]">
                <Image
                  src="/mobiles.png"
                  alt="Mobile App"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

          </div>
        </div>
      ) : (
        <div className="bg-biege relative overflow-visible px-6 sm:px-10 md:px-16 xl:px-56 py-20">
          
          {/* Floating Phone (desktop only) */}
          <div className="hidden lg:block absolute right-0 lg:right-[15%] top-1/2 transform -translate-y-1/2 z-10">
            <div className="relative w-[300px] xl:w-[400px] h-[500px] xl:h-[700px]">
              <Image
                src="/mobile.png"
                alt="Mobile App"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="relative z-20 flex flex-col lg:flex-row justify-between items-center gap-12">
            
            {/* Text */}
            <div className="w-full lg:w-1/2 lg:ml-14 text-center lg:text-left space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Download Our App
              </h2>

              <p className="text-lg font-normal">
                Get our best offers direct to your device and order <br className="hidden sm:block" />
                Papa Johns wherever you go.
              </p>

              <div className="relative w-[150px] md:w-[180px] h-[60px] md:h-[80px] mx-auto lg:mx-0">
                <Image
                  src="/appStore.png"
                  alt="App Store"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Mobile Image (mobile only) */}
            <div className="lg:hidden w-full flex justify-center">
              <div className="relative w-[250px] h-[400px]">
                <Image
                  src="/mobile.png"
                  alt="Mobile App"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}