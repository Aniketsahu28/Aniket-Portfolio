import React from 'react'
import arrow from "../assets/Arrow.png"
import github from "../assets/github.png"
import { Link } from 'react-router-dom'

const ProjectCard = (params) => {
    const truncateString = (str) => {
        if (str.length > 100) {
            return str.slice(0, 97) + '...';
        }
        return str;
    }

    return (
        <div className='text-start border-[3px] border-[#0E76D8] rounded-xl flex flex-col gap-3 font-inter pb-[16px] min-w-[100%] lap:min-w-[30%] overflow-hidden'>
            <img src={params.image} alt="Project" />
            <div className='px-[16px] flex flex-col gap-2 justify-between h-full'>
                <h3 className='text-xl font-semibold'>{params.title}</h3>
                <p className='text-[14px]'>
                    {params.desc}
                </p>
                <div className='my-3 flex gap-4'>
                    {params.tags.map((tag, i) => (
                        <span key={"tag" + i} className='py-1 px-3 rounded-md bg-[#333333]'>{tag}</span>
                    ))}
                </div>
                <div className='flex relative h-[26px]'>
                    {params.deployLink && <Link to={params.deployLink} target='_blank' className='flex items-center gap-2 text-[#4DD295]'>
                        <img src={arrow} alt="arrow" className='h-5 rotate-180' />
                        <span className='text-[16px]'>Live preview</span>
                    </Link>}

                    {params.category == "development" && params.githubLink &&
                        <Link to={params.githubLink} target='_blank' className='flex absolute right-0 gap-2 items-center justify-center'>
                            <img src={github} alt="github" className='h-5' />
                            <span className='text-[16px]'>View Code</span>
                        </Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
