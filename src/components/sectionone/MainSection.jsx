import React from 'react';
import doctorImg from'../../assets/images/mainSec.jpg'

const MainSection = () => {
    return (
        <div className='mainSec '>
            <div className="overlay xl:py-40 lg:py-40 py-32">
                <div className="container">
                    <div className="grid grid-cols-12 items-center justify-center">
                        <div className=" xl:col-span-7 lg:col-span-7 md:col-span-7 col-span-12 xl:pe-6 lg:pe-6 pe-0">
                            <h3 className='text-[#002348] font-semibold xl:text-3xl lg:text-2xl md:text-xl text-base'>Welcome to MediCare+ Clinic</h3>
                            <h1 className='xl:pt-4 lg:mt-4 mt-2 xl:text-6xl lg:text-5xl md:text-3xl text-2xl font-bold text-[#003B79]'>Best Specialists</h1>
                            <p className='py-2'>We are on the leading edge of cancer care. Providing the full continuum of cancer treatments and supportive care services in a single convenient location.</p>
                            <div className="flex mt-4 xl:flex-row lg:flex-row md:flex-row flex-col">
                                <button className="theme_btn xl:me-4 lg:me-4 md:me-4 me-0 xl:text-base lg:text-base text-sm ">Make an Appointment</button>
                                <button className="theme_btn_white xl:text-base lg:text-base text-sm xl:mt-0 lg:mt-0 md:mt-0 mt-2">Departments</button>
                            </div>
                        </div>
                        <div className="xl:col-span-5 lg:col-span-5 md:col-span-5 col-span-12 xl:mt-0 lg:mt-0 mt-4">
                            <img src={doctorImg} alt=" doctor img" className=' w-full h-full rounded-xl'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainSection
