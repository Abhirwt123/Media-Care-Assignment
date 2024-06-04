import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { REVIEWS_API, responsive } from '../../config/config';
import ReviewsCard from './ReviewsCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

const SectionFifth = () => {
    const [reviews, setReviews] = useState([]);

    const reviewsData = () => {
        axios.get(REVIEWS_API)
            .then((res) => {
                if (res.status === 200) {
                    setReviews(res.data.data);
                }
            }).catch((err) => console.log(err));
    };

    useEffect(() => {
        reviewsData();
    }, []);

    const ButtonGroup = ({ next, previous, ...rest }) => {
        const { carouselState: { currentSlide, totalItems, slidesToShow } } = rest;
        const lastSlide = currentSlide >= totalItems - slidesToShow;
        return (
            <div className="carousel-button-group flex justify-center mt-5">
                <button
                    className= {currentSlide === 0 ? 'bg-[#007ef448]' : 'bg-[#007ff4]'}
                    onClick={() => previous()}
                >
                 <MdArrowBackIos className='text-2xl'/>
                </button>
                <button
                  className= {lastSlide ? 'bg-[#007ef448]' : 'bg-[#007ff4]'}
                    onClick={() => next()}
                >
                    <MdArrowForwardIos className='text-2xl'/>
                </button>
            </div>
        );
    };

    return (
        <div className='container xl:py-40 lg:py-40 py-20' style={{ position: 'relative' }}>
            <div className="heading mb-6">
                <p className='xl:text-4xl lg:text-4xl text-2xl text-[#003B79] font-semibold'>What Our Customers Say</p>
            </div>
            <Carousel
                responsive={responsive}
                renderButtonGroupOutside={true}
                arrows={false}
                customButtonGroup={<ButtonGroup />}
                className='py-10 px-4'
            >
                {reviews.map((review) => <ReviewsCard info={review} key={review.id} />)}
            </Carousel>
        </div>
    );
};

export default SectionFifth;
