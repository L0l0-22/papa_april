'use client'

import Comments from '@/components/features/about/Comments'
import DeliverPeople from '@/components/features/map-delivery/DeliverPeople'
import DownloadApp from '@/components/features/marketing/DownloadApp'
import React from 'react'


export default function Page() {
  return (
    <>
    <div className='w-full max-w-[90%] mx-auto flex flex-col gap-44 mt-12 mb-44'>
        <Comments/>
        <DeliverPeople/>
    </div>
    <div className='my-44'>
        <DownloadApp isOffers={false} />
    </div>
    </>
    
  )
}