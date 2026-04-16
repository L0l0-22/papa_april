"use client";

import { useState } from "react";
import Image from "next/image";
import { IoMdArrowBack } from "react-icons/io";

export default function Step3({ onBack, onNext }) {
  const [selectedDesserts, setSelectedDesserts] = useState([]);

  const DessertOptions = [
    { id: "Dessert1", name: "Chocolate Rolls", image: "/CHOCOLATE ROLLS.png" },
    { id: "Dessert2", name: "Choco Pie", image: "/choco pie.png" },
    { id: "Dessert3", name: "Cookies-N-Cream-Rolls", image: "/Cookies-N-Cream-Rolls.png" },
  ];

  const toggleDessert = (id) => {
    setSelectedDesserts((prev) =>
      prev.includes(id)
        ? prev.filter((d) => d !== id)
        : [...prev, id]
    );
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 text-center md:text-start">
        Choose Your Dessert (Required)
      </h3>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {DessertOptions.map((dessert) => (
          <button
            key={dessert.id}
            onClick={() => toggleDessert(dessert.id)}
            className={`w-full rounded-xl overflow-hidden text-left shadow-xl transition-all duration-200 
              ${
                selectedDesserts.includes(dessert.id)
                  ? "bg-[#EEECEC]"
                  : "bg-white hover:scale-[1.02]"
              }`}
          >
            <div className="w-full h-32 relative">
              <Image
                src={dessert.image}
                alt={dessert.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4">
              <h4 className="text-sm font-medium text-gray-900 leading-tight truncate">
                {dessert.name}
              </h4>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-5 flex flex-col md:flex-row justify-between md:items-center">
        <button
          onClick={onBack}
          className="flex items-center justify-center w-32 py-3 font-medium text-xl"
        >
          <IoMdArrowBack size={30} className="mr-2 text-mainGreen" />
          GO BACK
        </button>

        <div className="mt-12 mb-32 text-center flex items-center justify-end gap-6">
          <p className="text-mainGreen font-bold text-base">200EGP</p>

          <button
            onClick={onNext}
            className="bg-lightYellow px-16 py-2 font-extrabold text-base rounded-full hover:bg-transparent border border-black uppercase"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}