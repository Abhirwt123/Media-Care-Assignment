import React from 'react';
import circelOverlay from '../../assets/images/Oval Copy 3.png'

const Newsletter = () => {
  return (
    <div className='container'>
      <div className="lg:px-20 xl:px-20 px-0">
        <div className="rounded-xl bg-[#007FF4] my-40 px-12 py-20 relative">
          <div className="circle_overlay absolute z-[-1] -top-20 -right-16 w-56 h-56 xl:block lg:block hidden">
            <img src={circelOverlay} alt="circel img " className='w-full h-full object-cover' />
          </div>
          <div className="heading mb-8 text-center">
            <p className="text-white xl:text-4xl lg:text-4xl text-2xl font-semibold">Subscribe to Newsletter</p>
            <p className="text-white font-semibold py-4 xl:text-base lg:text-base text-sm">We have a wide experience in experience design and strategy,</p>
          </div>
          <div className="sub_email xl:w-8/12 lg:w-8/12 w-full m-auto">
            <form action="#">
              <div className="grid grid-cols-12 items-center justify-between bg-white rounded-lg py-3 px-4">
                <input type="text" className='outline-0 border-0  me-4 xl:col-span-8 lg:col-span-8 col-span-12' placeholder='Enter your email address' />
                <button className='theme_btn col-span-12  xl:col-span-4 lg:col-span-4 xl:mt-0 lg:mt-0 mt-4'>Send Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
