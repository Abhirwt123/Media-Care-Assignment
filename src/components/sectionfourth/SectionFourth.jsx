import React from 'react'
import SpecialistCard from './SpecialistCard';
import specialListData from './specialListData';
import circleOverlay from '../../assets/images/Oval Copy 2.png'

const SectionFourth = () => {
  return (
    <div className="xl:py-40 lg:py-40 py-20 bg-[#F8FDFF] relative z-10">
      <div className="overlay absolute right-0 top-0 -z-10 xl:block lg:block md:block hidden">
        <img src={circleOverlay} alt="circel overlay" />
      </div>
      <div className='container'>
        <div className="head text-center">
          <h3 className='xl:text-3xl text-2xl text-[#003B79] font-semibold'>We Have The Best Specialist</h3>
          <p className='xl:w-6/12 lg:6/12 w-full m-auto text-[#002348] py-8'>We have a wide experience in experience design and strategy, with locally-rooted knowledge.</p>
        </div>
        <div className="specialist_card flex justify-center items-center flex-wrap gap-y-12 gap-x-4 ">
          {specialListData.map((doctor) => <SpecialistCard key={doctor.id} info={doctor} />)}

        </div>
      </div>
    </div>
  )
}

export default SectionFourth
