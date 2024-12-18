import React from 'react'
import ExperienceCard from './ExperienceCard'

const Experiences = () => {

    const experiences = [
        {
            title: "Full Stack developer @Revergon Solutions",
            startDate: "30th May, 2024",
            endDate: "31st July 2024",
            location: "Navi Mumbai, India",
            desc: "Employed as an intern at Revergon Solutions as a Full Stack Web Developer. My role involved redesigning the company's website using Figma to significantly improve its UI and UX, aligning closely with the organization's mission and objectives. I have also developed the redesigned website in WordPress, translating my Figma designs into a functional platform. Created design elements and an App design for the website in figma. Additionally, I understand google analytics (GA4) and implemented it in the webiste.",
            tags: ["Figma", "Wordpress", "Google Analytics", "UI/UX"]
        },
    ]

    return (
        <div className='text-white text-center px-[20px] flex-col gap-6 lap:gap-14 flex py-8 lap:py-16 lap:px-28 w-full' id='experiences'>
            <div data-aos="fade-up" data-aos-duration="1000" className='flex flex-col items-center justify-center gap-4'>
                <div className='w-fit flex flex-col items-center text-[#1AC576]'>
                    <h2 className='text-4xl lap:text-6xl font-semibold mb-2 font-karla'>Experiences</h2>
                    <hr className='w-[70%] h-[2px] lap:h-[3px] font-bold bg-[#1AC576]' />
                </div>
                <p className='font-inter lap:text-md'>Here is a quick summary of my recent experiences</p>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" className='flex flex-col lap:w-[70%] items-center justify-center gap-6 mx-auto'>
                {experiences.map((experience, i) => (
                    <ExperienceCard experience={experience} key={"experience" + i} />
                ))}
            </div>
        </div>
    )
}

export default Experiences
