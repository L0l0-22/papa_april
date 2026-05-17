'use client';

import Ingredients from '@/components/features/home/Ingredients';
import NutritionInfoSection from '@/components/features/marketing/NutritionInfoSection';
import RewardFrame from '@/components/features/rewards/RewardFrame';
import React from 'react'


export default function Page() {
  return (
    <div className="w-full max-w-[90%] mx-auto flex flex-col gap-44 mt-12 mb-32 ">
      <NutritionInfoSection/>
      <RewardFrame/>
      <Ingredients/>
    </div>
  )
}