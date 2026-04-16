'use client';

import React, { useState } from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

const faqs = [
  {
    question: "Is there a minimum order amount required for delivery?",
    answer: "Yes, the minimum order amount required for delivery is SAR50.",
  },
  {
    question: "Is there a minimum order amount required for dine-in or takeaway?",
    answer: "Yes, the minimum order amount required for delivery is SAR50.",
  },
  {
    question: "Do I need to pay for delivery?",
    answer: "Yes, the minimum order amount required for delivery is SAR50.",
  },
  {
    question: "When are your opening times?",
    answer: "Yes, the minimum order amount required for delivery is SAR50.",
  },
  {
    question: "How long does it take you to deliver pizza?",
    answer: "Yes, the minimum order amount required for delivery is SAR50.",
  },
  {
    question: "Why can’t you deliver to my house?",
    answer: "Yes, the minimum order amount required for delivery is SAR50.",
  },
  {
    question: "Are the prices different on the paper menu to online?",
    answer: "Yes, the minimum order amount required for delivery is SAR50.",
  },
];

export default function Page() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="max-w-[90%] mx-auto mt-12 mb-32 flex flex-col lg:flex-row justify-between items-center gap-10">
      
      {/* Left */}
      <div className="flex-1 w-full">
        <h2 className="mb-6 text-2xl text-center font-potta lg:text-left">
          Frequently Asked Questions
        </h2>

        <div className="border-t border-gray-300 divide-y">
          {faqs.map((faq, index) => (
            <div key={index} className="py-[1.7rem] cursor-pointer">
              <div
                className="flex items-center justify-between"
                onClick={() => toggleIndex(index)}
              >
                <p className="text-sm font-bold text-black md:text-lg">
                  {faq.question}
                </p>

                {openIndex === index ? (
                  <FaTimes className="text-mainRed" />
                ) : (
                  <FaPlus className="text-mainGreen" />
                )}
              </div>

              {openIndex === index && faq.answer && (
                <p className="mt-3 text-xs text-gray-600 md:text-base">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-center flex-1 w-full lg:justify-end">
        <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl h-[300px] md:h-[400px]">
          <Image
            src="/faq.png"
            alt="FAQ Papa John's"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}