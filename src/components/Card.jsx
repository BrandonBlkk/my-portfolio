import React from 'react';
import { RiStackLine } from "react-icons/ri";
import ViewDetails from './ViewDetails';

const Card = ({ modalID, img, title, description, feature, responsive, device, project, link, code, tech }) => {
    return (
        <div className="hot-deal-box w-full mx-5 relative border-b-2 border-slate-200 dark:border-slate-600 md:border-b-0 sm:w-80 group py-1">
            <div className="relative overflow-hidden group">
                <div className="hot-deal-img-container flex justify-center rounded-sm select-none border dark:border-none group-hover:scale-105 transition-all duration-300">
                    <img className="w-full h-full object-contain rounded-sm" src={img} alt={title} />
                </div>
                <div className="absolute inset-0 bg-black/40 flex flex-col gap-2 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 select-none">
                    <ViewDetails 
                        modalID={modalID}
                        img={img}
                        title={title}
                        description={description}
                        feature={feature}
                        device={device}
                        link={link}
                        code={code}
                        tech={tech}
                    />
                </div>
            </div>
            <div className="hot-deal-info mt-3">
                <h1 className="font-bold">{title} {responsive ? '' : '(Not Fully Responsive)'}</h1>
                <p className="text-sky-700 font-bold text-sm">{project}</p>
            </div>
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
