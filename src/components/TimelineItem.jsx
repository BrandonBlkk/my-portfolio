import React from 'react';
import { motion } from 'framer-motion';
import { FcCalendar } from "react-icons/fc";

const TimelineItem = ({ timeline, startDate, endDate, durationClass, duration, title, description, link }) => {

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
            <p className="text-slate-700 dark:text-slate-300">{description}</p>
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
