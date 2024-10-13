import { RiCss3Line, RiHtml5Line, RiJavascriptLine, RiReactjsLine, RiTailwindCssLine } from "react-icons/ri";
import { FaPhp } from "react-icons/fa6";

export const items = [
    {
        id: 1,
        img: 'Images/Screenshot 2024-04-21 005125.png',
        title: 'Retail Camping Website with only HTML and CSS',
        responsive: true,
        project: 'First year project',
        link: 'https://brandonblkk.github.io/Retail-Camping/index.html',
        tech: [
            <RiHtml5Line size={24} className='text-orange-500' />,
            <RiCss3Line size={24} className='text-blue-500' />
        ],
        category: 'design'
    },
    {
        id: 2,
        img: 'Images/Screenshot 2024-03-24 020735.png',
        title: 'SMC(Social Media Campaigns) was built with HTML, CSS, JavaScript and PHP',
        responsive: true,
        project: 'Second year project',
        link: 'https://github.com/BrandonBlkk/SMC-Social-Media-Campaigns-',
        tech: [
            <RiHtml5Line size={24} className='text-orange-500' />,
            <RiCss3Line size={24} className='text-blue-500' />,
            <RiJavascriptLine size={24} className="text-yellow-500"/>,
            <FaPhp size={24} className="text-purple-500"/> 
        ],
        category: 'dev'
    },
    {
        id: 3,
        img: 'Images/Screenshot 2024-04-23 001346.png',
        title: 'AmberHill Cafe website with HTML and CSS',
        responsive: false,
        project: 'Own project',
        link: 'https://brandonblkk.github.io/Amberhill-Cafe/CoffeeWebsite.html',
        tech: [
            <RiHtml5Line size={24} className='text-orange-500' />,
            <RiCss3Line size={24} className='text-blue-500' />
        ],
        category: 'design'
    },
    {
        id: 4,
        img: 'Images/Screenshot 2024-04-21 180753.png',
        title: 'Cloning spotify with only HTML and CSS',
        responsive: false,
        project: 'Own project',
        link: 'https://brandonblkk.github.io/Spotify-Clone/SpotifyClone.html',
        tech: [
            <RiHtml5Line size={24} className='text-orange-500' />,
            <RiCss3Line size={24} className='text-blue-500' />
        ],
        category: 'design'
    },
    {
        id: 5,
        img: 'Images/Screenshot 2024-04-21 011401.png',
        title: 'Shopping website using HTML, CSS, Tailwind CSS and JavaScript',
        responsive: false,
        project: 'Own project',
        link: 'https://brandonblkk.github.io/Shopping-Website/TailwindCSS.html',
        tech: [
            <RiHtml5Line size={24} className='text-orange-500' />,
            <RiCss3Line size={24} className='text-blue-500' />,
            <RiJavascriptLine size={24} className="text-yellow-500"/>,
            <RiTailwindCssLine size={24} className="text-blue-500"/> 
        ],
        category: 'design'
    },
    {
        id: 6,
        img: 'Images/Screenshot 2024-10-08 014652.png',
        title: "VELIRO men's clothing and accessories website with HTML, CSS, Tailwind CSS, JavaScript and PHP",
        responsive: true,
        project: 'Second year project',
        link: 'https://github.com/BrandonBlkk/VELIRO',
        tech: [
            <RiHtml5Line size={24} className='text-orange-500' />,
            <RiCss3Line size={24} className='text-blue-500' />,
            <RiJavascriptLine size={24} className="text-yellow-500"/>,
            <RiTailwindCssLine size={24} className="text-blue-500"/>,
            <FaPhp size={24} className="text-purple-500"/> 
        ],
        category: 'dev'
    },
    {
        id: 7,
        img: 'Images/Screenshot 2024-10-10 010420.png',
        title: "Weather web app with HTML, CSS and JavaScript",
        responsive: true,
        project: 'Inspiration project',
        link: 'https://brandonblkk.github.io/Weather-App/WeatherApp.html',
        tech: [
            <RiHtml5Line size={24} className='text-orange-500' />,
            <RiCss3Line size={24} className='text-blue-500' />,
            <RiJavascriptLine size={24} className="text-yellow-500"/>,
        ],
        category: 'design'
    },
    {
        id: 8,
        img: 'Images/Screenshot 2024-10-10 005100.png',
        title: "Netflix clone with React JS",
        responsive: true,
        project: 'Own project',
        link: '',
        tech: [
            <RiHtml5Line size={24} className='text-orange-500' />,
            <RiCss3Line size={24} className='text-blue-500' />,
            <RiJavascriptLine size={24} className="text-yellow-500"/>,
            <RiTailwindCssLine size={24} className="text-blue-500"/>,
            <RiReactjsLine size={24} className="text-cyan-500"/>
        ],
        category: 'design'
    },
    {
        id: 9,
        img: 'Images/Screenshot 2024-10-10 003837.png',
        title: "Propose to someone",
        responsive: true,
        project: 'Own project',
        link: 'https://brandonblkk.github.io/Gift/WillYouBeMyLover.html',
        tech: [
            <RiHtml5Line size={24} className='text-orange-500' />,
            <RiCss3Line size={24} className='text-blue-500' />,
            <RiJavascriptLine size={24} className="text-yellow-500"/>,
            <RiTailwindCssLine size={24} className="text-blue-500"/>,
        ],
        category: 'design'
    },
    {
        id: 10,
        img: 'Images/Screenshot 2024-10-10 220453.png',
        title: "My travel website with React JS",
        responsive: true,
        project: 'Inspiration project',
        link: 'https://github.com/BrandonBlkk/My-Travel',
        tech: [
            <RiHtml5Line size={24} className='text-orange-500' />,
            <RiCss3Line size={24} className='text-blue-500' />,
            <RiJavascriptLine size={24} className="text-yellow-500"/>,
            <RiTailwindCssLine size={24} className="text-blue-500"/>,
            <RiReactjsLine size={24} className="text-cyan-500"/>
        ],
        category: 'design'
    }
]