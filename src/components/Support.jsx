"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";

export default function Support({ data }) {
  const router = useRouter();

  return (
    <div className="bg-biege p-8 rounded-3xl shadow-xl">
      <div className="flex flex-col lg:flex-row items-center justify-center mx-4 md:mx-10 lg:mx-20">
        
        {/* Left */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0 flex flex-col items-center lg:items-start">
          
          <h2 className="text-3xl font-bold mb-8 text-mainGreen uppercase">
            {data.heading}
          </h2>

          <div className="py-4 px-6 flex flex-col lg:flex-row items-start lg:items-center justify-between max-w-xl gap-4 lg:gap-6 mb-8 lg:flex-wrap">
            {data.details.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-mainGreen">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          {/* Button */}
          {data.buttonText && (
            <button
              onClick={() => router.push(data.navigateTo)}
              className="bg-lightYellow px-12 py-2 font-medium rounded-full hover:bg-transparent border border-black uppercase"
            >
              {data.buttonText}
            </button>
          )}

          {/* Link */}
          {data.link && (
            <p className="text-mainGreen text-xl font-medium flex flex-col xl:flex-row xl:items-center gap-2 mt-6">
              Do you have any problem?
              
              <Link
                href="/contact"
                className="text-black font-bold flex items-center gap-2"
              >
                Contact Us
                <FaArrowRight
                  className="bg-darkRed text-white p-2 rounded-full"
                  size={32}
                />
              </Link>
            </p>
          )}
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-[250px] md:w-[320px] lg:w-[382px] h-[250px] md:h-[320px] lg:h-[382px]">
            <Image
              src={data.image}
              alt="Support"
              fill
              className="object-contain"
            />
          </div>
        </div>

      </div>
    </div>
  );
}