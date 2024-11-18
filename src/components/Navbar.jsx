import React, { useEffect, useState } from 'react'

const Navbar = () => {
  
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeTab, setActiveTab] = useState('about');

    const about = () => setActiveTab('about');
    const work = () => setActiveTab('work');
    const solution = () => setActiveTab('solution');

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
            setActiveTab('about')
        }
        };
        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={isScrolled && 'fixed top-3 right-10 z-30 shadow-md rounded-full bg-white dark:bg-sky-950'}>
            <ul className="flex border rounded-full md:ml-auto dark:border-slate-500">
                <a
                    href="#"
                    className={`li px-6 py-4 select-none transition-all duration-75 ${activeTab === 'about' && 'bg-slate-900 text-white border rounded-full dark:bg-white dark:text-black dark:border-none'}`}
                    onClick={about}
                >
                    About
                </a>
                <a
                    href="#work"
                    className={`li px-6 py-4 select-none transition-all duration-75 ${activeTab === 'work' && 'bg-slate-900 text-white border rounded-full dark:bg-white dark:text-black dark:border-none'}`}
                    onClick={work}
                >
                    Work
                </a>
                <a
                    href="#solution"
                    className={`li px-6 py-4 select-none transition-all duration-75 ${activeTab === 'solution' && 'bg-slate-900 text-white border rounded-full dark:bg-white dark:text-black dark:border-none'}`}
                    onClick={solution}
                >
                    Solutions
                </a>
            </ul>
        </div>
    )
}

export default Navbar
