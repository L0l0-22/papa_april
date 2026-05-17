'use client';

import React from 'react';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function PickStep({ onBack }) {
  const router = useRouter();
  const locale = useLocale();

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-[32px] border border-gray-100 shadow-sm text-center font-PapaSans animate-fadeIn">
      <div className="flex justify-center mb-6">
        <IoMdCheckmarkCircle className="text-mainGreen animate-bounce" size={80} />
      </div>
      <h3 className="text-3xl font-extrabold text-mainGreen mb-4">You're All Set!</h3>
      <p className="text-gray-600 mb-8 max-w-md mx-auto text-lg">
        Your meal plan has been configured successfully. Our team will start preparing your fresh ingredients.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <button
          onClick={onBack}
          className="w-full sm:w-auto px-8 py-3 rounded-full border border-gray-300 font-bold hover:bg-gray-50 transition"
        >
          Go Back
        </button>
        <button
          onClick={() => router.push(`/${locale}/menu`)}
          className="w-full sm:w-auto bg-lightYellow border border-black px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition"
        >
          Order More Pizza
        </button>
      </div>
    </div>
  );
}
