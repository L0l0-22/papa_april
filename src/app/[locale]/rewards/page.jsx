'use client';

import DeliveryWork from '@/components/DeliveryWork';
import RewardFrame from '@/components/RewardFrame';
import Rewards from '@/components/Rewards';
import React from 'react';

const customWorkArray = [
  {
    image: "/work1.png",
    name: "Sign up",
    description: "To join Papa Rewards, create an account on the website or app.",
  },
  {
    image: "/work2.png",
    name: "Order pizza",
    description: "Order online, by phone or when you visit a store.",
  },
  {
    image: "/work3.png",
    name: "Earn points",
    description: "1 point for every SR 10 you spend is added to your account.",
  },
  {
    image: "/work4.png",
    name: "Get Rewards",
    description: "Use your points to pay for more delicious pizza!",
  },
];

export default function Page() {
  return (
    <div className="w-full max-w-[90%] mx-auto flex flex-col gap-44 mt-12 mb-32">
      
      <RewardFrame/>

      <DeliveryWork
        workList={customWorkArray}
        title="4 Easy Steps"
      />

      <Rewards/>

    </div>
  );
}
