'use client';

import React from 'react';
import Support from '../components/Support';
import Location from '../components/Location';
import StoreCard from '../components/StoreCard';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FiClock, FiPhone } from 'react-icons/fi';

export default function Page() {

  const supportData = {
    heading: 'egypt - cairo , maadi',
    buttonText: 'contact us now!',
    image: "/support.png",
    navigateTo: "/contact",
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
    <div className="w-full max-w-[90%] mx-auto flex flex-col gap-44 mt-12 mb-32">

      <StoreCard />

      <Location showHeading={false} />

      <Support data={supportData} />

    </div>
  );
}