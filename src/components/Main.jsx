import React, { useEffect, useState } from 'react';
import Card from './Card';
import { items } from '../constants';
import { RiArrowUpWideLine } from 'react-icons/ri'; 

const Main = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [scrollUp, setScrollUp] = useState(false);
    const [currentPage, setCurrentPage] = useState(1); 

    const itemsPerPage = 8; 

    const allProject = () => {
        setActiveTab('all');
        setCurrentPage(1); 
    };
    const designProject = () => {
        setActiveTab('design');
        setCurrentPage(1); 
    };
    const developmentProject = () => {
        setActiveTab('dev');
        setCurrentPage(1); 
    };

    const filterItems = () => {
        if (activeTab === 'all') return items;
        if (activeTab === 'design') return items.filter(item => item.category === 'design');
        if (activeTab === 'dev') return items.filter(item => item.category === 'dev');
        return items;
    };

    // Pagination
    const filteredItems = filterItems();
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    const startIdx = (currentPage - 1) * itemsPerPage;
    const currentItems = filteredItems.slice(startIdx, startIdx + itemsPerPage);

    const handlePageChange = (pageNum) => {
        setCurrentPage(pageNum);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setScrollUp(true);
            } else {
                setScrollUp(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div id='work' className="container mx-auto my-12">
            <div className="mx-5">
                <h2 className="text-4xl sm:text-5xl">The work I do</h2>
            </div>

            <div className="flex flex-col gap-5 justify-between items-center mx-5 my-5 sm:flex-row">
                <div className="flex flex-wrap gap-3">
                    <p 
                        id="all" 
                        className={`flex items-center justify-center border px-5 py-4 rounded-full select-none cursor-pointer transition-colors duration-150 hover:border-slate-300 dark:border-slate-500 ${activeTab === 'all' ? 'bg-slate-900 text-white dark:bg-white dark:text-black' : 'border'}`}
                        onClick={allProject}
                    >
                        All
                    </p>
                    <p 
                        id="design" 
                        className={`flex items-center justify-center border px-5 py-4 rounded-full select-none cursor-pointer transition-colors duration-150 hover:border-slate-300 dark:border-slate-500 ${activeTab === 'design' ? 'bg-slate-900 text-white dark:bg-white dark:text-black' : 'border'}`}
                        onClick={designProject}
                    >
                        Design
                    </p>
                    <p 
                        id="dev" 
                        className={`flex items-center justify-center border px-5 py-4 rounded-full select-none cursor-pointer transition-colors duration-150 hover:border-slate-300 dark:border-slate-500 ${activeTab === 'dev' ? 'bg-slate-900 text-white dark:bg-white dark:text-black' : 'border'}`}
                        onClick={developmentProject}
                    >
                        Development
                    </p>
                </div>

                <div className="flex justify-center">
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button 
                                key={i + 1} 
                                className={`mx-1 px-4 py-2 rounded-full border transition-colors duration-150 hover:border-slate-300 dark:border-slate-500 ${currentPage === i + 1 && 'bg-slate-900 text-white dark:bg-white dark:text-black'}`}
                                onClick={() => handlePageChange(i + 1)}
                            >
                                {i + 1}
                            </button>
                        ))}
                </div>
            </div>

            {/* Cards Display */}
            <div className="flex justify-center flex-wrap gap-y-2">
                {currentItems.map(item => (
                    <Card 
                        key={item.id}
                        img={item.img}
                        title={item.title}
                        project={item.project}
                        responsive={item.responsive}
                        tech={item.tech}
                        link={item.link}
                    />
                ))}
            </div>

            <a href="#" id="scrollUp" 
                className={`fixed right-20 -bottom-20 border border-slate-500 hidden items-center gap-5 bg-slate-900 rounded-t-full text-white px-5 py-3 z-10 dark:bg-white dark:text-black transition-all duration-300 lg:flex ${scrollUp ? 'bottom-0' : '-bottom-20'}`}
            >
                <RiArrowUpWideLine size={20}/>
            </a>
        </div>
    );
};

export default Main;