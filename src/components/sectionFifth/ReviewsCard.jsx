import React from 'react'
import { FaStar } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const ReviewsCard = ({ info }) => {
    const { Reviews, Name, rating, link } = info;

    let star = []

    for (let i = rating; i <= rating; i++) {
        star.push(<FaStar />)
    }

    return (
        <div className='rounded-xl review_card me-8 relative' style={{ boxShadow: "0px 0px 25px #003B7913" }} >
            <div className="circle w-16 h-16 leading-[86px] rounded-full absolute -top-6 right-0 bg-[#007FF4] text-6xl text-white font-bold text-center">“</div>
            <div className="wrap py-6 px-10">
                <div className="review">
                    <p className='leading-[30px] xl:text-lg lg:text-lg text-base'> <span>{Reviews.slice(0, 120)}</span> <a href={link} target='blank' >...<FiExternalLink className='inline-block text-xl text-blue-400' /></a> </p>
                </div>
                <div className="customer_info mt-4 flex items-center xl:justify-start lg:justify-start md:justify-start justify-center xl:flex-row lg:flex-row flex-col">
                    <div className="img-wrap w-16 h-16 rounded-full overflow-hidden me-6 ">
                        <p className='w-fill h-full bg-[#007ff4] uppercase text-4xl text-center leading-[64px] text-white' >{Name.slice(0, 1)} </p>
                    </div>
                    <div className="detail">
                        <div className="name text-lg text-[#002348] font-semibold flex">
                            <span className='me-4'>{Name}</span>
                            <p className='flex'> {[...Array(rating)].map((_, i) => (
                                <FaStar className='text-yellow-400' key={i} />
                            ))}</p>
                        </div>
                        <p className="title">Patient</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewsCard
