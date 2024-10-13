import React, { useEffect, useState } from 'react';
import { RiCss3Line, RiHtml5Line, RiJavascriptLine, RiTailwindCssLine, RiArrowRightUpLine, RiMailDownloadLine, RiReactjsFill } from "react-icons/ri";
import { FaPhp } from "react-icons/fa6";
import { items } from '../constants';

const Hero = () => {
    const [yearExp, setYearExp] = useState(0);

    useEffect(() => {
        const currentYear = new Date().getFullYear();
        const startYear = 2023;
        setYearExp(currentYear - startYear);
    });

    return (
        <div className="relative overflow-hidden">
            {/* Moving background icons */}
            <div className="absolute inset-0 z-0">
                <div className="moving-icon absolute"><RiHtml5Line size={48} className="text-orange-500 opacity-0 dark:opacity-15"/></div>
                <div className="moving-icon absolute"><RiCss3Line size={48} className="text-blue-500 opacity-0 dark:opacity-15"/></div>
                <div className="moving-icon absolute"><RiJavascriptLine size={48} className="text-yellow-500 opacity-0 dark:opacity-15"/></div>
                <div className="moving-icon absolute"><RiTailwindCssLine size={48} className="text-blue-500 opacity-0 dark:opacity-15"/></div>
                <div className="moving-icon absolute"><RiReactjsFill size={48} className="text-cyan-500 opacity-0 dark:opacity-15"/></div>
                <div className="moving-icon absolute"><FaPhp size={48} className="text-purple-500 opacity-0 dark:opacity-15"/></div>
            </div>

            {/* Rest of the Hero component */}
            <div className="relative z-10">
                <div className="container mx-auto relative">
                    <div className="mx-5">
                        <h2 className="text-4xl sm:text-5xl">
                            Hi, I'm Brandon <span className="skills text-blue-400">Frontend Developer</span>
                        </h2>
                        <h4 className="text-base my-6 sm:text-xl">
                            As a junior frontend developer, I craft intuitive interfaces, optimize user experiences, and innovate with code to bring designs to life.
                        </h4>
                        <div className="flex items-center gap-5 mb-8">
                            <h1 className="font-semibold">Tech Stack</h1>
                            <span>|</span>
                            <div className="flex items-center flex-wrap gap-3 select-none cursor-pointer">
                                <RiHtml5Line size={24} className='text-orange-500' />
                                <RiCss3Line size={24} className='text-blue-500' />
                                <RiJavascriptLine size={24} className="text-yellow-500"/>
                                <RiTailwindCssLine size={24} className="text-blue-500"/> 
                                <RiReactjsFill size={24} className='text-cyan-500'/>
                                <FaPhp size={24} className='text-purple-500'/> 
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <a className="bg-slate-900 text-white px-6 py-3 rounded-full hover:bg-slate-800 transition-colors duration-300 select-none dark:bg-white dark:text-black dark:hover:bg-slate-200" href="#form">Start a Project</a>
                            <a className="bg-sky-500 text-white p-4 rounded-full hover:bg-slate-800 transition-colors duration-150 dark:hover:bg-sky-600" href="#"><RiArrowRightUpLine size={20}/></a>
                        </div>
                    </div> 
                </div>

                <a href="#" id="scrollUp" className="fixed right-20 -bottom-20 border border-slate-500 hidden items-center gap-5 bg-slate-900 rounded-t-full text-white px-5 py-2 z-10 transition-all duration-300 lg:flex">
                    <i className="ri-arrow-up-wide-line text-xl"></i>
                </a>

                <section className="container mx-auto my-12">
                    <div className="md:max-w-2xl lg:max-w-3xl xl:max-w-5xl ml-auto">
                        <h3 className="text-base mx-5 sm:text-2xl">
                            Hello, my true name is <span className="text-blue-400">Kyaw Zayar Tun</span>, a passionate web developer dedicated to crafting captivating online experiences. With a keen eye for detail and a love for coding, I specialize in building dynamic and user-friendly websites.
                            <p className="mt-4">Let's collaborate to bring your digital vision to life. Welcome to my portfolio!</p>
                        </h3>
                        <a className="inline-flex items-center gap-2 mx-7 mt-5 select-none hover:text-sky-500 transition-colors duration-200" href="#">
                            <p>Download CV</p>
                            <RiMailDownloadLine size={20}/>
                        </a>
                    </div>
                </section>

                <section className="container mx-auto my-16">
                    <div className="flex justify-center gap-0 px-3 sm:gap-16">
                        <div className="text-center">
                            <p className="text-base sm:text-xl">0{yearExp}+</p>
                            <p className="text-base font-semibold sm:text-2xl">Years experience</p>
                        </div>
                        <div className="text-center">
                            <p className="text-base sm:text-xl">0{items.length}+</p>
                            <p className="text-base font-semibold sm:text-2xl">Completed projects</p>
                        </div>
                        <div className="text-center">
                            <p className="text-base sm:text-xl">No</p>
                            <p className="text-base font-semibold sm:text-2xl">Company worked</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Hero;
