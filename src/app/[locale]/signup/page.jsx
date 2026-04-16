"use client";

import SignForm from "@/Auth/SignForm";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      
      {/* Left Image Section */}
      <div className="w-full md:w-1/2 relative">
        <div className="relative w-full h-[60vh] md:h-screen">
          <Image
            src="/signup.jpg"
            alt="Signup"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        {/* Text */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-4 z-20">
          <h1 className="font-potta text-white rounded-md px-4 py-2 max-w-[90%] sm:max-w-[80%] lg:max-w-[70%]
            text-xl sm:text-2xl md:text-4xl lg:text-[46px] leading-snug md:leading-[60px] lg:leading-[80px] tracking-wider">
            Hungry? Check Out Papa Johns Near You And Taste Our Signature Pizzas!
          </h1>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center px-4 py-8 md:px-0 md:py-0 relative overflow-hidden">
        
        {/* Background Decoration */}
        <div className="absolute -bottom-52 -right-24 w-[300px] h-[300px] z-10">
          <Image
            src="/green.png"
            alt="Decoration"
            fill
            className="object-contain"
          />
        </div>

        <SignForm />
      </div>

    </div>
  );
}