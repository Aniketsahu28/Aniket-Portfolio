import React from 'react'
import achievement from "../assets/achievement.png"

const Achievements = () => {
    const achievements = [
        {
            image: achievement,
            title: "TECHFEST hackathon winner",
            date: "1 january 2024"
        },
        {
            image: achievement,
            title: "TECHFEST hackathon winner",
            date: "1 january 2024"
        },
        {
            image: achievement,
            title: "TECHFEST hackathon winner",
            date: "1 january 2024"
        },
        {
            image: achievement,
            title: "TECHFEST hackathon winner",
            date: "1 january 2024"
        },
        {
            image: achievement,
            title: "TECHFEST hackathon winner",
            date: "1 january 2024"
        },
    ]
    return (
        <div className='text-white text-center px-[20px] flex-col gap-6 lap:gap-14 flex py-8 lap:py-16 lap:px-28 w-full'>
            <div className='flex flex-col items-center justify-center gap-4'>
                <div className='w-fit flex flex-col items-center text-[#1AC576]'>
                    <h2 className='text-4xl lap:text-6xl font-semibold mb-2 font-karla'>Achievements</h2>
                    <hr className='w-[70%] h-[2px] lap:h-[3px] font-bold bg-[#1AC576]' />
                </div>
                <p className='font-inter lap:text-md'>Celebrating the achieved milestones</p>
            </div>
            <div className='flex flex-col lap:flex-row lap:flex-wrap items-center justify-center gap-6 lap:gap-10 font-inter'>
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
