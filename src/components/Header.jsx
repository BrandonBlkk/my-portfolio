import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { RiAtLine, RiMapPinUserFill } from "react-icons/ri";
import { CgDarkMode } from "react-icons/cg";
import { motion } from 'framer-motion';
import { PiMouseScrollThin } from 'react-icons/pi';
import ShinyText from './ShinyText';

const Header = () => {
    const [age, setAge] = useState(0);
    const [isMoon, setIsMoon] = useState(true);
    const [scrollY, setScrollY] = useState(0);

    // Calculate age on mount
    useEffect(() => {
        const currentYear = new Date().getFullYear();
        const birthYear = 2005;
        setAge(currentYear - birthYear);
    }, []);

    // Check local storage dark or light mode
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            setIsMoon(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsMoon(false);
        }
    })

    // Handle scroll event to move the scroll icon
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Toggle dark mode
    const toggleMoon = () => {
        const newTheme = isMoon ? 'light' : 'dark';
        setIsMoon(!isMoon);
        document.documentElement.classList.toggle('dark');

        localStorage.setItem('theme', newTheme);
    }

    // Variant for animation
    const pulseEffect = {
        hidden: { opacity: 0.5, scale: 0.9 },
        visible: {
            opacity: [0.5, 1, 0.5],
            scale: [0.9, 1.1, 0.9],
            transition: {
                duration: 1.5,
                repeat: Infinity,
            }
        }
    };
    const scrollAnimation = {
        y: scrollY > 50 ? -200 : 0, 
        opacity: scrollY > 50 ? 0 : 1
    };

    const scrollAnimation2 = {
        scale: scrollY > 50 ? 0.3 : 1
    };

    return (
        <>
            {/* Header Section */}
            <nav className="flex flex-col md:flex-row items-center justify-between gap-4 container mx-auto px-10 my-10 transition-colors duration-150 z-10">
                <div className='flex flex-col sm:flex-row items-center gap-5'>
                    <div className="w-40 select-none">
                        <img className='w-full h-full object-cover rounded-full' src={'Images/Profile.png'} alt="Profile of Kyaw Zayar Tun" />
                    </div>
                    <div>
                       <div className='flex items-center gap-1'>
                            <RiAtLine  
                                className='text-black dark:text-[#c5c3c3a4]'
                            />
                            <ShinyText
                                text={`Kyaw Zayar Tun ${age} y/o`} 
                                disabled={false} 
                                speed={3} 
                                className='custom-class' 
                            />
                        </div>
                        <div className='flex items-center gap-1'>
                            <RiMapPinUserFill  
                                className='text-black dark:text-[#c5c3c3a4]'
                            />
                            <ShinyText
                                text={"Yangon, Myanmar"} 
                                disabled={false} 
                                speed={3} 
                                className='custom-class' 
                            />
                        </div>
                    </div>

                    {/* Dark Mode Toggle */}
                    <div onClick={toggleMoon} className='cursor-pointer tooltip tooltip-right' data-tip="Change theme">
                        <CgDarkMode size={34} className={`transition-all duration-100 ${isMoon ? 'rotate-180' : ''}`} />
                    </div>
                </div>

                <motion.div
                    className="fixed flex-col items-center top-25 left-1/2 transform -translate-x-1/2 hidden lg:flex transition-all duration-100"
                    variants={pulseEffect}
                    initial="hidden"
                    animate="visible"
                    style={scrollAnimation}
                >
                    <PiMouseScrollThin size={32} className="text-gray-500 dark:text-white" />
                    <motion.p className='text-xs transition-all duration-200' style={scrollAnimation2}>Scroll for more</motion.p>
                </motion.div>

                <Navbar />
            </nav>
        </>
    );
}

export default Header;
