import React, { useEffect, useState } from 'react';
import logo from '../../assets/images/mediCareLogo.png'
import { RxCross1 } from 'react-icons/rx';
import { RiMenu3Line } from 'react-icons/ri';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        })
    }, [])


    return (
        <div className={`fixed z-[9999] w-full top-0 ${isScrolled ? 'bg-white' : ''}`} style={isScrolled ? { boxShadow: '0 0 40px #b1a4a4c2' } : {}}>
            <div className="container py-6">
                <div className="flex justify-between">
                    <div className="logo">
                        <img src={logo} alt=" logo" />
                    </div>
                    <div className="menu_items xl:block lg:block hidden">
                        <ul className='flex items-center '>
                            {["Home", "About", "Service", 'News'].map((list) =>
                                <li className='xl:text-xl lg:text-xl me-6 text-[#007FF4]' key={list}>{list}</li>
                            )}
                            <li className='theme_btn'>Contact</li>
                        </ul>
                    </div>
                    <div className="lg:hidden xl:hidden block">
                    <button onClick={toggleMenu}>
                         <RiMenu3Line fontSize='20px' />
                    </button>
                </div>
                </div>
                <div className={`fixed top-0 left-0 w-full h-full bg-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden xl:hidden`}>
                    <div className='h-full p-6 flex justify-content-center relative'>
                        <div className="lg:hidden xl:hidden block absolute top-3 right-3">
                            <button onClick={toggleMenu}>
                                <RxCross1 fontSize='20px' />
                            </button>
                        </div>
                        <ul className='flex flex-col h-full'>
                            {["Home", "About", "Service", 'News'].map((list) => (
                                <li key={list} className='xl:text-xl lg:text-xl mb-4 text-start text-[#007FF4]'>{list}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
