'use client';

import React from 'react';
import Find from '../../../components/Find';
import Work from '../../../components/Work';
import DownloadApp from '../../../components/DownloadApp';
import Rewards from '../../../components/Rewards';

const customFindArray = [
  {
    image: "/find2.png",
    name: "Legends Group Meal",
    description:
      "Three 8” pizzas + Potato Wedges + 6 Chicken Poppers + 4 Chocolate scrolls + 1L Soft Drink",
    button: "ORDER HERE!",
    navigateTo: '/menu',
  },
  {
    image: "/find3.png",
    name: "Legends Group Meal",
    description:
      "Three 8” pizzas + Potato Wedges + 6 Chicken Poppers + 4 Chocolate scrolls + 1L Soft Drink",
    button: "ORDER HERE!",
    navigateTo: '/menu',
  },
  {
    image: "/find3.png",
    name: "Legends Group Meal",
    description:
      "Three 8” pizzas + Potato Wedges + 6 Chicken Poppers + 4 Chocolate scrolls + 1L Soft Drink",
    button: "ORDER HERE!",
    navigateTo: '/menu',
  },
  {
    image: "/find2.png",
    name: "Legends Group Meal",
    description:
      "Three 8” pizzas + Potato Wedges + 6 Chicken Poppers + 4 Chocolate scrolls + 1L Soft Drink",
    button: "ORDER HERE!",
    navigateTo: '/menu',
  },
];

export default function Page() {
  return (
    <>
      <div className="w-full max-w-[90%] mx-auto flex flex-col gap-44 mt-12 mb-32">
        <Find
          bgColor="bg-white"
          findList={customFindArray}
          buttonClass="bg-lightYellow px-12 py-2 font-medium rounded-full hover:bg-transparent border border-black uppercase mt-6"
          title="Find The Best Papa Johns Special Offers Every Day"
          titleClass="text-2xl md:text-3xl mb-16 font-bold text-center"
        />

        <Work />
        <Rewards />
      </div>

      <div className="my-44">
        <DownloadApp isOffers={false} />
      </div>
    </>
  );
}