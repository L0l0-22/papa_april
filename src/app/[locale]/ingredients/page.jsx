'use client';

import React from 'react';
import DeliverySlider from '../components/DeliverySlider';
import Carousel from '../components/Carousel';
import People from '../components/People';
import Support from '../components/Support';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FiClock, FiPhone } from 'react-icons/fi';

export default function Page() {

  const slidesData2 = [
    { image: "/ing1.jpg" },
    { image: "/ing2.jpg" },
    { image: "/ing3.jpg" },
    { image: "/ing1.jpg" },
    { image: "/ing2.jpg" },
  ];

  const basicsArray = [
    { image: "/onion.jpg", name: "Garlic Parmesan Chicken" },
    { image: "/pizzasous.jpg", name: "Garlic Parmesan Chicken" },
    { image: "/onion.jpg", name: "Garlic Parmesan Chicken" },
    { image: "/pizzasous.jpg", name: "Garlic Parmesan Chicken" },
    { image: "/onion.jpg", name: "Garlic Parmesan Chicken" },
    { image: "/pizzasous.jpg", name: "Garlic Parmesan Chicken" },
    { image: "/onion.jpg", name: "Garlic Parmesan Chicken" },
    { image: "/pizzasous.jpg", name: "Garlic Parmesan Chicken" },
  ];

  const MeatsArray = [
    { image: "/beef.jpg", name: "Garlic Parmesan Chicken" },
    { image: "/biscuit.jpg", name: "Garlic Parmesan Chicken" },
    { image: "/beef2.jpg", name: "Garlic Parmesan Chicken" },
    { image: "/cheeder.jpg", name: "Garlic Parmesan Chicken" },
    { image: "/turkey.jpg", name: "Garlic Parmesan Chicken" },
    { image: "/biscuit.jpg", name: "Garlic Parmesan Chicken" },
    { image: "/cheeder.jpg", name: "Garlic Parmesan Chicken" },
    { image: "/turkey.jpg", name: "Garlic Parmesan Chicken" },
  ];

  const VegetablesArray = [
    { image: "/pepper.jpg", name: "Garlic Parmesan Chicken" },
    { image: "/olive.jpg", name: "Garlic Parmesan Chicken" },
    { image: "/pepper2.jpg", name: "Garlic Parmesan Chicken" },
    { image: "/mashroom.jpg", name: "Garlic Parmesan Chicken" },
    { image: "/onion.jpg", name: "Garlic Parmesan Chicken" },
    { image: "/olive.jpg", name: "Garlic Parmesan Chicken" },
    { image: "/pepper2.jpg", name: "Garlic Parmesan Chicken" },
    { image: "/mashroom.jpg", name: "Garlic Parmesan Chicken" },
  ];

  const supportData = {
    heading: 'egypt - cairo , maadi',
    link: true,
    image: "/support2.png",
    details: [
      {
        icon: <HiOutlineLocationMarker size={26} />,
        text: 'EGYPT – CAIRO , MAADI',
      },
      {
        icon: <FiPhone size={26} />,
        text: '8003047272',
      },
      {
        icon: <FiClock size={26} />,
        text: '11:00 AM – 04:00 AM',
      },
    ],
  };

  return (
    <div className="mt-12 mb-32 gap-48 flex flex-col">

      <DeliverySlider slidesList={slidesData2} />

      <div className="w-full flex flex-col gap-48 max-w-[90%] mx-auto">
        <Carousel title="The Basics" items={basicsArray} />
        <Carousel title="Meats" items={MeatsArray} />
        <Carousel title="Vegetables" items={VegetablesArray} />
      </div>

      <People />

      <div className="w-full max-w-[90%] mx-auto flex flex-col gap-48">
        <Support data={supportData} />
      </div>

    </div>
  );
}