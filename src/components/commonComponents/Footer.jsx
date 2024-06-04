import React from 'react';
import logo from '../../assets/images/mediCareLogo.png';
import facebook from '../../assets/images/socialicons/facebook.png';
import google from '../../assets/images/socialicons/google (4).png';
import twitter from '../../assets/images/socialicons/twitter (1).png';


const Footer = () => {
    const socialImg = [facebook, google, twitter];
    return (
        <>
            <div className='container'>
                <div className="flex xl:justify-between lg:justify-between justify-center py-10 flex-wrap items-center">
                    <div className="logo me-4">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="footer_links xl:mt-0 lg:mt-0 md:mt-0 mt-4">
                        <ul className='flex'>
                            {["Home", "About", "Services", "News"].map((link, index) => <li className={`xl:text-xl lg:text-xl text-[#0073FF] ${index === 3 ? "me-0" : "me-4"}`} key={link}>{link}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="social_links bg-[#ECF4FF] p-10">
                <div className="container">
                    <div className="flex xl:justify-start lg:justify-start justify-center ">
                        {socialImg.map((img, i) => {
                            return (
                                <div key={i} className="box w-14 h-14 rounded-full overflow-hidden me-4 bg-white flex justify-center items-center">
                                    <img src={img} alt={img} className='filter grayscale' />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>

    )
}

export default Footer
