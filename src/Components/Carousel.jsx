import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import projectImg from "../assets/project.png"
import arrow from "../assets/Arrow.png"

const Carousel = ({ projectType }) => {

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
        },
        {
            category: "design",
            image: projectImg,
            title: "Design Project title",
            desc: "this is the design project description which will show the description of project awill show the description of project...",
            tags: ["figma"],
            deployLink: "",
        },
        {
            category: "design",
            image: projectImg,
            title: "Design Project title",
            desc: "this is the design project description which will show the description of project awill show the description of project...",
            tags: ["figma"],
            deployLink: "",
        },
        {
            category: "design",
            image: projectImg,
            title: "Design Project title",
            desc: "this is the design project description which will show the description of project awill show the description of project...",
            tags: ["figma"],
            deployLink: "",
        },
        {
            category: "design",
            image: projectImg,
            title: "Design Project title",
            desc: "this is the design project description which will show the description of project awill show the description of project...",
            tags: ["figma"],
            deployLink: "",
        },
    ]

    let [current, setCurrent] = useState(0);
    let [leftDisable, setLeftDisable] = useState(current == 0 ? true : false);
    let [rightDisable, setRightDisable] = useState(current == (projects.length - 3) ? true : false);

    let previousSlide = () => {
        if (current != 0) {
            setCurrent(current = current - 1)
        }

        current == (projects.length - 3) ? setRightDisable(true) : setRightDisable(false);
        current == 0 ? setLeftDisable(true) : setLeftDisable(false);
    }

    let nextSlide = () => {
        if (current != (projects.length - 3)) {
            setCurrent(current = current + 1)
        }

        current == (projects.length - 3) ? setRightDisable(true) : setRightDisable(false);
        current == 0 ? setLeftDisable(true) : setLeftDisable(false);
    }

    return (
        <div className='flex justify-center relative'>
            <div className='w-[85%] overflow-hidden px-4'>
                <div className='flex gap-14 transition-all ease-in-out duration-700 w-[100%]'
                    style={{
                        transform: `translate(-${current * 35}%)`
                    }}
                >
                    {projects.map((project, i) => (
                        <ProjectCard key={"Project" + i} category={project.category} image={project.image} title={project.title} desc={project.desc} tags={project.tags} deployLink={project.deployLink} githubLink={project.githubLink} />
                    ))}
                </div>
            </div>
            <button className={`${current == 0 ? "opacity-40" : "opacity-100"}`} disabled={leftDisable} onClick={previousSlide}>
                <img src={arrow} alt="Carousel left arrow" className='w-10 absolute left-2' />
            </button>
            <button className={`${(current == projects.length - 3) ? "opacity-40" : "opacity-100"}`} disabled={rightDisable} onClick={nextSlide}>
                <img src={arrow} alt="Carousel right arrow" className='w-10 absolute rotate-180 right-2' />
            </button>
        </div>
    )
}

export default Carousel
