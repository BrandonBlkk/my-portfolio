import React from 'react';
import { RiStackLine } from "react-icons/ri";

const Card = ({ img, title, responsive, project, link, tech }) => {
    return (
        <div className="hot-deal-box w-full mx-5 relative border-b-2 md:border-b-0 sm:w-80 group">
            <div className="relative overflow-hidden">
                <div className="hot-deal-img-container flex justify-center select-none border dark:border-none">
                    <img className="w-full h-full object-contain" src={img} alt={title} />
                </div>

                {/* Button */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={link} target="_blank" rel="noreferrer">
                        <button className="px-6 py-2 bg-white text-blue-500 font-semibold rounded-md hover:bg-slate-50 transition-colors duration-200">
                            View Project
                        </button>
                    </a>
                </div>
            </div>

            {/* Card Content */}
            <div className="hot-deal-info mt-3">
                <h1 className="font-bold">{title} {responsive ? '' : '(Not Fully Responsive)'}</h1>
                <p className="text-sky-700 font-bold text-sm">{project}</p>
            </div>
            
            {/* Tech Stack */}
            <div className="mt-3">
                <h1 className='flex items-center gap-1 font-semibold'>
                    Tech Stack
                    <span>
                        <RiStackLine size={18} />
                    </span>
                </h1>
                <div className="flex items-center gap-2">
                    {tech && tech.length > 0 && (
                        tech.map((icon, index) => (
                            <span key={index}>{icon}</span>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;
