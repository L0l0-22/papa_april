'use client';

import React, { useState } from "react";
import Image from "next/image";
import AddToCartModal from "../../../components/steps/AddToCartModal";

export default function Page() {

  const menuData = [
    {
      name: "Rewards",
      id: "Rewards",
      items: [
        {
          title: "Free Pizza Reward",
          desc: "Earn points and redeem for free pizza.",
          price: "Free",
          image: "/reward2.png"
        },
      ],
    },
    {
      name: "Papa’s Deals",
      id: "Papa’s Deals",
      items: [
        {
          title: "Buy 2 Get 1 Free",
          desc: "Grab two pizzas and get one free.",
          price: "$25.99",
          image: "/legand1.png"
        },
        {
          title: "Double Large Offer",
          desc: "Two large pizzas at a special price.",
          price: "$29.99",
          image: "/legand3.png"
        },
        {
          title: "Double Medium Offer",
          desc: "Two medium pizzas bundled together.",
          price: "$21.99",
          image: "/legand.png"
        },
      ],
    },

    {
      name: "pizzas",
      id: "pizzas",
      items: [
        {
          title: "Pepperoni",
          desc: "Classic pepperoni & cheese pizza.",
          price: "$12.99",
          image: "/Peperoni.png"
        },
        {
          title: "Super Papa",
          desc: "Loaded pizza with all toppings.",
          price: "$16.99",
          image: "/Super Papa.png"
        },
      ],
    },

    {
      name: "Beverages",
      id: "Beverages",
      items: [
        {
          title: "Pepsi",
          desc: "Classic cola flavor.",
          price: "$1.99",
          image: "/pepsi.png"
        },
        {
          title: "7Up",
          desc: "Refreshing lemon soda.",
          price: "$1.99",
          image: "/7up.png"
        },
      ],
    },
  ];

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="max-w-[80%] mx-auto mt-12 mb-32">

      {menuData.map((category) => (
        <section
          key={category.id}
          id={category.id}
          className="mb-20 scroll-mt-12"
        >
          <h2 className="mb-4 text-2xl font-bold">{category.name}</h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

            {category.items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col overflow-hidden transition bg-white border shadow rounded-2xl hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative w-full h-52">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-4"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-4">
                  <h3 className="mb-1 text-base font-bold">{item.title}</h3>

                  <p className="flex-grow text-sm text-gray-600">
                    {item.desc}
                  </p>

                  <div className="flex items-center justify-between mt-9">
                    <p className="text-sm">{item.price}</p>

                    <button
                      onClick={() => setShowModal(true)}
                      className="px-6 py-2 text-sm uppercase border border-black rounded-full bg-lightYellow hover:bg-transparent"
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>

              </div>
            ))}

          </div>
        </section>
      ))}

      <AddToCartModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
}