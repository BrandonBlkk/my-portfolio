import React from 'react'

const ViewDetails = ({ modalID, img, title, description, feature, device, link, code, tech }) => {
    return (
        <>
            <button className="bg-white dark:text-black py-2 px-3 rounded-md font-semibold mt-1 hover:bg-slate-100 transition-colors duration-150 select-none'" onClick={() => document.getElementById(modalID).showModal()}>View details</button>
            <dialog id={modalID} className="modal">
                <div className="modal-box card bg-base-100 max-w-[700px] max-h-[90%] shadow-xl rounded-md text-black p-3 dark:bg-slate-900 dark:text-white">
                    <figure className="select-none">
                        <img src={img} alt={title} className="w-full h-auto object-contain" />
                    </figure>
                    <div className="card-body py-3 px-0 overflow-y-auto max-h-[400px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-700 dark:scrollbar-track-gray-900">
                        <h2 className="card-title text-lg sm:text-xl">
                            {title}
                        </h2>
                        <p className="text-sm text-gray-700 dark:text-slate-300">
                            {description}
                        </p>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-0'>
                            <div>
                            <h3 className={`text-base font-semibold text-gray-800 dark:text-white mb-1 ${feature.length === 0 ? 'hidden' : ''}`}>
                                Key Features
                            </h3>
                                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600 dark:text-slate-300">
                                    {feature && feature.length > 0 && (
                                        feature.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))
                                    )}
                                </ul>
                                <div>
                                    <h3 className="text-base font-semibold text-gray-800 dark:text-white mt-2 mb-1">Technologies Used</h3>
                                    <div className="flex items-center flex-wrap gap-2">
                                        {tech && tech.length > 0 && (
                                            tech.map((icon, index) => (
                                                <span key={index}>{icon}</span>
                                            ))
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='flex flex-col'>
                                    <h3 className="text-base font-semibold text-gray-800 dark:text-white">Device Compatibility</h3>
                                    <p className="flex items-center gap-1 text-gray-600 dark:text-slate-300 text-sm">{device}</p>
                                </div>
                            </div>
                           
                        </div>
                    
                    </div>
                    <div className="card-actions justify-end select-none">
                        <a href={link} className={link === '' && 'hidden'} target="_blank" rel="noreferrer">
                            <button className="px-6 py-2 bg-slate-200 text-black dark:text-white dark:bg-slate-700 dark:hover:bg-slate-800 font-semibold rounded-md hover:bg-slate-300 transition-colors duration-200">
                                View Project
                            </button>
                        </a>
                        <a href={code} className={code === '' && 'hidden'} target="_blank" rel="noreferrer">
                            <button className="px-6 py-2 bg-slate-200 text-black dark:text-white dark:bg-slate-700 dark:hover:bg-slate-800 font-semibold rounded-md hover:bg-slate-300 transition-colors duration-200">
                                View Code
                            </button>
                        </a>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>Close</button>
                </form>
            </dialog>
        </>
    )
}

export default ViewDetails;
