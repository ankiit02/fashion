import React from 'react'
import Titel from '../components/Titel'
import { asset } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 border-t'>
        <Titel text1={'CONTACT'}  text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={asset.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>789 Fashion Street, MG Road <br /> Mumbai, Maharashtra 400001, India</p>
          <p className='text-gray-500'>Phone: +91 98765 43210 <br /> Email: 0447.ankit@gmail.com </p>
          <p className='font-semibold text-xl text-gray-600'>Career at Fashion</p>
          <p className='text-gray-500'>Learn more about out teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer'>Explore jobs</button>
        </div>
      </div>

      <NewsLetterBox/>
      
    </div>
  )
}

export default Contact