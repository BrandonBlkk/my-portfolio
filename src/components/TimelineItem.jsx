import React from 'react'
import { FcCalendar } from "react-icons/fc";

const TimelineItem = ({ timeline, startDate, endDate, durationClass, duration, title, description, link }) => {
    return (
        <div className={timeline}>
            <time className="font-mono italic">{startDate} {endDate !== '' && '-'} {endDate}</time>
            <div className={durationClass}>
                <FcCalendar size={20}/>
                <p className='font-semibold text'>{duration}</p>
            </div>
            <div className="text-lg font-bold">{title}</div>
            <p className='text-slate-700'>{description}</p>
            <button className={`${link === '' ? 'hidden' : 'bg-slate-200 py-1 px-3 rounded-md font-semibold mt-1 hover:bg-slate-300 transition-colors duration-150 select-none'}`}  onClick={() => document.getElementById(link).showModal()}>View result</button>
        </div>
    )
}

export default TimelineItem
