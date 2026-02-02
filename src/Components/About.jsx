import React, { useState } from 'react'

const About = () => {
    const [isMobile, setIsMobile] = useState(
        window.innerWidth < 820 ? true : false
    );

    function checkIsMobile() {
        setIsMobile(window.innerWidth < 820 ? true : false);
    }

    window.onresize = checkIsMobile;
    return (
        <div className='text-white text-center px-[20px] flex-col gap-6 lap:gap-14 flex py-8 lap:py-16 lap:px-28' id='about'>
            <div data-aos="fade-up" data-aos-duration="1000" className='flex flex-col items-center justify-center gap-4'>
                <div className='w-fit flex flex-col items-center text-[#1AC576]'>
                    <h2 className='text-4xl lap:text-6xl font-semibold mb-2 font-karla'>About me</h2>
                    <hr className='w-[70%] h-[2px] lap:h-[3px] font-bold bg-[#1AC576]' />
                </div>
                <p className='font-inter lap:text-md'>Introduction</p>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" className='lap:flex lap:flex-row lap:gap-10 lap:justify-around items-center'>
                {!isMobile &&
                    <div className='flex flex-col gap-6 w-[30%] text-xl'>
                        <span className='px-4 py-3 border-[#0E76D8] border-[3px] w-fit rounded-lg hover:border-[#1AC576] hover:scale-105 transition-all self-end'>Full Stack web Developer</span>
                        <span className='px-4 py-3 border-[#87C1F7] border-[3px] w-fit rounded-lg hover:border-[#B3ECD1] hover:scale-105 transition-all self-start'>UI/UX designer</span>
                        <span className='px-4 py-3 border-[#278FF1] border-[3px] w-fit rounded-lg hover:border-[#4DD295] hover:scale-105 transition-all self-end'>Open Source Contributor</span>
                        <span className='px-4 py-3 border-[#0E76D8] border-[3px] w-fit rounded-lg hover:border-[#1AC576] hover:scale-105 transition-all self-start'>Freelancer</span>
                    </div>}
                <p className='font-inter lap:w-[60%] lap:text-[17px] lap:leading-7 lap:text-justify'>
                    I'm Aniket Sahu, a Full Stack Developer with 8+ months of hands-on industry experience working primarily with Spring Boot, React, and Next.js. I currently work at The Clearing Corporation of India Limited (CCIL), where I develop and maintain backend services and build internal web applications used in financial systems.
                    <br /><br />
                    I enjoy working across the stack, from designing APIs and handling databases to building clean, responsive user interfaces. Alongside development, I have a strong interest in UI/UX design and often use Figma to design interfaces that are simple, practical, and user-focused.
                    <br /><br />
                    I like building products that solve real problems, scale well, and balance functionality with a good user experience.
                </p>
            </div>
        </div>
    )
}

export default About
