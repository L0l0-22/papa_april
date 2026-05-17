'use client'
import React from 'react'

import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FiClock, FiPhone } from 'react-icons/fi';
import DeliverySlider from '@/components/features/map-delivery/DeliverySlider';
import Steps from '@/components/features/marketing/Steps';
import DeliveryWork from '@/components/features/map-delivery/DeliveryWork';
import DeliverPeople from '@/components/features/map-delivery/DeliverPeople';
import DownloadApp from '@/components/features/marketing/DownloadApp';
import Support from '@/components/features/marketing/Support';
export default function Page() {
  const supportData = {
      heading: 'egypt - cairo , maadi',
      buttonText: 'contact us now!',
      navigateTo:'/contact',
      image: "/support.png",
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
    <div className='w-full flex flex-col gap-48 mt-12 mb-32 '>
        <DeliverySlider/>
        <div className='w-full max-w-[90%] mx-auto flex flex-col gap-48'>
            <Steps/>
            <DeliveryWork/>
            <DeliverPeople/>
        </div>
        <DownloadApp/>
        <div className='w-full max-w-[90%] mx-auto flex flex-col gap-48'>
            <Support data={supportData} />
        </div>
    </div>
  )
}