"use client";

import { useState } from "react";
import Image from "next/image";
import { IoMdArrowBack } from "react-icons/io";

export default function Step4({ onBack, onNext }) {
  const [selectedDrinks, setSelectedDrinks] = useState([]);

  const DrinkOptions = [
    { id: "Drink1", name: "Fanta Orange", image: "/Drink1.png" },
    { id: "Drink2", name: "Sprite", image: "/Drink2.png" },
    { id: "Drink3", name: "Pepsi", image: "/Drink3.png" },
    { id: "Drink4", name: "Lemon Juice", image: "/Drink4.png" },
    { id: "Drink5", name: "Coca-Cola", image: "/Drink5.png" },
  ];

  const toggleDrink = (id) => {
    setSelectedDrinks((prev) =>
      prev.includes(id)
        ? prev.filter((d) => d !== id)
        : [...prev, id]
    );
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6">
        Choose Your Drink (Required)
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {DrinkOptions.map((drink) => (
          <button
            key={drink.id}
            onClick={() => toggleDrink(drink.id)}
            className={`w-full rounded-xl overflow-hidden text-left shadow-xl transition-all duration-200
              ${
                selectedDrinks.includes(drink.id)
                  ? "bg-[#EEECEC]"
                  : "bg-white hover:scale-[1.02]"
              }`}
          >
            <div className="w-full h-32 relative">
              <Image
                src={drink.image}
                alt={drink.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4">
              <h4 className="text-sm font-medium text-gray-900 leading-tight truncate">
                {drink.name}
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