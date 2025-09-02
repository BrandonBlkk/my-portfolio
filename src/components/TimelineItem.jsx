import React from 'react';
import { motion } from 'framer-motion';
import { FcCalendar } from "react-icons/fc";

const TimelineItem = ({ timeline, startDate, endDate, durationClass, duration, title, logo1, logo2, description, link, alignRight }) => {

    // Variant for animation
    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <motion.div
            className={timeline}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <time className="font-mono italic">{startDate} {endDate !== '' && '-'} {endDate}</time>
            <div className={durationClass}>
                <FcCalendar size={20} />
                <p className="font-semibold">{duration}</p>
            </div>
            <div className="text-lg font-bold">{title}</div>

            {/* Image section below title, alternating left/right */}
            <div className={`flex gap-2 mt-2 ${alignRight ? 'md:flex-row-reverse' : ''}`}>
                {logo1 && (
                    <div className="w-20 select-none">
                        <img
                            className="w-full h-full object-cover rounded-sm"
                            src={logo1}
                            alt="Logo 1"
                        />
                    </div>
                )}
                {logo2 && (
                    <div className="w-20 h-14 select-none">
                        <img
                            className="w-full h-full object-cover rounded-sm"
                            src={logo2}
                            alt="Logo 2"
                        />
                    </div>
                )}
            </div>

            <p className="text-slate-700 dark:text-slate-300 mt-2">{description}</p>
            <button
                className={`${link === '' ? 'hidden' : 'bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-800 py-1 px-3 rounded-md font-semibold mt-1 hover:bg-slate-300 transition-colors duration-150 select-none'}`}
                onClick={() => document.getElementById(link).showModal()}
            >
                View result
            </button>
        </motion.div>
    );
};

export default TimelineItem;
