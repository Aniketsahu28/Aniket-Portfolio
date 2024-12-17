import React, { useState } from 'react'
import Carousel from './Carousel';
import projectImg from "../assets/project.png"
import Evernote from "../assets/Projects/Evernote.png"
import taazakhabar from "../assets/Projects/taazakhabar.png"
import ideaplots from "../assets/Projects/ideaplots.png"
import agnelevents from "../assets/Projects/agnelevents.png"
import portfolio from "../assets/Projects/3Dportfolio.png"
import ieifcrit from "../assets/Projects/ieifcrit.png"
import Cafeteria from "../assets/Projects/Cafeteria.png"
import FurnitureStore from "../assets/Projects/FurnitureStore.png"
import myfabrilia from "../assets/Projects/myfabrilia.png"


const Project = () => {
    const [project, setProject] = useState("development");
    const handleClick = (e) => {
        setProject(e.target.id);
    }

    const devProjects = [
        {
            category: "development",
            image: agnelevents,
            title: "Event booking system",
            desc: "Developed a digital event approval and booking system, replacing paper processes, enabling students to view and book campus events efficiently.",
            tags: ["MERN", "Figma"],
            deployLink: "https://agnelevents.vercel.app/",
            githubLink: "https://github.com/Aniketsahu28/Event-Managemet-System",
        },
        {
            category: "development",
            image: ideaplots,
            title: "Ideaplots",
            desc: "A visually appealing website prototype for Ideaplots (a design agency), using Figma & React to highlight their web development and design services.",
            tags: ["React", "tailwind"],
            deployLink: "https://ideaplots.com",
            githubLink: "",
        },
        {
            category: "development",
            image: ieifcrit,
            title: "IEI FCRIT",
            desc: "A college club website showcasing events, team, and initiatives, serving as a central hub for members and visitors, fostering engagement.",
            tags: ["React", "Tailwind"],
            deployLink: "https://ieifcritmech.in/",
            githubLink: "",
        },
        {
            category: "development",
            image: portfolio,
            title: "3D Portfolio",
            desc: "A portfolio website showcasing my coding journey, skills, experiences, and achievements, offering an in-depth insight into my progress.",
            tags: ["three.js", "React", "Tailwind"],
            deployLink: "https://aniket-portfolio-4c631.web.app/",
            githubLink: "https://github.com/Aniketsahu28/My-3D-portfolio",
        },
        {
            category: "development",
            image: Evernote,
            title: "EverNote",
            desc: "EverNote, a note-taking app, offers effortless organization and idea capture with a React frontend, Node.js backend, and MongoDB Atlas database.",
            tags: ["MERN", "Cloud"],
            deployLink: "https://evernote-cloud.web.app/",
            githubLink: "https://github.com/Aniketsahu28/EverNote",
        },
        // {
        //     category: "development",
        //     image: taazakhabar,
        //     title: "Taaza khabar",
        //     desc: "Taaza Khabar, built on React and integrated with the News API, delivers daily news content through a clean, user-friendly design.",
        //     tags: ["React", "News'api", "Bootstrap"],
        //     deployLink: "",
        //     githubLink: "https://github.com/Aniketsahu28/Taaza-Khabar-news-app",
        // },
    ]

    const designProjects = [
        {
            category: "design",
            image: myfabrilia,
            title: "Fabrilia",
            desc: " Designed a user-centric e-commerce store in Figma, specializing in curtain sales, with an emphasis on seamless navigation and aesthetic appeal.",
            tags: ["Figma", "UI/UX"],
            deployLink: "https://myfabrilia.com/",
            githubLink: "",
        },
        {
            category: "design",
            image: ideaplots,
            title: "Ideaplots",
            desc: "A visually appealing website prototype for Ideaplots (a design agency), using Figma & React to highlight their web development and design services.",
            tags: ["Figma", "UI/UX"],
            deployLink: "https://ideaplots.com",
            githubLink: "",
        },
        {
            category: "design",
            image: ieifcrit,
            title: "IEI FCRIT",
            desc: "A college club website showcasing events, team, and initiatives, serving as a central hub for members and visitors, fostering engagement.",
            tags: ["Figma", "UI/UX"],
            deployLink: "https://ieifcritmech.in/",
            githubLink: "",
        },
        {
            category: "design",
            image: Cafeteria,
            title: "Cafeteria",
            desc: "Cafeteria, a responsive website designed in Figma for users to view and order food, ensuring a seamless and user-friendly experience.",
            tags: ["Figma", "UI/UX", "Food"],
            deployLink: "https://www.behance.net/gallery/201678257/Food-ordering-website",
            githubLink: "",
        },
        {
            category: "design",
            image: FurnitureStore,
            title: "Furniture store",
            desc: "A responsive landing page of furniture store designed in Figma,enhancing user experience with a visually appealing layout.",
            tags: ["Figma", "UI/UX", "Furniture"],
            deployLink: "https://www.behance.net/gallery/201683303/Furniture-store",
            githubLink: "",
        },
    ]

    return (
        <div className='text-white text-center px-[20px] flex-col gap-6 lap:gap-14 flex pt-8 pb-32 lap:py-16 lap:px-20 items-center w-[100%]' id='project'>
            <div data-aos="fade-up" data-aos-duration="1000" className='flex flex-col items-center justify-center gap-4'>
                <div className='w-fit flex flex-col items-center text-[#1AC576]'>
                    <h2 className='text-4xl lap:text-6xl font-semibold mb-2 font-karla'>Projects</h2>
                    <hr className='w-[70%] h-[2px] lap:h-[3px] font-bold bg-[#1AC576]' />
                </div>
                <p className='text-center font-inter lap:text-md lap:w-[70%]'>My portfolio comprises of several projects that demonstrate my skills and experience through real-world examples of my work. These projects have equipped me with the ability to solve complex problems, work with different technologies, and manage projects effectively. Each project is briefly described below, along with links to code repositories.</p>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" className='flex gap-4'>
                <button id='design' onClick={handleClick} className={`border-2 border-[#1AC576] ${project == "design" ? "text-[#1AC576] font-medium" : "text-white font-normal"} px-4 py-2 rounded-lg text-lg font-inter`}>Design</button>
                <button id='development' onClick={handleClick} className={`border-2 border-[#1AC576] ${project == "development" ? "text-[#1AC576] font-medium" : "text-white font-normal"} px-4 py-2 rounded-lg text-lg font-inter`}>Development</button>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" className='w-full'>
                {
                    project == "development" ?
                        <Carousel projects={devProjects} />
                        :
                        <Carousel projects={designProjects} />
                }
            </div>
        </div>
    )
}

export default Project
