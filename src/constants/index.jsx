import { RiBootstrapLine, RiCss3Line, RiHtml5Line, RiJavascriptLine, RiReactjsFill, RiReactjsLine, RiTailwindCssLine } from "react-icons/ri";
import { FaPhp, FaGitAlt } from "react-icons/fa6";
import { FaLaravel } from "react-icons/fa";
import { PiDeviceMobileSpeakerDuotone, PiDeviceTabletSpeakerDuotone, PiDevicesDuotone } from "react-icons/pi";

export const skills = [
    {
        id: 1,
        tech: <RiHtml5Line size={24} className='text-orange-500' />,
        name: 'HTML',
        used: "57.62% used"
    },
    {
        id: 2,
        tech: <RiCss3Line size={24} className='text-blue-500' />,
        name: 'CSS',
        used: "6.38% used"
    },
    {
        id: 3,
        tech: <RiJavascriptLine size={24} className="text-yellow-500"/>,
        name: 'JavaScript',
        used: "3.77% used"
    },
    {
        id: 4,
        tech: <RiTailwindCssLine size={24} className="text-blue-500"/> ,
        name: 'Tailwind CSS',
        used: "30.45% used"
    },
    {
        id: 5,
        tech: <RiBootstrapLine size={24} className="text-purple-500"/>,
        name: 'Bootstrap',
        used: "0% used"
    },
    {
        id: 6,
        tech: <RiReactjsFill size={24} className='text-cyan-500'/>,
        name: 'React',
        used: "3.77% used"
    },
    {
        id: 7,
        tech: <FaPhp size={24} className='text-indigo-500'/>,
        name: 'PHP',
        used: "31.89% used"
    },
    {
        id: 8,
        tech: <FaGitAlt size={24} className='text-orange-500'/>,
        name: 'Git',
        used: "48.97% used"
    }
]

export const items = [
    {
        id: 1,
        modalID: 'modal_1',
        img: 'Images/Screenshot 2024-04-21 005125.png',
        title: 'Retail Camping Website with only HTML and CSS',
        description: `This project showcases retail camping website with only HTML and CSS functionality, including responsive design, a static UI.
        Features include product display, add to cart and review.`,
        feature: [
            'Responsive Layout (if applicable)',
            'Modern UI Design',
            'Interactive Elements'
        ],
        responsive: true,
        device: [
            <PiDeviceMobileSpeakerDuotone size={22}/>,
            <PiDeviceTabletSpeakerDuotone size={27}/>,
            <PiDevicesDuotone size={35}/>
        ],
        project: 'First year project',
        link: 'https://brandonblkk.github.io/Retail-Camping/index.html',
        code: 'https://github.com/BrandonBlkk/Retail-Camping',
        tech: [
            <RiHtml5Line size={24} className='text-orange-500' />,
            <RiCss3Line size={24} className='text-blue-500' />
        ],
        category: 'design'
    },
    {
        id: 2,
        modalID: 'modal_2',
        img: 'Images/Screenshot 2024-03-24 020735.png',
        title: 'SMC(Social Media Campaigns) was built with HTML, CSS, JavaScript and PHP',
        description: `This project showcases the Weather web app with HTML, CSS and JavaScript functionality, including responsive design, a dynamic UI, and integration with a backend API.
        Additional features include  real-time updates, and data visualization.`,
        feature: [
            'Responsive Layout (if applicable)',
            'Modern UI Design',
            'Interactive Elements',
            'Fast Loading Speed',
            'Cross-browser Compatibility',
            'Search Funtionality',
            'Language Compatibility'
        ],
        responsive: true,
        device: [
            <PiDeviceMobileSpeakerDuotone size={22}/>,
            <PiDeviceTabletSpeakerDuotone size={27}/>,
            <PiDevicesDuotone size={35}/>
        ],
        project: 'Second year project',
        link: '',
        code: 'https://github.com/BrandonBlkk/SMC-Social-Media-Campaigns-',
        tech: [
            <RiHtml5Line size={24} className='text-orange-500' />,
            <RiCss3Line size={24} className='text-blue-500' />,
            <RiJavascriptLine size={24} className="text-yellow-500"/>,
            <FaPhp size={24} className="text-purple-500"/> 
        ],
        category: 'dev',
    },
    {
        id: 3,
        modalID: 'modal_3',
        img: 'Images/Screenshot 2024-04-23 001346.png',
        title: 'AmberHill Cafe website with HTML and CSS',
        description: `This project showcases the AmberHill Cafe website, built with HTML and CSS, featuring a clean, responsive design. 
        It includes essential elements like menu displays, contact information, and intuitive navigation, providing a polished online 
        presence with a user-friendly interface perfect for small businesses.`,
        feature: [
            'Modern UI Design',
            'Cross-browser Compatibility'
        ],
        responsive: false,
        device: [
            <PiDevicesDuotone size={35}/>
        ],
        project: 'Own project',
        link: 'https://brandonblkk.github.io/Amberhill-Cafe/CoffeeWebsite.html',
        code: 'https://github.com/BrandonBlkk/Amberhill-Cafe',
        tech: [
            <RiHtml5Line size={24} className='text-orange-500' />,
            <RiCss3Line size={24} className='text-blue-500' />
        ],
        category: 'design'
    },
    {
        id: 4,
        modalID: 'modal_4',
        img: 'Images/Screenshot 2024-04-21 180753.png',
        title: 'Cloning spotify with only HTML and CSS',
        description: `This project showcases a Spotify clone that replicates Spotify’s interface using only HTML and CSS. 
        It achieves a visually faithful design with advanced CSS techniques like flexbox and grid, creating a responsive layout 
        and static front-end experience without JavaScript or backend functionality.`,
        feature: [
            'Modern UI Design',
            'Cross-browser Compatibility'
        ],
        responsive: false,
        device: [
            <PiDevicesDuotone size={35}/>
        ],
        project: 'Own project',
        link: 'https://brandonblkk.github.io/Spotify-Clone/SpotifyClone.html',
        code: 'https://github.com/BrandonBlkk/Spotify-Clone?tab=readme-ov-file',
        tech: [
            <RiHtml5Line size={24} className='text-orange-500' />,
            <RiCss3Line size={24} className='text-blue-500' />
        ],
        category: 'design'
    },
    {
        id: 5,
        modalID: 'modal_5',
        img: 'Images/Screenshot 2024-04-21 011401.png',
        title: 'Shopping website using HTML, CSS, Tailwind CSS and JavaScript',
        description: `This project showcases a shopping website built with HTML, CSS, Tailwind CSS, and JavaScript. 
        It features a responsive and dynamic user experience with a modern design, smooth navigation, and 
        interactive functionality enhanced by Tailwind CSS and JavaScript.`,
        feature: [
            'Responsive Layout (if applicable)',
            'Modern UI Design',
            'Interactive Elements',
            'Fast Loading Speed',
            'Cross-browser Compatibility'
        ],
        responsive: false,
        device: [
            <PiDeviceMobileSpeakerDuotone size={22}/>,
            <PiDeviceTabletSpeakerDuotone size={27}/>,
            <PiDevicesDuotone size={35}/>
        ],
        project: 'Own project',
        link: 'https://brandonblkk.github.io/Shopping-Website/TailwindCSS.html',
        code: 'https://github.com/BrandonBlkk/Shopping-Website',
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
        modalID: 'modal_6',
        img: 'Images/Screenshot 2024-10-08 014652.png',
        title: "VELIRO men's clothing and accessories website with HTML, CSS, Tailwind CSS, JavaScript and PHP",
        description: `This project showcases a fully responsive men's clothing and accessories e-commerce website, developed with 
        HTML, CSS, Tailwind CSS, JavaScript, and PHP. It includes dynamic elements for smooth browsing and a backend powered by PHP
        for managing transactions and user interactions.`,
        feature: [
            'Responsive Layout (if applicable)',
            'Modern UI Design',
            'Interactive Elements',
            'Fast Loading Speed',
            'Cross-browser Compatibility',
            'Search Funtionality',
            'Language Compatibility'
        ],
        responsive: true,
        device: [
            <PiDeviceMobileSpeakerDuotone size={22}/>,
            <PiDeviceTabletSpeakerDuotone size={27}/>,
            <PiDevicesDuotone size={35}/>
        ],
        project: 'Second year project',
        link: '',
        code: 'https://github.com/BrandonBlkk/VELIRO',
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
        modalID: 'modal_7',
        img: 'Images/Screenshot 2024-10-10 010420.png',
        title: "Weather web app with HTML, CSS and JavaScript",
        description: `This project showcases the Weather web app with HTML, CSS and JavaScript functionality, including responsive design, a dynamic UI, and integration with a backend API.
        Additional features include  real-time updates, and data visualization.`,
        feature: [
            'Responsive Layout (if applicable)',
            'Modern UI Design',
            'Interactive Elements',
            'Fast Loading Speed',
            'Cross-browser Compatibility'
        ],
        responsive: true,
        device: [
            <PiDeviceMobileSpeakerDuotone size={22}/>,
            <PiDeviceTabletSpeakerDuotone size={27}/>,
            <PiDevicesDuotone size={35}/>
        ],
        project: 'Inspiration project',
        link: 'https://brandonblkk.github.io/Weather-App/WeatherApp.html',
        code: 'https://github.com/BrandonBlkk/Weather-App',
        tech: [
            <RiHtml5Line size={24} className='text-orange-500' />,
            <RiCss3Line size={24} className='text-blue-500' />,
            <RiJavascriptLine size={24} className="text-yellow-500"/>,
        ],
        category: 'design'
    },
    {
        id: 8,
        modalID: 'modal_8',
        img: 'Images/Screenshot 2024-10-10 005100.png',
        title: "Netflix clone with React JS",
        description: `This project showcases a Netflix clone built with React JS, Tailwind CSS, and JavaScript. It replicates the layout
        and design of the popular streaming service, providing a responsive and visually appealing experience with a smooth, 
        component-based architecture using React.`,
        feature: [
            'Responsive Layout (if applicable)',
            'Modern UI Design',
            'Interactive Elements',
            'Fast Loading Speed',
            'Cross-browser Compatibility'
        ],
        responsive: true,
        device: [
            <PiDeviceMobileSpeakerDuotone size={22}/>,
            <PiDeviceTabletSpeakerDuotone size={27}/>,
            <PiDevicesDuotone size={35}/>
        ],
        project: 'Inspiration project',
        link: '',
        code: 'https://github.com/BrandonBlkk/Netflix-clone',
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
        modalID: 'modal_9',
        img: 'Images/Screenshot 2024-10-10 003837.png',
        title: "Propose to someone",
        description: `This project showcases an interactive web app built with HTML, CSS, JavaScript, and Tailwind CSS, designed to 
        creatively present a romantic proposal. It features a visually engaging, responsive design with JavaScript-driven interactivity 
        and playful animations.`,
        feature: [
            'Responsive Layout (if applicable)',
            'Modern UI Design',
            'Interactive Elements',
            'Fast Loading Speed',
            'Cross-browser Compatibility'
        ],
        responsive: true,
        device: [
            <PiDeviceMobileSpeakerDuotone size={22}/>,
            <PiDeviceTabletSpeakerDuotone size={27}/>,
            <PiDevicesDuotone size={35}/>
        ],
        project: 'Own project',
        link: 'https://brandonblkk.github.io/Gift/WillYouBeMyLover.html',
        code: 'https://github.com/BrandonBlkk/Gift',
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
        modalID: 'modal_10',
        img: 'Images/Screenshot 2024-10-10 220453.png',
        title: "My travel website with React JS",
        description: `This project showcases a travel website developed with React JS, HTML, CSS, Tailwind CSS, and JavaScript. 
        It offers a fully responsive and dynamic user interface, highlighting travel destinations with advanced React skills 
        for a smooth and engaging experience.`,
        feature: [
            'Responsive Layout (if applicable)',
            'Modern UI Design',
            'Cross-browser Compatibility'
        ],
        responsive: true,
        device: [
            <PiDeviceMobileSpeakerDuotone size={22}/>,
            <PiDeviceTabletSpeakerDuotone size={27}/>,
            <PiDevicesDuotone size={35}/>
        ],
        project: 'Inspiration project',
        link: '',
        code: 'https://github.com/BrandonBlkk/My-Travel',
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
        id: 11,
        modalID: 'modal_11',
        img: 'Images/Screenshot 2025-04-25 174658.png',
        title: "Astrornix Annual University Magazine Website",
        description: `This project showcases a travel website developed with React JS, HTML, CSS, Tailwind CSS, and JavaScript. 
        It offers a fully responsive and dynamic user interface, highlighting travel destinations with advanced React skills 
        for a smooth and engaging experience.`,
        feature: [
            'Responsive Layout (if applicable)',
            'Modern UI Design',
            'Cross-browser Compatibility'
        ],
        responsive: true,
        device: [
            <PiDeviceMobileSpeakerDuotone size={22}/>,
            <PiDeviceTabletSpeakerDuotone size={27}/>,
            <PiDevicesDuotone size={35}/>
        ],
        project: 'Group project',
        link: '',
        code: 'https://github.com/BrandonBlkk/My-Travel',
        tech: [
            <RiHtml5Line size={24} className='text-orange-500' />,
            <RiCss3Line size={24} className='text-blue-500' />,
            <RiJavascriptLine size={24} className="text-yellow-500"/>,
            <RiTailwindCssLine size={24} className="text-blue-500"/>,
            <FaLaravel size={24} className="text-red-500"/>
        ],
        category: 'design'
    }
]