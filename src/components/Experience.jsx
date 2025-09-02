import React, { useEffect, useState } from 'react'
import { items } from '../constants';

function Experience() {

    const [yearExp, setYearExp] = useState(0);
    
        useEffect(() => {
            const currentYear = new Date().getFullYear();
            const startYear = 2023;
            setYearExp(currentYear - startYear);
        });
    
        const text = "As a junior web developer, I craft intuitive interfaces, optimize user experiences, and innovate with code to bring designs to life.";

  return (
    <section class="bg-white/10 backdrop-blur-0 dark:backdrop-blur-sm text-black dark:text-white rounded-lg sm:rounded-t-full shadow-none dark:shadow-xl p-8 pb-0 sm:pb-32 border border-b-0 border-white/30">
        <div className="flex justify-center gap-0 px-3 sm:gap-16">
            <div className="text-center">
                <p className="text-base sm:text-2xl">0{yearExp}+</p>
                <p className="text-base sm:text-2xl">Years experience</p>
            </div>
            <div className="text-center">
                <p className="text-base sm:text-2xl">0{items.length}+</p>
                <p className="text-base sm:text-2xl">Completed projects</p>
            </div>
            <div className="text-center">
                <p className="text-base sm:text-2xl">No</p>
                <p className="text-base sm:text-2xl">Company worked</p>
            </div>
        </div>
    </section>
  )
}

export default Experience
