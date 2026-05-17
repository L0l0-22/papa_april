"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function RewardFrame() {
  const router = useRouter();

  return (
    <div className="relative mx-auto">
      
      {/* Background Image */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
        <Image
          src="/reward.png"
          alt="Reward Banner"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-20 text-center lg:text-left px-4">
        
        {/* Logo */}
        <div className="relative w-[120px] h-[120px] lg:w-[180px] lg:h-[142px]">
          <Image
            src="/logo.png"
            alt="Papa John's Logo"
            fill
            className="object-contain"
          />
        </div>

        {/* Text + Buttons */}
        <div className="text-white lg:space-y-9">
          <h2 className="text-2xl lg:text-4xl font-extrabold mb-2">
            Eat Pizza. Earn Papa Johns Rewards. <br /> You're Welcome
          </h2>

          <div className="flex gap-2 justify-center lg:justify-start mb-6 underline underline-offset-2 text-lg lg:text-xl font-medium">
            <a href="#">Rewards FAQs</a>
            <span>|</span>
            <a href="#">Rewards Terms</a>
          </div>

          <div className="flex gap-6 justify-center lg:justify-start flex-wrap">
            
            <button
              onClick={() => router.push("/signup")}
              className="bg-lightYellow px-9 py-3 font-semibold text-base rounded-full hover:bg-transparent border border-black text-black hover:border-white hover:text-white uppercase"
            >
              JOIN NOW
            </button>

            <button
              onClick={() => router.push("/signin")}
              className="hover:bg-lightYellow px-9 py-3 font-semibold text-base rounded-full bg-transparent border hover:border-black hover:text-black border-white text-white uppercase"
            >
              SIGN IN
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}