import React from 'react'

const Modal = ({ id, img }) => {
    return (
        <dialog id={id} className="modal">
            <div className="modal-box card bg-base-100 max-w-[800px] shadow-xl rounded-lg text-black p-3 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                <img src={img} alt="Result" />  
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>Close</button>
            </form>
        </dialog>
    )
}

export default Modal
