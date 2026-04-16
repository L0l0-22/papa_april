'use client'
import React from 'react'
import DeliverySlider from '../components/DeliverySlider'
import Steps from '../components/Steps'
import DeliveryWork from '../components/DeliveryWork'
import DeliverPeople from '../components/DeliverPeople'
import DownloadApp from '../components/DownloadApp'
import Support from '../components/Support'
import supportImage from "../assets/support.png";
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FiClock, FiPhone } from 'react-icons/fi';
export default function Page() {
  const supportData = {
      heading: 'egypt - cairo , maadi',
      buttonText: 'contact us now!',
      navigateTo:'/contact',
      image: supportImage,
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