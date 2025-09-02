import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeTab, setActiveTab] = useState('about');
    const [hoveredTab, setHoveredTab] = useState(null);

    const about = () => setActiveTab('about');
    const work = () => setActiveTab('work');
    const solution = () => setActiveTab('solution');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
                setActiveTab('about');
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getActiveClass = (tab) => {
        const current = hoveredTab || activeTab;
        return current === tab
            ? 'bg-slate-900 text-white border rounded-full dark:bg-white dark:text-black dark:border-none'
            : 'hover:bg-slate-100 dark:hover:bg-white/10';
    };

    return (
        <div
            className={`${
                isScrolled
                    ? 'fixed top-3 right-3 sm:right-10 shadow-md rounded-full dark:bg-white/20 dark:backdrop-blur-sm dark:text-white z-10'
                    : ''
            }`}
        >
            <ul className="flex border rounded-full md:ml-auto dark:border-slate-500">
                <a
                    href="#"
                    className={`li px-6 py-4 select-none transition-all duration-200 ease-out transform hover:scale-105 hover:shadow-md hover:shadow-slate-300/30 dark:hover:shadow-white/20 hover:backdrop-blur-sm ${getActiveClass('about')}`}
                    onClick={about}
                    onMouseEnter={() => setHoveredTab('about')}
                    onMouseLeave={() => setHoveredTab(null)}
                >
                    About
                </a>
                <a
                    href="#work"
                    className={`li px-6 py-4 select-none transition-all duration-200 ease-out transform hover:scale-105 hover:shadow-md hover:shadow-slate-300/30 dark:hover:shadow-white/20 hover:backdrop-blur-sm ${getActiveClass('work')}`}
                    onClick={work}
                    onMouseEnter={() => setHoveredTab('work')}
                    onMouseLeave={() => setHoveredTab(null)}
                >
                    Work
                </a>
                <a
                    href="#solution"
                    className={`li px-6 py-4 select-none transition-all duration-200 ease-out transform hover:scale-105 hover:shadow-md hover:shadow-slate-300/30 dark:hover:shadow-white/20 hover:backdrop-blur-sm ${getActiveClass('solution')}`}
                    onClick={solution}
                    onMouseEnter={() => setHoveredTab('solution')}
                    onMouseLeave={() => setHoveredTab(null)}
                >
                    Solutions
                </a>
            </ul>
        </div>
    );
};

export default Navbar;
