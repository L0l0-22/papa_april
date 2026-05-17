"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function CartModal({ isOpen, onClose, onCheckout }) {
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
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="w-full max-w-xs md:max-w-2xl lg:max-w-[80rem] lg:max-h-[85vh] relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-h-[85vh] px-6 py-10 lg:px-12 lg:pr-[90px] flex flex-col justify-center items-center gap-24 rounded-2xl">
          
          {/* Image */}
          <div className="relative w-60 sm:w-72 md:w-80 lg:w-96 h-60 sm:h-72 md:h-80 lg:h-96">
            <Image
              src="/done.png"
              alt="Done"
              fill
              className="object-contain"
            />
          </div>

          {/* Content */}
          <div className="bg-biege px-20 py-12 rounded-3xl max-w-3xl text-center">
            <p className="font-potta text-mainGreen text-2xl">
              THANK YOU FOR CHOOSING PAPA JOHN’S
              <br />
              YOUR ORDER WILL BE READY IN 60 MIN
            </p>

            <div className="flex justify-between items-center mt-12 gap-24">
              <button
                onClick={onClose}
                className="bg-mainRed px-8 w-full py-2 font-semibold text-sm rounded-full hover:bg-transparent border border-black uppercase transition"
              >
                Cancel
              </button>

              <button
                onClick={onCheckout}
                className="bg-lightYellow px-8 w-full py-2 font-semibold text-sm rounded-full hover:bg-transparent border border-black uppercase transition"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}