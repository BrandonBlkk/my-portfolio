import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { RiAtLine, RiMapPinUserFill } from "react-icons/ri";
import { CgDarkMode } from "react-icons/cg";

const Header = () => {
    const [age, setAge] = useState(0);
    const [isMoon, setIsMoon] = useState(false);
    const [scrollWidth, setScrollWidth] = useState(0);

    // Calculate age on mount
    useEffect(() => {
        const currentYear = new Date().getFullYear();
        const birthYear = 2005;
        setAge(currentYear - birthYear);
    }, []);

    // // Check local storage dark or light mode
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

    // Toggle dark mode
    const toggleMoon = () => {
        const newTheme = isMoon ? 'light' : 'dark';
        setIsMoon(!isMoon);
        document.documentElement.classList.toggle('dark');

        localStorage.setItem('theme', newTheme);
    }

    // Handle scroll progress bar
    useEffect(() => {
        const handleScroll = () => {
            const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercentage = (window.scrollY / scrollableHeight) * 100;
            setScrollWidth(scrollPercentage);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Scroll Progress Bar */}
            <div id="moveRightLoader" className="fixed top-0 w-full h-1 z-10">
                <p id="move-right" className="absolute top-0 bg-blue-400 h-1" style={{ width: `${scrollWidth}%` }}></p>
            </div>

            {/* Header Section */}
            <nav className="flex flex-col md:flex-row items-center justify-between gap-4 container mx-auto px-10 my-10 transition-colors duration-150">
                <div className='flex flex-col sm:flex-row items-center gap-5'>
                    <div className="w-40 select-none">
                        <img className='w-full h-full object-cover rounded-full' src={'Images/Profile.png'} alt="Profile of Kyaw Zayar Tun" />
                    </div>
                    <div>
                        <div className="flex gap-2">
                            <p className="text-slate-500 flex items-center gap-1"> <RiAtLine /> Kyaw Zayar Tun</p>
                            <p className="text-slate-500">{age} y/o</p>
                        </div>
                        <p className="text-slate-500 flex items-center gap-1"><RiMapPinUserFill /> Yangon</p>
                    </div>

                    {/* Dark Mode Toggle */}
                    <div onClick={toggleMoon} className='cursor-pointer'>
                        <CgDarkMode size={34} className={`transition-all duration-100 ${isMoon ? 'rotate-180' : ''}`} />
                    </div>
                </div>

                <Navbar />
            </nav>
        </>
    );
}

export default Header;
