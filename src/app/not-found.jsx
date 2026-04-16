'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Support from "../components/Support";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiClock, FiPhone } from "react-icons/fi";

export default function NotFound() {

  const supportData = {
    heading: 'egypt - cairo , maadi',
    buttonText: 'contact us now!',
    image: "/support.png",
    navigateTo: "/contact",
    details: [
      {
        icon: <HiOutlineLocationMarker size={26} />,
        text: 'EGYPT – CAIRO , MAADI',
      },
      {
        icon: <FiPhone size={26} />,
        text: '8003047272',
      },
      {
        icon: <FiClock size={26} />,
        text: '11:00 AM – 04:00 AM',
      },
    ],
  };

  return (
    <div className="w-full max-w-[90%] mx-auto flex flex-col gap-24 mt-12 mb-32">

      <div className="flex items-center justify-center flex-col gap-12">

        {/* Image */}
        <div className="relative w-full max-w-[900px] h-[300px] md:h-[500px] lg:h-[585px]">
          <Image
            src="/bro.png"
            alt="Not Found"
            fill
            className="object-contain"
          />
        </div>

        {/* Text */}
        <p className="text-lightGreen font-potta text-2xl md:text-4xl text-center">
          Page is not found, please try again!
        </p>

        {/* Optional button */}
        <Link
          href="/"
          className="px-6 py-2 border rounded-full border-black hover:bg-lightYellow"
        >
          Go Home
        </Link>

      </div>

      <Support data={supportData} />

    </div>
  );
}