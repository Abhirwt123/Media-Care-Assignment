import React from 'react';
import DoctorImg from '../../assets/images/doctor-woman.png'
import DoctorImgSecond from '../../assets/images/doctor-man.png'
import vanImg from '../../assets/images/doctor-woman copy 2.png'

const SectionThird = () => {
  return (
    <div className='container '>
      <div className="grid-cols-12 grid xl:py-40 lg:py-40 py-20 items-center">
        <div className="xl:col-span-6 lg:col-span-6 col-span-12">
          <p className="xl:text-4xl lg:text-4xl text-2xl font-semibold text-[#003B79]">Clinic With Innovati</p>
          <p className='py-4'>We provide the most full medical services, so every person could heave the oppurtunity to receive qualitative medical help.</p>
          <button className='theme_btn'>Learn More</button>
        </div>
        <div className="xl:col-span-6 lg:col-span-6 col-span-12">
          <div className="flex xl:justify-around lg:justify-around md:justify-center justify-center xl:mt-0 mt-10 xl:flex-nowrap lg:flex-nowrap flex-wrap">
            <div className="box px-10 clinic_card sec_dtr_card_one">
              <div className="img_wrap -mt-16">
                <img src={DoctorImg} alt="" />
              </div>
              <div className="identity mt-2">
                <p className="font-semibold text-[#002348] text-center"> Qualified Doctors</p>
              </div>
            </div>
            <div className="ms-2 box px-10 clinic_card xl:mt-40  sec_dtr_card mt-0">
              <div className="img_wrap -mt-16">
                <img src={DoctorImgSecond} alt="" />
              </div>
              <div className="identity mt-2">
                <p className="font-semibold text-[#002348] text-center"> Emergency Care</p>
              </div>
            </div>
          </div>
          <div className="flex xl:mt-0 lg:mt-10 md:mt-10 mt-20 xl:justify-start justify-center">
          <div className="box px-10 clinic_card xl:ms-[66px] mt-0">
            <div className="img_wrap -mt-16">
              <img src={vanImg} alt="" />
            </div>
            <div className="identity mt-2">
              <p className="font-semibold text-[#002348] text-center">24 Hours Service</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionThird;
