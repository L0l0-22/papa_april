'use client';

import Ingredients from '@/components/Ingredients';
import NutritionInfoSection from '@/components/NutritionInfoSection';
import RewardFrame from '@/components/RewardFrame';
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