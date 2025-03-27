import React from 'react'
import { asset } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      <div>
        <img src={asset.quality_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>7 Day Return Policy</p>
        <p className='text-gray-400'>We support 7 days, no quetion policy</p>
      </div>
      <div>
        <img src={asset.exchange_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-gray-400'>We offer hassel free exchange policy</p>
      </div>
      <div>
        <img src={asset.support_img} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>Best Customer Support</p>
        <p className='text-gray-400'>24/7 customer support available</p>
      </div>
    </div>
  )
}

export default OurPolicy