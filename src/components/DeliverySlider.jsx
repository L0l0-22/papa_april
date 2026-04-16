"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const slidesData = [
  { image: "/find1.png" },
  { image: "/delivery1.jpg" },
  { image: "/delivery2.png" },
  { image: "/find1.png" },
  { image: "/delivery1.jpg" },
];

export default function DeliverySlider({ slidesList = slidesData }) {
  return (
    <div className="delivery-slider px-4 overflow-x-visible">
      <Swiper
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={"auto"}
        centeredSlides={true}
        loop={true}
        initialSlide={1}
      >
        {slidesList.map((slide, i) => (
          <SwiperSlide
            key={i}
            className="!w-[200px] md:!w-[250px] lg:!w-[1000px] transition-all duration-300"
          >
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-md">
              <Image
                src={slide.image}
                alt={`Slide ${i + 1}`}
                fill
                className="object-cover rounded-3xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}