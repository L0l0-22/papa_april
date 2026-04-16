"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";
import { PiCurrencyCircleDollar } from "react-icons/pi";

export default function Rewards() {
  const router = useRouter();

  return (
    <div className="bg-white border border-gray-300 rounded-3xl p-8 md:p-12 lg:p-16 w-full max-w-6xl mx-auto">
      
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-8 mb-14 items-center lg:items-start text-center lg:text-left">
        
        {/* Logo */}
        <div className="relative w-[120px] h-[120px] lg:w-[180px] lg:h-[142px]">
          <Image
            src="/logo.png"
            alt="Papa John's Logo"
            fill
            className="object-contain"
          />
        </div>

        <h2 className="text-xl lg:text-3xl font-extrabold text-black uppercase max-w-4xl lg:leading-normal lg:mt-12">
          Start earning points to redeem towards your favorite menu items
        </h2>
      </div>

      {/* Middle Section */}
      <div className="flex flex-col xl:flex-row gap-12 lg:gap-20 mb-14 items-center">
        
        {/* Left */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 lg:gap-20">
          
          <div className="flex flex-col items-center space-y-2">
            <LiaMoneyBillWaveAltSolid className="text-black w-20 sm:w-28 md:w-32 lg:w-36 xl:w-[133px]" />
            <p className="font-bold text-black text-lg sm:text-xl text-center">
              1 EGP Spent
            </p>
          </div>

          <div className="text-4xl sm:text-5xl font-bold">=</div>

          <div className="flex flex-col items-center space-y-2">
            <div className="relative w-20 sm:w-28 md:w-32 lg:w-36 xl:w-[133px] h-20 sm:h-28 md:h-32 lg:h-36 xl:h-[133px]">
              <Image
                src="/star.png"
                alt="star"
                fill
                className="object-contain"
              />
            </div>
            <p className="font-bold text-black text-lg sm:text-xl text-center">
              1 point
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:block border-l border-gray-400 h-20" />

        {/* Right */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 lg:gap-20">
          
          <div className="flex flex-col items-center space-y-2">
            <div className="relative w-20 sm:w-28 md:w-32 lg:w-36 xl:w-[133px] h-20 sm:h-28 md:h-32 lg:h-36 xl:h-[133px]">
              <Image
                src="/star.png"
                alt="star"
                fill
                className="object-contain"
              />
            </div>
            <p className="font-bold text-black text-lg sm:text-xl text-center">
              1 point
            </p>
          </div>

          <div className="text-4xl sm:text-5xl font-bold">=</div>

          <div className="flex flex-col items-center space-y-2">
            <PiCurrencyCircleDollar className="text-black w-20 sm:w-28 md:w-32 lg:w-36 xl:w-[133px]" />
            <p className="font-bold text-black text-lg sm:text-xl text-center">
              2 papa dough
            </p>
          </div>
        </div>

      </div>

      {/* Links */}
      <div className="text-sm text-mainGreen flex justify-center gap-2 mb-6 underline underline-offset-2">
        <a href="/rewards-faq">Rewards FAQs</a>
        <span>|</span>
        <a href="/rewards-terms">Rewards Terms</a>
      </div>

      {/* Button */}
      <div className="flex items-center justify-center">
        <button
          onClick={() => router.push("/menu")}
          className="bg-lightYellow px-12 py-4 font-medium text-base rounded-full hover:bg-transparent border border-black uppercase"
        >
          Place your first order and earn points
        </button>
      </div>

    </div>
  );
}