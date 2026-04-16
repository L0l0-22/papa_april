'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import CustomStepper from '../CustomStepper';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import { useLocale } from 'next-intl';

export default function AddToCartModal({ isOpen, onClose }) {
  const locale = useLocale();
  const modalRef = useRef(null);
  const [step, setStep] = useState(0);
  const router = useRouter();

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Scroll on step change
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [step]);

  // Lock body scroll
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }

    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = 'auto';
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">

      <div
        ref={modalRef}
        className="bg-white rounded-3xl w-full max-w-xs md:max-w-2xl lg:max-w-[80rem] lg:max-h-[85vh] relative overflow-hidden"
      >

        <div className="overflow-y-auto max-h-[85vh] px-6 py-10 lg:px-12 lg:pr-[90px] custom-scroll flex flex-col lg:flex-row justify-between">

          {/* Left side */}
          <div className="w-full lg:w-[30%] flex justify-center items-center flex-col text-center">

            <div className="relative w-60 sm:w-72 md:w-80 lg:max-w-96 h-60 sm:h-72 md:h-80">
              <Image
                src="/pizzaCircle.png"
                alt="Pizza"
                fill
                className="object-contain"
              />
            </div>

            <div className="mt-5 lg:mt-7">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Master’s Choice
              </h3>

              <p className="text-sm md:text-xl font-normal">
                8`Pizza + Potato Wedges + 3 chocolate scrolls + 1 soft drink
              </p>
            </div>
          </div>

          {/* Right side */}
          <div className="w-full lg:w-[70%] mt-8 lg:mt-0">

            <CustomStepper currentStep={step} totalSteps={4} />

            <div className="mt-6 lg:mt-10 lg:ml-20">

              {step === 0 && (
                <Step1 onNext={() => setStep(1)} />
              )}

              {step === 1 && (
                <Step2
                  onBack={() => setStep(0)}
                  onNext={() => setStep(2)}
                />
              )}

              {step === 2 && (
                <Step3
                  onBack={() => setStep(1)}
                  onNext={() => setStep(3)}
                />
              )}

              {step === 3 && (
                <Step4
                  onBack={() => setStep(2)}
                  onNext={() => {
                    onClose();
                    router.push(`/${locale}/cart`); 
                  }}
                />
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}