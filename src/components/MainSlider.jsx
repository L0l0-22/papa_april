"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { IoMdAdd } from "react-icons/io";

import "swiper/css";
import "swiper/css/pagination";

import AddToCartModal from "./steps/AddToCartModal";

const slidesData = [
  {
    image: "/Rectangle1.png",
    title: "CHEESY BURGER PIZZA",
    size: "Medium Original",
    price: "800",
    limited: true,
  },
  {
    image: "/Rectangle2.png",
    title: "SPICY PEPPERONI PIZZA",
    size: "Large Thin Crust",
    price: "950",
    limited: true,
  },
  {
    image: "/Rectangle1.png",
    title: "CHICKEN BBQ PIZZA",
    size: "Small Stuffed Crust",
    price: "700",
    limited: true,
  },
  {
    image: "/Rectangle2.png",
    title: "VEGGIE SUPREME PIZZA",
    size: "Medium Original",
    price: "850",
    limited: false,
  },
];

export default function MainSlider() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {/* Pagination Styling */}
      <style>{`
        .swiper-pagination {
          bottom: 0px !important;
          position: relative !important;
          margin-top: 2rem;
          text-align: center;
        }
        .swiper-pagination-bullet {
          background-color: #ccc;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background-color: #000 !important;
        }
      `}</style>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={2}
        loop
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
      >
        {slidesData.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-[479.25px] rounded-lg overflow-hidden">
              
              {/* Image */}
              <Image
                src={slide.image}
                alt={`Slide ${i + 1}`}
                fill
                className="object-cover rounded-lg"
              />

              {/* Card */}
              <div className="absolute bottom-5 left-5 bg-biege px-5 py-4 rounded-xl shadow-md max-w-[80%] w-[270px] flex flex-col gap-3">
                
                {/* Add Button */}
                <div
                  className="absolute -top-6 right-0 w-9 h-9 bg-lightYellow rounded-full flex items-center justify-center shadow cursor-pointer"
                  onClick={() => setShowModal(true)}
                >
                  <IoMdAdd className="text-mainGreen" size={28} />
                </div>

                {/* Badge */}
                {slide.limited && (
                  <div className="bg-mainRed text-white text-xs font-bold px-3 py-1 rounded-lg w-fit">
                    LIMITED TIME
                  </div>
                )}

                {/* Title */}
                <h3 className="text-md font-extrabold text-mainGreen uppercase">
                  {slide.title}
                </h3>

                {/* Info */}
                <div className="flex items-center justify-between">
                  {slide.size && (
                    <p className="text-sm font-bold">{slide.size}</p>
                  )}

                  {slide.price && (
                    <p className="text-sm font-bold">
                      <span className="text-black">From </span>
                      <span className="text-mainRed font-extrabold">
                        {slide.price}
                      </span>
                      <span className="text-[10px] text-mainRed align-top">
                        EGP
                      </span>
                    </p>
                  )}
                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      <AddToCartModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
}