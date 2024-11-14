import React, { useEffect, useState } from 'react';
import { RiCss3Line, RiHtml5Line, RiJavascriptLine, RiTailwindCssLine, RiBootstrapLine, RiArrowRightUpLine, RiMailDownloadLine, RiReactjsFill } from "react-icons/ri";
import { FaGitAlt, FaPhp } from "react-icons/fa6";
import { items } from '../constants';
import TechStack from './TechStack';

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
                <div className="moving-icon absolute">
                    <RiHtml5Line size={48} className="text-orange-500 opacity-0 dark:opacity-15" />
                </div>
                <div className="moving-icon absolute">
                    <RiCss3Line size={48} className="text-blue-500 opacity-0 dark:opacity-15" />
                </div>
                <div className="moving-icon absolute">
                    <RiJavascriptLine size={48} className="text-yellow-500 opacity-0 dark:opacity-15" />
                </div>
                <div className="moving-icon absolute">
                    <RiTailwindCssLine size={48} className="text-blue-500 opacity-0 dark:opacity-15" />
                </div>
                <div className="moving-icon absolute">
                    <RiReactjsFill size={48} className="text-cyan-500 opacity-0 dark:opacity-15" />
                </div>
                <div className="moving-icon absolute">
                    <FaPhp size={48} className="text-indigo-500 opacity-0 dark:opacity-15" />
                </div>
                <div className="moving-icon absolute">
                    <RiBootstrapLine size={48} className="text-purple-500 opacity-0 dark:opacity-15" />
                </div>
                <div className="moving-icon absolute">
                    <FaGitAlt size={48} className="text-red-500 opacity-0 dark:opacity-15" />
                </div>
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
                        <TechStack />
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
                        <h3 className="text-base mx-5 sm:text-xl">
                            Hello, my true name is <span className="text-blue-400">Kyaw Zayar Tun</span>, a passionate web developer dedicated to crafting captivating online experiences. With a keen eye for detail and a love for coding, I specialize in building dynamic and user-friendly websites.
                            <p className="mt-4">Let's collaborate to bring your digital vision to life. Welcome to my portfolio!</p>
                        </h3>
                        <button className="inline-flex items-center gap-2 mx-6 mt-5 select-none hover:text-sky-500 transition-colors duration-200" onClick={() => document.getElementById('cv').showModal()}>
                            <p>Download CV</p>
                            <RiMailDownloadLine size={20}/>
                        </button>
                        <dialog id="cv" className="modal">
                            <div className="modal-box card bg-base-100 max-w-[600px] shadow-xl rounded-md text-black p-3 relative scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                                <div>
                                    <img src="Images/f1f4a581-bd30-4552-90e2-3e4420cebb52-cover.png" alt="CV" />
                                </div>
                                <p className='absolute text-5xl opacity-10'>Sample CV</p>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>Close</button>
                            </form>
                        </dialog>
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
