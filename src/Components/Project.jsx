import React, { useState } from 'react'
import Carousel from './Carousel';
import projectImg from "../assets/project.png"


const Project = () => {
    const [project, setProject] = useState("development");
    const handleClick = (e) => {
        setProject(e.target.id);
    }

    const devProjects = [
        {
            category: "development",
            image: projectImg,
            title: "Project title 1",
            desc: "this is the project description which will show the description of project awill show the description of project...",
            tags: ["html", "css", "javascript"],
            deployLink: "",
            githubLink: "",
        },
        {
            category: "development",
            image: projectImg,
            title: "Project title 2",
            desc: "this is the project description which will show the description of project awill show the description of project...",
            tags: ["html", "css", "javascript"],
            deployLink: "",
            githubLink: "",
        },
        {
            category: "development",
            image: projectImg,
            title: "Project title 3",
            desc: "this is the project description which will show the description of project awill show the description of project...",
            tags: ["html", "css", "javascript"],
            deployLink: "",
            githubLink: "",
        },
        {
            category: "development",
            image: projectImg,
            title: "Project title 4",
            desc: "this is the project description which will show the description of project awill show the description of project...",
            tags: ["html", "css", "javascript"],
            deployLink: "",
            githubLink: "",
        },
    ]

    const designProjects = [
        {
            category: "design",
            image: projectImg,
            title: "Design Project title 1",
            desc: "this is the design project description which will show the description of project awill show the description of project...",
            tags: ["figma"],
            deployLink: "",
        },
        {
            category: "design",
            image: projectImg,
            title: "Design Project title 2",
            desc: "this is the design project description which will show the description of project awill show the description of project...",
            tags: ["figma"],
            deployLink: "",
        },
        {
            category: "design",
            image: projectImg,
            title: "Design Project title 3",
            desc: "this is the design project description which will show the description of project awill show the description of project...",
            tags: ["figma"],
            deployLink: "",
        },
        {
            category: "design",
            image: projectImg,
            title: "Design Project title 4",
            desc: "this is the design project description which will show the description of project awill show the description of project...",
            tags: ["figma"],
            deployLink: "",
        },
        {
            category: "design",
            image: projectImg,
            title: "Design Project title 5",
            desc: "this is the design project description which will show the description of project awill show the description of project...",
            tags: ["figma"],
            deployLink: "",
        },
    ]

    return (
        <div className='text-white text-center px-[20px] flex-col gap-6 lap:gap-14 flex pt-8 pb-32 lap:py-16 lap:px-20 items-center w-[100%]' id='project'>
            <div className='flex flex-col items-center justify-center gap-4'>
                <div className='w-fit flex flex-col items-center text-[#1AC576]'>
                    <h2 className='text-4xl lap:text-6xl font-semibold mb-2 font-karla'>Projects</h2>
                    <hr className='w-[70%] h-[2px] lap:h-[3px] font-bold bg-[#1AC576]' />
                </div>
                <p className='text-center font-inter lap:text-md lap:w-[70%]'>My portfolio comprises of several projects that demonstrate my skills and experience through real-world examples of my work. These projects have equipped me with the ability to solve complex problems, work with different technologies, and manage projects effectively. Each project is briefly described below, along with links to code repositories.</p>
            </div>
            <div className='flex gap-4'>
                <button id='design' onClick={handleClick} className={`border-2 border-[#1AC576] ${project == "design" ? "text-[#1AC576] font-medium" : "text-white font-normal"} px-4 py-2 rounded-lg text-lg font-inter`}>Design</button>
                <button id='development' onClick={handleClick} className={`border-2 border-[#1AC576] ${project == "development" ? "text-[#1AC576] font-medium" : "text-white font-normal"} px-4 py-2 rounded-lg text-lg font-inter`}>Development</button>
            </div>
            <div className='w-[100%]'>
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
