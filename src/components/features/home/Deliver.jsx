"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Deliver() {
  const router = useRouter();

  return (
    <div className="bg-biege p-8 rounded-3xl shadow-xl">
      <div className="flex flex-col lg:flex-row items-center justify-center md:mx-20">
        
        {/* Text Section */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
          <h2 className="text-2xl lg:text-4xl mb-8 font-potta">
            We Deliver Your Pizza With Zero Contact
          </h2>

          <p className="leading-7 max-w-2xl mb-8 text-lg">
            We’re making sure you’re safe, from the moment you place your order
            to when you receive it. Pre-pay online and we’ll leave your order at
            the door and move back so you can collect it.
          </p>

          <button
            onClick={() => router.push("/contact-free-delivery")}
            className="bg-lightYellow px-12 py-2 font-medium rounded-full hover:bg-transparent border border-black uppercase"
          >
            FIND OUT HOW WE KEEPING YOU SAFE
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]">
            <Image
              src="/delivery.png"
              alt="Pizza Delivery"
              fill
              className="object-contain"
            />
          </div>
        </div>

      </div>
    </div>
  );
}