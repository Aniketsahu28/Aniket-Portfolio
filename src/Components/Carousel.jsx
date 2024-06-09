import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import arrow from "../assets/Arrow.png"

const Carousel = ({ projects }) => {
    let [current, setCurrent] = useState(0);
    let [leftDisable, setLeftDisable] = useState(current == 0 ? true : false);
    let [rightDisable, setRightDisable] = useState(current == (projects.length - 3) ? true : false);

    let previousSlide = () => {
        if (current != 0) {
            setCurrent(current = current - 1)
        }

        if (isMobile) {
            current == (projects.length - 1) ? setRightDisable(true) : setRightDisable(false);
            current == 0 ? setLeftDisable(true) : setLeftDisable(false);
        }
        else {
            current == (projects.length - 3) ? setRightDisable(true) : setRightDisable(false);
            current == 0 ? setLeftDisable(true) : setLeftDisable(false);
        }
    }

    let nextSlide = () => {
        if (isMobile) {
            if (current != (projects.length - 1)) {
                setCurrent(current = current + 1)
            }

            current == (projects.length - 1) ? setRightDisable(true) : setRightDisable(false);
            current == 0 ? setLeftDisable(true) : setLeftDisable(false);
        }
        else {
            if (current != (projects.length - 3)) {
                setCurrent(current = current + 1)
            }

            current == (projects.length - 3) ? setRightDisable(true) : setRightDisable(false);
            current == 0 ? setLeftDisable(true) : setLeftDisable(false);
        }
    }

    const [isMobile, setIsMobile] = useState(
        window.innerWidth < 850 ? true : false
    );

    const [scrollPercent, setScrollPercent] = useState(
        window.innerWidth < 850 ? 117.5 : 35
    );

    function checkIsMobile() {
        setScrollPercent(window.innerWidth < 850 ? 117.5 : 35);
        setIsMobile(window.innerWidth < 850 ? true : false);
    }

    window.onresize = checkIsMobile;

    return (
        <div className='flex justify-center relative items-end lap:items-center'>
            <div className='w-full lap:w-[85%] overflow-hidden px-4'>
                <div className='flex gap-14 transition-all ease-in-out duration-700 w-[100%]'
                    style={{
                        transform: `translate(-${current * scrollPercent}%)`
                    }}
                >
                    {projects.map((project, i) => (
                        <ProjectCard key={"Project" + i} category={project.category} image={project.image} title={project.title} desc={project.desc} tags={project.tags} deployLink={project.deployLink} githubLink={project.githubLink} />
                    ))}
                </div>
            </div>
            <button className={`${current == 0 ? "opacity-40" : "opacity-100"}  absolute lap:left-2 mr-32 -mb-20 lap:m-0`} disabled={leftDisable} onClick={previousSlide}>
                <img src={arrow} alt="Carousel left arrow" className='w-10' />
            </button>
            <button className={`${(isMobile && current == projects.length - 1) ? "opacity-40" : "opacity-100"} ${(!isMobile && current == projects.length - 3) ? "opacity-40" : "opacity-100"} absolute rotate-180 lap:right-2 ml-32 -mb-20 lap:m-0`} disabled={rightDisable} onClick={nextSlide}>
                <img src={arrow} alt="Carousel right arrow" className='w-10' />
            </button>
        </div>
    )
}

export default Carousel
