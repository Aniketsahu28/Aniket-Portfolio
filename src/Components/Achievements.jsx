import React from 'react'
import achievement from "../assets/achievement.png"
import ICNTE from "../assets/ICNTE.jpg"
import Hacktober2023 from "../assets/Hacktober2023.png"

const Achievements = () => {
    const achievements = [
        {
            image: ICNTE,
            title: "ICNTE 2023 winner",
            date: "20-21 January 2023"
        },
        {
            image: Hacktober2023,
            title: "Hacktober fest 2023 Contributor",
            date: "January 2023"
        },
    ]
    return (
        <div className='text-white text-center px-[20px] flex-col gap-6 lap:gap-14 flex py-8 lap:py-16 lap:px-28 w-full'>
            <div data-aos="fade-up" data-aos-duration="1000" className='flex flex-col items-center justify-center gap-4'>
                <div className='w-fit flex flex-col items-center text-[#1AC576]'>
                    <h2 className='text-4xl lap:text-6xl font-semibold mb-2 font-karla'>Achievements</h2>
                    <hr className='w-[70%] h-[2px] lap:h-[3px] font-bold bg-[#1AC576]' />
                </div>
                <p className='font-inter lap:text-md'>Celebrating the achieved milestones</p>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" className='flex flex-col lap:flex-row lap:flex-wrap items-center justify-center gap-6 lap:gap-10 font-inter'>
                {
                    achievements.map((achievement, i) => (
                        <div key={i} className='border-[3px] border-[#0E76D8] rounded-xl flex flex-col gap-4 pb-4 lap:w-[25%]'>
                            <img src={achievement.image} alt="achievement" className='rounded-t-xl w-full' />
                            <div className='px-4'>
                                <h2 className='font-semibold'>{achievement.title}</h2>
                                <p className='opacity-80'>{achievement.date}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Achievements
