'use client';
import React from 'react'
import MainSlider from '@/components/MainSlider'
import Ingredients from '@/components/Ingredients'
import Pizza from '@/components/Pizza'
import Find from '@/components/Find'
import Work from '@/components/Work'
import Feedback from '@/components/Feedback'
import People from '@/components/People'
import { feedbackData } from '@/components/feedbackData'
import Deliver from '@/components/Deliver';

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