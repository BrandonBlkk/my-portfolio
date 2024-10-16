import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const MoveRightLoader = () => {
    const [scrollWidth, setScrollWidth] = useState(0);

    // Handle scroll progress bar
    useEffect(() => {
        const handleScroll = () => {
            const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercentage = (window.scrollY / scrollableHeight) * 100;
            setScrollWidth(scrollPercentage);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div id="moveRightLoader" className="fixed top-0 w-full h-1 z-10">
           <p id="move-right" className="absolute top-0 bg-blue-400 h-1" style={{ width: `${scrollWidth}%` }}></p>
       </div>
    )
}

export default MoveRightLoader
