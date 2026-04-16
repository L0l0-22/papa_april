'use client';

import { useState } from "react";
import Image from "next/image";

export default function Step1({ onNext }) {
  const [selectedPizza, setSelectedPizza] = useState(null);

  const pizzaOptions = [
    { id: "pizza1", name: "Margherita", image: "/pizzaCart.jpg" },
    { id: "pizza2", name: "Pepperoni", image: "/pizzaCart.jpg" },
    { id: "pizza3", name: "BBQ Chicken", image: "/pizzaCart.jpg" },
    { id: "pizza4", name: "Veggie", image: "/pizzaCart.jpg" },
    { id: "pizza5", name: "Hawaiian", image: "/pizzaCart.jpg" },
    { id: "pizza6", name: "Four Cheese", image: "/pizzaCart.jpg" },
    { id: "pizza7", name: "Buffalo", image: "/pizzaCart.jpg" },
    { id: "pizza8", name: "Beef Supreme", image: "/pizzaCart.jpg" },
    { id: "pizza9", name: "Tandoori", image: "/pizzaCart.jpg" },
    { id: "pizza10", name: "Cheesy Crust", image: "/pizzaCart.jpg" },
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 text-center md:text-start">
        Choose Your Pizza (Required)
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {pizzaOptions.map((pizza) => (
          <button
            key={pizza.id}
            onClick={() => setSelectedPizza(pizza.id)}
            className={`w-full rounded-xl overflow-hidden text-left shadow-xl transition-all duration-200
              ${
                selectedPizza === pizza.id
                  ? "bg-[#EEECEC]"
                  : "bg-white hover:scale-[1.02]"
              }`}
          >
            {/* Image */}
            <div className="relative w-full h-32">
              <Image
                src={pizza.image}
                alt={pizza.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Title */}
            <div className="p-4">
              <h4 className="text-sm font-medium text-gray-900 truncate">
                {pizza.name}
              </h4>
            </div>
          </button>
        ))}
      </div>

      {/* Footer */}
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
  );
}