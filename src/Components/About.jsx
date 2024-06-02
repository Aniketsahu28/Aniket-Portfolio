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
        <div className='text-white text-center px-[20px] flex-col gap-6 sm:gap-14 flex py-8 sm:py-16 sm:px-28'>
            <div className='flex flex-col items-center justify-center gap-2'>
                <div className='w-fit flex flex-col items-center text-[#1AC576]'>
                    <h2 className='text-4xl sm:text-6xl font-semibold mb-2 font-inter'>About me</h2>
                    <hr className='w-[70%] h-[2px] sm:h-[3px] font-bold bg-[#1AC576]' />
                </div>
                <p className='font-karla sm:text-xl'>Introduction</p>
            </div>
            <div className='sm:flex sm:flex-row sm:gap-10 sm:justify-around items-center'>
                {!isMobile &&
                    <div className='flex flex-col gap-6 w-[30%] text-xl'>
                        <span className='px-4 py-3 border-[#0E76D8] border-[3px] w-fit rounded-lg hover:border-[#1AC576] hover:scale-105 transition-all self-end'>Full Stack web Developer</span>
                        <span className='px-4 py-3 border-[#87C1F7] border-[3px] w-fit rounded-lg hover:border-[#B3ECD1] hover:scale-105 transition-all self-start'>UI/UX designer</span>
                        <span className='px-4 py-3 border-[#278FF1] border-[3px] w-fit rounded-lg hover:border-[#4DD295] hover:scale-105 transition-all self-end'>Open Source Contributor</span>
                        <span className='px-4 py-3 border-[#0E76D8] border-[3px] w-fit rounded-lg hover:border-[#1AC576] hover:scale-105 transition-all self-start'>Participates in hackathons</span>
                    </div>}
                <p className='font-inter sm:w-[60%] sm:text-[17px] sm:leading-7 sm:text-justify'>
                    I am a 3rd year undergraduate student currently pursuing my Computer Engineering degree at FCRIT (Father Agnels), vashi.
                    <br /><br />
                    I am a passionate Web developer, UI/UX designer and a freelancer. Through hands-on experience and a commitment to ongoing learning, I have honed my skills in HTML, CSS, Tailwind CSS, Javascript, React, mongoDB, java, figma. Beyond the coding realm, I extend my expertise to UI/UX design, where I leverage tools such as Figma to conceptualize and create user-centric interfaces. The fusion of my technical skills with a keen eye for design enables me to deliver holistic solutions that prioritize both functionality and aesthetics. I also have a good understanding of no-code websites such as wordpress and webflow.
                </p>
            </div>
        </div>
    )
}

export default About
