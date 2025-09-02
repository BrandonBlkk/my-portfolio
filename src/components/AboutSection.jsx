import { RiMailDownloadLine } from 'react-icons/ri';
import { useEffect, useState, useRef } from 'react';

const AboutSection = () => {
    const [rotation, setRotation] = useState(15); // Initial rotation
    const lastScrollY = useRef(0);
    const currentRotation = useRef(15); // Track current rotation value
    const animationRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const scrollDirection = scrollTop > lastScrollY.current ? 'down' : 'up';
            lastScrollY.current = scrollTop;
            
            // Calculate target rotation based on scroll direction
            const rotationStep = 5; // Adjust for sensitivity
            
            let targetRotation;
            if (scrollDirection === 'down') {
                // Rotate clockwise (decrease angle) when scrolling down
                targetRotation = Math.max(-15, currentRotation.current - rotationStep);
            } else {
                // Rotate counter-clockwise (increase angle) when scrolling up
                targetRotation = Math.min(15, currentRotation.current + rotationStep);
            }
            
            // Cancel any existing animation
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            
            // Smooth animation using requestAnimationFrame
            const animateRotation = () => {
                const current = currentRotation.current;
                const diff = targetRotation - current;
                
                // If the difference is very small, just set the target directly
                if (Math.abs(diff) < 0.1) {
                    currentRotation.current = targetRotation;
                    setRotation(targetRotation);
                    return;
                }
                
                // Ease towards the target rotation
                currentRotation.current = current + diff * 0.1;
                setRotation(currentRotation.current);
                
                animationRef.current = requestAnimationFrame(animateRotation);
            };
            
            animationRef.current = requestAnimationFrame(animateRotation);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <section className="my-12 px-5 flex items-cente flex-col md:flex-row gap-16">
            <div className="md:max-w-2xl lg:max-w-3xl xl:max-w-3xl font-thin">
                <h3 className="text-base mx-5 sm:text-6xl tracking-wide">
                    Hi, I'm <span className="text-blue-400">Kyaw Zayar Tun</span>, <p>a web developer</p>
                    <p className="mt-4">
                        Let's transform your ideas into powerful digital experiences. Welcome to my portfolio!
                    </p>
                </h3>
                <button
                    className="inline-flex items-center gap-2 mx-6 mt-5 select-none hover:text-sky-500 transition-colors duration-200"
                    onClick={() => document.getElementById('cv').showModal()}
                >
                    <p>Download CV</p>
                    <RiMailDownloadLine size={20} />
                </button>
                <dialog id="cv" className="modal">
                    <div className="modal-box card bg-base-100 max-w-[600px] shadow-xl rounded-md text-black p-3 relative scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                        <div>
                            <img src="Images/f1f4a581-bd30-4552-90e2-3e4420cebb52-cover.png" alt="CV" />
                        </div>
                        <p className='absolute text-5xl opacity-10'>Sample CV</p>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>Close</button>
                    </form>
                </dialog>
            </div>

            <div className="select-none">
                <img
                    className='w-full h-full object-cover transition-transform duration-300 ease-out'
                    style={{ transform: `rotate(${rotation}deg)` }}
                    src={'Images/Laptop.png'}
                    alt="Profile of Kyaw Zayar Tun"
                />
            </div>
        </section>
    )
}

export default AboutSection