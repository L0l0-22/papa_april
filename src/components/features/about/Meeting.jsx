"use client";

import Image from "next/image";

export default function Meeting() {
  return (
    <div className="relative max-w-6xl mx-auto px-4">
      
      {/* Beige box */}
      <div className="bg-biege rounded-2xl p-12 pb-24">
        <p className="text-mainGreen font-semibold text-lg md:text-xl leading-relaxed">
          We know the more you put onto something, the more you get out. So, from
          the first Papa John's pizza, made in a broom closet in Indiana USA – to
          now more than 5,000 locations in 45 countries and territories around
          the world – we've always used better ingredients to make better pizza.
        </p>
      </div>

      {/* Floating Image */}
      <div className="absolute left-1/2 xl:left-[52%] transform -translate-x-1/2 w-full px-6 -bottom-32">
        <div className="relative w-full max-w-[1046px] h-[300px] md:h-[384px] mx-auto">
          <Image
            src="/meeting.jpg"
            alt="Meeting"
            fill
            className="rounded-2xl object-cover"
            priority
          />
        </div>
      </div>

      {/* Spacer */}
      <div className="h-48"></div>
    </div>
  );
}