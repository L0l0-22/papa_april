'use client'

import React from 'react'
import DeliverPeople from '../components/DeliverPeople'
import DownloadApp from '../components/DownloadApp'
import Comments from '../components/Comments'

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