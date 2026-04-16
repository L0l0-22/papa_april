"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Feedback({ data }) {
  const router = useRouter();

  return (
    <div className="bg-biege p-8 rounded-3xl shadow-xl">
      <div className="flex flex-col xl:flex-row items-center justify-between gap-12 md:mx-9">
        
        {/* Image */}
        <div className="w-full xl:w-1/2 flex justify-center xl:justify-start">
          <div className="relative w-[300px] md:w-[400px] h-[300px] md:h-[430px]">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Content */}
        <div className="w-full xl:w-1/2 mb-10 xl:mb-0 flex flex-col items-center xl:items-start">
          <h2 className="text-2xl xl:text-4xl mb-8 font-potta">
            {data.title}
          </h2>

          <p className="leading-7 max-w-2xl mb-8 text-xl text-center xl:text-left">
            {data.description}
          </p>

          {data.button && (
            <button
              onClick={() => router.push(data.navigateTo)}
              className="bg-lightYellow px-16 py-3 font-semibold text-base rounded-full hover:bg-transparent border border-black uppercase"
            >
              {data.button}
            </button>
          )}
        </div>

      </div>
    </div>
  );
}