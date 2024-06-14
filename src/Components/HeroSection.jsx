import React from 'react'
import Aniket from "../assets/Aniket.jpg"
import AniketResume from "../assets/AniketResume.pdf"

const HeroSection = () => {

    const handleClick = (event, id) => {
        event.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='text-white pt-28 pb-14 w-full flex flex-col lap:flex-row-reverse justify-center lap:justify-evenly items-center gap-6 overflow-hidden px-10'>
            <div className='w-[320px] h-[320px] lap:w-[450px] lap:h-[450px] flex items-center justify-center'>
                <div className='greenCircle bg-greenCircle h-[90%] w-[90%] bg-contain bg-no-repeat p-5 lap:p-6 flex items-center justify-center'>
                    <div className='blueCircle bg-blueCircle h-full w-full bg-contain bg-no-repeat p-5 lap:p-6'>
                        <img src={Aniket} alt="profile" className='rounded-full imageAnimation' />
                    </div>
                </div>
            </div>
            <div className='w-full font-karla flex flex-col gap-2 lap:gap-4 lap:w-fit lap:mb-8 '>
                <div className='text-3xl lap:text-6xl font-medium'>Hi, I'm <br /><span className='text-4xl lap:text-7xl'>Aniket Sahu</span>
                </div>
                <p className='w-full bg-black text-white text-xl lap:text-2xl flex flex-col lap:flex-row lap:gap-2 font-karla'>
                    <span>A passionate</span>
                    <span className='text-[#1AC576] font-semibold'>{`< Full Stack web Developer />`}</span>
                </p>
                <div className='flex gap-4 text-xl font-medium mt-1'>
                    <button className='bg-[#1AC576] text-black hover:text-white py-2 px-4  rounded-lg' onClick={(e) => handleClick(e, "about")}>About me</button>
                    <a
                        href={AniketResume}
                        download="Aniket Resume"
                        target="_blank"
                        rel="noreferrer"
                        className='border-[#1AC576] border-2 py-2 px-4 text-white rounded-lg hover:text-[#1AC576]'>Get Resume</a>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
