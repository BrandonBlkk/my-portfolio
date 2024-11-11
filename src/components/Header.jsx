import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { RiAtLine, RiMapPinUserFill } from "react-icons/ri";
import { CgDarkMode } from "react-icons/cg";

const Header = () => {
    const [age, setAge] = useState(0);
    const [isMoon, setIsMoon] = useState(false);

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

    return (
        <>
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
                    <div onClick={toggleMoon} className='cursor-pointer tooltip tooltip-right' data-tip="Change theme">
                        <CgDarkMode size={34} className={`transition-all duration-100 ${isMoon ? 'rotate-180' : ''}`} />
                    </div>
                </div>

                <Navbar />
            </nav>
        </>
    );
}

export default Header;
