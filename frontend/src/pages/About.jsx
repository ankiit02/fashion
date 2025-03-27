import React from 'react'
import Titel from '../components/Titel'
import { asset } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Titel text1={'ABOUT '} text2={'US'} />
      </div>
    
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={asset.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>At <span className='text-red-500'>Fashion</span>, we are not just a clothing brand; we are a movement that embraces individuality and personal style. Our collections are carefully curated to reflect the latest trends while ensuring timeless elegance.</p>
            <p>We take pride in our craftsmanship, sourcing high-quality fabrics and collaborating with skilled designers to create pieces that resonate with fashion lovers worldwide. Our goal is to offer a seamless shopping experience, where every customer feels valued and confident in their choices.</p>
            <p>Beyond fashion, we are committed to sustainability. We believe in responsible production practices, minimizing waste, and creating ethical fashion that aligns with modern values. Every garment you buy from us is a step towards a more stylish and conscious future.</p>
            <p>Join us on this journey of style, confidence, and self-expression. Fashion Luxs Matir is more than a brand—it’s a lifestyle!</p>
       </div>
      </div>

      <div className=' text-2xl py-4'>
        <Titel text1={'WHY '} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <p className='font-bold text-xl'>Quality Assurance:</p>
          <p className='text-gray-600 text-'>We prioritize high-quality fabrics and expert craftsmanship to ensure durability, comfort, and style in every piece.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <p className='font-bold text-xl'>Convenience:</p>
          <p className='text-gray-600 text-'>Enjoy a seamless shopping experience with our user-friendly website, fast shipping, and hassle-free returns.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <p className='font-bold text-xl'>Exceptional Customer Service:</p>
          <p className='text-gray-600 text-'>Our dedicated support team is always ready to assist you, ensuring a smooth and satisfying shopping journey</p>
        </div>
      </div>

      <NewsLetterBox />

    </div>
  )
}

export default About