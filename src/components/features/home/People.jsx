"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";

export default function People() {
  const router = useRouter();

  return (
    <div className="bg-biege relative overflow-visible px-6 md:px-16 xl:px-56 py-20 lg:py-0">

      {/* Center Image */}
      <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="relative w-[300px] h-[700px]">
          <Image
            src="/mobile.png"
            alt="Mobile App"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="relative z-20 flex flex-col lg:flex-row justify-between items-center gap-16">
        
        {/* Left */}
        <div className="w-full lg:w-1/3 text-center lg:text-left space-y-12">
          <h2 className="text-2xl font-potta">WE LOVE OUR PEOPLE</h2>

          <div className="flex gap-4 justify-center lg:justify-start text-mainGreen text-xl">
            {[FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram, TfiYoutube].map(
              (Icon, index) => (
                <div
                  key={index}
                  className="border border-mainGreen rounded-full p-2 hover:bg-mainGreen hover:text-white transition cursor-pointer"
                >
                  <Icon />
                </div>
              )
            )}
          </div>
        </div>

        {/* Spacer */}
        <div className="w-full lg:w-1/3 h-[500px] hidden lg:block" />

        {/* Right */}
        <div className="w-full lg:w-1/3 text-center lg:text-left space-y-12">
          <h3 className="text-xl">
            Our fundamental belief is simple.
          </h3>

          <p className="text-xl leading-relaxed text-gray-800">
            Take care of your people. Encourage them, support them and train them.
            Give them the best ingredients and the best equipment and you will make superior quality pizza.
          </p>

          <div className="flex justify-center items-center">
            <button
              onClick={() => router.push("/about")}
              className="bg-lightYellow px-16 py-3 font-medium rounded-full hover:bg-transparent border border-black uppercase"
            >
              KNOW ABOUT US
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}