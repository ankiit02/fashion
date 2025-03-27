import React from 'react'

const NewsLetterBox = () => {

    const onSumitHandler = (event)=>{
        event.preventDefault();
    }



  return (
    <div className='text-center'>
        <p className='font-medium text-2xl text-gray-800'>Subscribe now & get 20% off</p>
        <p className='mt-3 text-gray-400'>Get 20% off! Sign up for exclusive deals & trends</p>
        <form onSubmit={onSumitHandler} className=' w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-4'>
            <input className='w-full sm:flex-1 outline-none ' type="email" placeholder='Enter your email'required />
            <button className=' bg-black text-white text-xs px-10 py-4' type='sumit'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox