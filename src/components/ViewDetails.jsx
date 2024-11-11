import React from 'react'

const ViewDetails = ({ img, title, link, code }) => {
    return (
        <>
            <button className="bg-white py-2 px-3 rounded-md font-semibold mt-1 hover:bg-slate-100 transition-colors duration-150 select-none'" onClick={() => document.getElementById('my_modal_2').showModal()}>View details</button>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box card bg-base-100 max-w-[600px] shadow-xl text-black p-3">
                    <figure className='select-none'>
                        <img src={img} alt={title} />
                    </figure>
                    <div className="card-body py-3 px-0">
                        <h2 className="card-title">
                            {title}
                        </h2>
                        <div className="card-actions justify-end mt-3 select-none">
                            <a href={link} className={link === '' && 'hidden'} target="_blank" rel="noreferrer">
                                <button className="px-6 py-2 bg-slate-200 text-black font-semibold rounded-md hover:bg-slate-300 transition-colors duration-200">
                                    View Project
                                </button>
                            </a>
                            <a href={code} className={code === '' && 'hidden'} target="_blank" rel="noreferrer">
                                <button className="px-6 py-2 bg-slate-200 text-black font-semibold rounded-md hover:bg-slate-300 transition-colors duration-200">
                                    View Code
                                </button>
                            </a>
                        </div>
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
