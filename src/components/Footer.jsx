import React, { useState } from 'react'
import { RiGithubFill, RiLinkedinBoxFill, RiFacebookBoxFill, RiTwitterXFill, RiArrowRightUpLine, RiCloseLargeLine } from "react-icons/ri";

const Footer = () => {

    const [openForm, setOpenForm] = useState(false);

    const hitMe = () => setOpenForm(true);
    const closeForm = () => setOpenForm(false);

    const startYear = 2024;
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-white pt-12 pb-3">
            <div className=" container mx-auto">
                <div className="mx-5">
                    <h2 className="text-gray-300 text-4xl sm:text-5xl">I can help you with</h2>

                    <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div>
                            <p className="text-gray-500 border-b border-gray-500 py-2 ">01</p>
                            <h3 className="text-slate-400 text-2xl my-6">Design
                                <span><i clas="ri-palette-line"></i></span>
                            </h3>
                            <p className="text-slate-500">I possess expertise in web development design, enabling me to provide valuable assistance in crafting visually appealing and user-friendly digital experiences. Let's collaborate to enhance your project's design!</p>
                            <ul className="my-6 space-y-3 text-xs">
                                <li className="text-gray-400"><a className="hover:underline" href="#">Website</a></li>
                                <li className="text-gray-400"><a className="hover:underline" href="#">Mobile apps</a></li>
                                <li className="text-gray-400"><a className="hover:underline" href="#">Web apps</a></li>
                                <li className="text-gray-400"><a className="hover:underline" href="#">Design systems</a></li>
                                <li className="text-gray-400"><a className="hover:underline" href="#">Branding</a></li>
                            </ul>
                        </div>

                        <div>
                            <p className="text-gray-500 border-b border-gray-500 py-2 ">02</p>
                            <h3 className="text-slate-400 text-2xl my-6">Development
                                <span><i className="ri-braces-line"></i></span>
                            </h3>
                            <p className="text-slate-500">I specialize in web development and can assist you with various aspects of website creation, from design to implementation, ensuring a smooth and efficient development process.</p>
                            <ul className="my-6 space-y-3 text-xs">
                                <li className="text-gray-400"><a className="hover:underline" href="#">Website</a></li>
                                <li className="text-gray-400"><a className="hover:underline" href="#">Mobile apps</a></li>
                                <li className="text-gray-400"><a className="hover:underline" href="#">Web apps</a></li>
                            </ul>
                        </div>

                        <div>
                            <p className="text-gray-500 border-b border-gray-500 py-2 ">03</p>
                            <h3 className="text-slate-400 text-2xl my-6">Full Package
                                <span><i className="ri-inbox-unarchive-line"></i></span>
                            </h3>
                            <p className="text-slate-500">I specialize in providing a comprehensive Full Package solution for web development, ensuring that all aspects of your project, from design to deployment, are expertly handled with precision and care.</p>
                            <ul className="my-6 space-y-3 text-xs">
                                <li className="text-gray-400"><a className="hover:underline" href="#">Design + Dev</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col items-start space-x-0 xl:flex-row xl:items-center xl:space-x-52">
                        <div className="flex flex-col gap-5 my-10">
                            <div className="flex gap-3 ">
                                <div className="w-14">
                                    <img className='w-full h-full object-cover rounded-full select-none' src={'Images/Profile.png'} alt="Image" />
                                </div>
                                <a className="flex items-center bg-white text-black rounded-full px-6 py-3 hover:bg-gray-200 transition-colors duration-150 select-none" href="#form"
                                    onClick={hitMe}
                                >
                                    Hit Me Up
                                </a>
                                <a className="bg-sky-400 text-white p-4 rounded-full hover:bg-sky-500 transition-colors duration-150" href="#">
                                    <RiArrowRightUpLine size={24}/>
                                </a>
                            </div>
                            <small>Don't know if fits your needs or not?<a className="underline" href="#">Let's have a call</a></small>
                        </div>

                        <div id="solution" className="space-y-3 max-w-xl">
                            <div>
                                <h1 className="text-2xl text-slate-500 font-bold">How can I reach out to discuss a potential collaboration?</h1>
                                <p className="text-slate-600">Feel free to drop me a message via the contact form below. I'm eager to hear about your ideas!</p>
                            </div>
                            <div>
                                <h1 className="text-2xl text-slate-500 font-bold">Do you offer freelance services or consultations?</h1>
                                <p className="text-slate-600">Absolutely! Get in touch to explore how I can assist you with your creative or professional endeavors.</p>
                            </div>
                        </div>
                    </div>

                    <div id="form" className={`max-w-screen-sm overflow-auto px-1 h-0 ${openForm === true && 'h-full'}`}>
                        <div className='flex justify-between items-center'>
                            <h3 className="text-3xl my-3">Get In touch</h3>
                            <RiCloseLargeLine size={24} 
                                className='cursor-pointer hover:text-red-500 transition-colors duration-150'
                                onClick={closeForm}
                            />
                        </div>
                        <form action="#">
                            <div className="space-y-3">
                                <div className="flex flex-col gap-2 sm:flex-row">
                                    <div className="flex flex-col w-full">
                                        <label for="name">Your Name:</label>
                                        <input className="bg-transparent border border-slate-700 p-2 rounded outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-50 transition duration-300 ease-in-out" type="text" placeholder="Enter your name" required/>
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <label for="name">Your Email:</label>
                                        <input className="bg-transparent border border-slate-700 p-2 rounded outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-50 transition duration-300 ease-in-out" type="text" placeholder="Enter your email" required/>
                                    </div>
                                </div>
                                <textarea className="bg-transparent border border-slate-700 p-1 rounded w-full outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-50 transition duration-300 ease-in-out" name="" id="" cols="30" rows="10" placeholder="Your message..." required></textarea>
                            </div>
                            <input className="bg-slate-700 p-2 mt-3 rounded hover:bg-slate-600 transition-colors duration-150" type="submit" value="Send Message"/>
                        </form>
                    </div>

                    <p className="text-gray-500 border-b border-gray-500 py-2 uppercase mt-5 mb-4 sm:mt-16">Social Media</p>

                    <ul className="flex space-x-5">
                        <li className="text-gray-300 hover:text-blue-400 transition-colors duration-200 ">
                            <a href="https://github.com/BrandonBlkk" target="_blank">
                                <RiGithubFill size={24}/>
                            </a>
                        </li>
                        <li className="text-gray-300 hover:text-blue-400 transition-colors duration-200 ">
                            <a href="https://www.linkedin.com/in/brandon-undefined-2935a528b/" target="_blank">
                                <RiLinkedinBoxFill size={24}/>
                            </a>
                        </li>
                        <li className="text-gray-300 hover:text-blue-400 transition-colors duration-200 ">
                            <a href="https://www.facebook.com/profile.php?id=100058219466401" target="_blank">
                                <RiFacebookBoxFill size={24}/>
                            </a>
                        </li>
                        <li className="text-gray-300 hover:text-blue-400 transition-colors duration-200 ">
                            <a href="https://twitter.com/home" target="_blank">
                                <RiTwitterXFill size={24}/>
                            </a>
                        </li>
                    </ul>
                    <p className="text-gray-600">© {currentYear === startYear ? currentYear : `${startYear}-${currentYear}`} Brandon Portfolio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
