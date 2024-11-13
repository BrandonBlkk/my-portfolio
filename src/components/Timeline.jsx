import React from 'react'
import { FcCalendar } from "react-icons/fc";
import { FcTimeline } from "react-icons/fc";
import Modal from './Modal';
import TimelineItem from './TimelineItem';

const Timeline = () => {
    return (
        <>
            <h1 className='flex items-center gap-2 text-2xl sm:text-3xl font-semibold justify-center mb-10'>
                <FcTimeline size={30}/>
                Education Timeline
            </h1>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical max-w-7xl mx-auto px-5">
                <li>
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5 text-sky-500">
                            <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                        </svg>
                    </div>
                    <TimelineItem 
                        timeline={'timeline-start mb-5 md:text-end'}
                        startDate={2019}
                        endDate={2020}
                        durationClass={'flex items-center justify-start md:justify-end gap-1'}
                        duration={'1 year'}
                        title={'B.E.H.S (2) Yankin (High School)'}
                        description={`Respected high school where I built a strong academic foundation and developed lifelong skills. 
                        Located in Yangon, Myanmar, it provided me with valuable learning experiences and opportunities to connect with supportive teachers 
                        and friends, shaping both my personal and academic growth.`}
                        link={''}
                    />
                    <hr className='bg-green-500 dark:bg-green-600'/>
                </li>
                <li>
                    <hr className='bg-green-500 dark:bg-green-600'/>
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5 text-sky-500">
                            <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                        </svg>
                    </div>
                    <TimelineItem 
                        timeline={'timeline-end mb-5'}
                        startDate={2022}
                        endDate={''}
                        durationClass={'flex items-center justify-start gap-1'}
                        duration={'6 months'}
                        title={'NCC Level 3 Diploma in Computing (Foundation)'}
                        description={`Provided a solid foundation in essential computing concepts, including programming, web development, and networking.
                        This course deepened my understanding of the tech industry, equipped me with valuable skills, and prepared me 
                        for advanced studies in IT and computing.`}
                        link={'my_modal_3'}
                    />
                    <Modal 
                        id={'my_modal_3'}
                        img={'Images/IMG_0933.jpg'}
                    />
                    <hr className='bg-green-500 dark:bg-green-600'/>
                </li>
                <li>
                    <hr className='bg-green-500 dark:bg-green-600'/>
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5 text-sky-500">
                            <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                        </svg>
                    </div>
                    <TimelineItem 
                        timeline={'timeline-start mb-5 md:text-end'}
                        startDate={2022}
                        endDate={2023}
                        durationClass={'flex items-center justify-start md:justify-end gap-1'}
                        duration={'1 year'}
                        title={'NCC Level 4 Diploma in Computing (First Year)'}
                        description={`Covers the essentials of IT, programming, and web development. This qualification builds a strong foundation in 
                        computing skills, providing hands-on experience in coding, databases, and networks, ideal for starting a career in technology.`}
                        link={'my_modal_4'}
                    />
                    <Modal
                        id={'my_modal_4'}
                        img={'Images/IMG_0934.jpg'}
                    />
                    <hr className='bg-green-500 dark:bg-green-600'/>
                </li>
                <li>
                    <hr className='bg-green-500 dark:bg-green-600'/>
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5 text-sky-500">
                            <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                        </svg>
                    </div>
                    <TimelineItem 
                        timeline={'timeline-end mb-5'}
                        startDate={2023}
                        endDate={2024}
                        durationClass={'flex items-center justify-start gap-1'}
                        duration={'1 year'}
                        title={'NCC Level 5 Diploma in Computing (Second Year)'}
                        description={`Built strong skills in programming, database management, and networking through hands-on projects and 
                        in-depth coursework. This diploma provided a solid foundation in computing concepts, preparing me 
                        for real-world tech challenges and further studies.`}
                        link={'my_modal_5'}
                    />
                    <Modal 
                        id={'my_modal_5'}
                        img={'Images/0569BF4D-FBC1-42EA-8D22-1F2C1D486606.png'}
                    />
                    <hr className='dark:bg-slate-700'/>
                </li>
                <li>
                    <hr className='dark:bg-slate-700'/>
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5 text-yellow-500">
                            <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                        </svg>
                    </div>
                    <TimelineItem 
                        timeline={'timeline-start mb-5 md:text-end'}
                        startDate={2024}
                        endDate={'Present'}
                        durationClass={'flex items-center justify-start md:justify-end gap-1'}
                        duration={'1 year'}
                        title={'B.Sc.(Hons) Computing (Final Year)'}
                        description={`Comprehensive program focused on practical skills in programming, web / mobile development, database management, and systems
                        analysis. This final year honed my technical knowledge, problem-solving abilities, and prepared me 
                        for real-world computing challenges.`}
                        link={''}
                    />
                </li>
            </ul>
        </>
    )
}

export default Timeline
