import React, { useState } from 'react'
import projectImg from "../assets/project.png"
import ProjectCard from './ProjectCard';

const Project = () => {
    const [project, setProject] = useState("development");
    const handleClick = (e) => {
        setProject(e.target.id);
    }

    const projects = [
        {
            category: "development",
            image: projectImg,
            title: "Project title",
            desc: "this is the project description which will show the description of project awill show the description of project...",
            tags: ["html", "css", "javascript"],
            deployLink: "",
            githubLink: "",
        },
        {
            category: "design",
            image: projectImg,
            title: "Design Project title",
            desc: "this is the design project description which will show the description of project awill show the description of project...",
            tags: ["figma"],
            deployLink: "",
        }
    ]

    return (
        <div className='text-white text-center px-[20px] flex-col gap-6 sm:gap-14 flex py-8 sm:py-16 sm:px-20 items-center'>
            <div className='flex flex-col items-center justify-center gap-4'>
                <div className='w-fit flex flex-col items-center text-[#1AC576]'>
                    <h2 className='text-4xl sm:text-6xl font-semibold mb-2 font-karla'>Projects</h2>
                    <hr className='w-[70%] h-[2px] sm:h-[3px] font-bold bg-[#1AC576]' />
                </div>
                <p className='text-center font-inter sm:text-md sm:w-[70%]'>My portfolio comprises of several projects that demonstrate my skills and experience through real-world examples of my work. These projects have equipped me with the ability to solve complex problems, work with different technologies, and manage projects effectively. Each project is briefly described below, along with links to code repositories.</p>
            </div>
            <div className='flex gap-4'>
                <button id='design' onClick={handleClick} className={`border-2 border-[#1AC576] ${project == "design" ? "text-[#1AC576] font-medium" : "text-white font-normal"} px-4 py-2 rounded-lg text-lg font-inter`}>Design</button>
                <button id='development' onClick={handleClick} className={`border-2 border-[#1AC576] ${project == "development" ? "text-[#1AC576] font-medium" : "text-white font-normal"} px-4 py-2 rounded-lg text-lg font-inter`}>Development</button>
            </div>
            <div className='w-full flex gap-16 items-center justify-center'>
                {projects.map((project) => (
                    <ProjectCard category={project.category} image={project.image} title={project.title} desc={project.desc} tags={project.tags} deployLink={project.deployLink} githubLink={project.githubLink} />
                ))}
            </div>
        </div>
    )
}

export default Project
