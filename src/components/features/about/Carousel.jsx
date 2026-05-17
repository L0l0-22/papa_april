"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Carousel({ title, items }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [navigationReady, setNavigationReady] = useState(false);

  useEffect(() => {
    setNavigationReady(true);
  }, []);

  return (
    <div className="w-full relative">
      <div className="relative max-w-[85%] mx-auto">
        <h2 className="text-3xl font-bold mb-8">{title}</h2>

        {navigationReady && (
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={5}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 6 },
            }}
            className="h-44"
          >
            {items.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative w-full h-32">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <p className="text-center py-2 text-sm font-medium">
                    {item.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Navigation Buttons */}
        <button
          ref={prevRef}
          className="absolute -left-16 top-1/2 -translate-y-1/2 z-10 bg-mainGreen text-biege rounded-full p-3 shadow-lg hover:bg-biege hover:text-mainGreen"
        >
          <FaChevronLeft size={20} />
        </button>

        <button
          ref={nextRef}
          className="absolute -right-16 top-1/2 -translate-y-1/2 z-10 bg-mainGreen text-biege rounded-full p-3 shadow-lg hover:bg-biege hover:text-mainGreen"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}