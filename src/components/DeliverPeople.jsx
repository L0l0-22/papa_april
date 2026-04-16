"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function DeliverPeople() {
  const router = useRouter();

  return (
    <div className="flex flex-col md:flex-row items-center justify-between">
      
      {/* Text Section */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0">
        <h2 className="text-2xl md:text-4xl mb-9 font-potta">
          We Love Our People
        </h2>

        <p className="text-gray-700 leading-7 max-w-2xl mb-4">
          Our fundamental belief is simple.
        </p>

        <p className="text-gray-700 leading-7 max-w-2xl mb-4">
          Take care of your people. Encourage them, support them and train them.
          Give them the best ingredients and the best equipment and you will
          make superior quality pizza.
        </p>

        <p className="text-gray-700 leading-7 max-w-2xl mb-12">
          This is what drives us every day and it's why we invest more than many
          others in the industry in our effort to consistently deliver better
          pizza and better service.
        </p>

        <button
          onClick={() => router.push("/about")}
          className="bg-lightYellow px-12 py-2 font-medium rounded-full hover:bg-transparent border border-black uppercase"
        >
          KNOW ABOUT US
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-end">
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
          <Image
            src="/circle3.png"
            alt="Pizza Ingredients"
            fill
            className="object-contain"
          />
        </div>
      </div>

    </div>
  );
}