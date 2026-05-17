'use client';
import React from 'react'
import MainSlider from '@/components/features/home/MainSlider'
import Ingredients from '@/components/features/home/Ingredients'
import Pizza from '@/components/features/home/Pizza'
import Find from '@/components/features/map-delivery/Find'
import Work from '@/components/features/home/Work'
import Feedback from '@/components/features/home/Feedback'
import People from '@/components/features/home/People'
import { feedbackData } from '@/components/features/home/feedbackData'
import Deliver from '@/components/features/home/Deliver';

export default function Home() {
  return (
    <>
    <div className='w-full max-w-[90%] mx-auto flex flex-col gap-44 mt-12 mb-32 '>
      <MainSlider/>
      <Ingredients/>
      <Pizza/>
      <Find/>
      <Deliver/>
      <Work/>
      <Feedback data={feedbackData[0]} />
    </div>
    <div className='my-36'>
    <People/>
    </div>
    </>
  )
}