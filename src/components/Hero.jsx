import React, { useEffect, useState } from 'react';
import { RiCss3Line, RiHtml5Line, RiJavascriptLine, RiTailwindCssLine, RiBootstrapLine, RiArrowRightUpLine, RiMailDownloadLine, RiReactjsFill } from "react-icons/ri";
import { FaGitAlt, FaPhp } from "react-icons/fa6";
import { items } from '../constants';
import TechStack from './TechStack';
import { motion } from 'framer-motion';
import PrismaticBurst from './PrismaticBurst';
import ScrollVelocity from './ScrollVelocity';

const Hero = () => {
    const [yearExp, setYearExp] = useState(0);

    useEffect(() => {
        const currentYear = new Date().getFullYear();
        const startYear = 2023;
        setYearExp(currentYear - startYear);
    });

    const text = "As a junior web developer, I craft intuitive interfaces, optimize user experiences, and innovate with code to bring designs to life.";
    const words = text.split(" "); 
    
    // Variants for animation
    const containerVariants = {
        hidden: { opacity: 1 }, 
        visible: {
            transition: {
                staggerChildren: 0.1, 
            },
        }
    };
    const wordVariants = {
        hidden: { opacity: 0, y: 10, scale: 0.5 }, 
        visible: { opacity: 1, y: 0, scale: 1 }
    };
    const flipEffect = {
        hidden: {
            opacity: 0,
            rotateX: 90, 
            transformOrigin: "bottom",
        },
        visible: {
            opacity: 1,
            rotateX: 0, 
            transition: {
                type: "spring",
                stiffness: 60,
                damping: 15,
            },
        }
    };

    return (
        <div className="relative overflow-hidden">
            {/* Rest of the Hero component */}
            <div className="relative z-10">
                <div className="container mx-auto relative flex justify-center mt-2">
                    <motion.div 
                        className="mx-5"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h2
                            className="text-4xl mb-10 tracking-wider text-center"
                            initial="hidden"
                            animate="visible"
                            variants={flipEffect}
                        >
                            <p className='text-5xl'>Hi, I'm Brandon</p>
                            <p className="skills text-blue-400">Web Developer</p>
                        </motion.h2>
                        {/* <h4 className="text-base my-6 sm:text-xl">
                            {words.map((word, index) => (
                                <motion.span
                                    key={index}
                                    className="inline-block mx-[3px]"
                                    variants={wordVariants}
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </h4> */}
                        <TechStack />
                        <div className="flex justify-center items-center gap-3">
                            <a className="bg-slate-900 text-white px-6 py-4 rounded-full hover:bg-slate-800 transition-colors duration-300 select-none dark:bg-white dark:text-black dark:hover:bg-slate-200" href="#form">Start a Project</a>
                            <a className="bg-sky-500 text-white p-4 rounded-full hover:bg-slate-800 transition-colors duration-150 dark:hover:bg-sky-600" href="#"><RiArrowRightUpLine size={20}/></a>
                        </div>
                    </motion.div> 
                </div>
            </div>

            {/* <ScrollVelocity
                    texts={['React Bits', 'Scroll Down']} 
                    className="custom-scroll-text"
                /> */}
        </div>
    );
};

export default Hero;
