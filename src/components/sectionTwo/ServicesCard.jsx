import React from 'react';
import { MdArrowForwardIos } from 'react-icons/md';

const ServicesCard = ({ info }) => {
    const { title, img } = info
    return (

        <div className=' rounded-md shadow-2xl hover:bg-[#007EF3] service_card '>
            <div className="box p-10">
                <div className="img_wrap flex justify-center">
                    {img}
                </div>
                <div className="body mt-4">
                    <p className="title font-semibold text-center">{title}</p>
                </div>
                <div className='text-center flex opacity-0 justify-between items-center text-white pt-6 px-6 learn_more '>
                    <span className='cursor-pointer'>Learn More</span>
                    <span className='cursor-pointer'><MdArrowForwardIos /></span>
                </div>
            </div>

        </div>
    )
}

export default ServicesCard
