"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function CheckoutModal({ isOpen, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
    >
      <div
        ref={modalRef}
        className="w-full max-w-xs md:max-w-2xl lg:max-w-[80rem] lg:max-h-[85vh] relative overflow-hidden"
        onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
      >
        <div className="max-h-[85vh] px-6 py-10 lg:px-12 lg:pr-[90px] flex flex-col justify-center items-center gap-12">
          
          {/* Image */}
          <div className="relative w-60 sm:w-72 md:w-80 lg:w-96 h-60 sm:h-72 md:h-80 lg:h-96">
            <Image
              src="/done.png"
              alt="Done"
              fill
              className="object-contain"
            />
          </div>

          {/* Text */}
          <div className="max-w-2xl">
            <p className="font-potta text-biege text-2xl text-center">
              THANK YOU FOR CHOOSING PAPA JOHNS
              <br />
              YOUR ORDER WILL BE READY IN 60 MIN
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}