import React from 'react'
import ServicesCard from './ServicesCard';
import serviceData from './ServiceData';

const SecondTwo = () => {
    
    return (
        <div className='container xl:py-40 lg:py-40 py-20'>
            <div className="head mb-8 text-center">
                <h2 className='pb-4 font-semibold text-[#003B79] text-4xl'>Our Services</h2>
                <p className=' m-auto xl:w-6/12 lg:w-6/12 w-full'>We provide the most full medical services, so every person could heave the oppurtunity to receive qualitative medical help.</p>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-6 justify-center items-center">
                {serviceData.map((service)=><ServicesCard key={service.id} info={service}/>)}
            </div>
        </div>
    )
}

export default SecondTwo
