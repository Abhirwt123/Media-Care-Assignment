import React from 'react'

const SpecialistCard = ({info}) => {
  const {name,title,img}=info
  return (
    <div className=' rounded-xl overflow-hidden' style={{boxShadow:" 0px 10px 50px 25px #003B7913"}}>
         <div className="card" >
            <div className="img_wrap w-64 h-72">
                <img src={img} alt={name} className='w-full object-cover h-full object-top' />
            </div>
            <div className="dtr_info text-center p-4">
               <p className="name font-semibold text-[#002348] pb-2">{name}</p>
               <p className="title text-[#002348]">{title}</p>
            </div>
         </div>
    </div>
  )
}

export default SpecialistCard
