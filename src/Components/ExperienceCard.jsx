import React, { useState } from 'react';
import plus from "../assets/plus.png";
import location from "../assets/location.png";

const ExperienceCard = ({ experience }) => {
    const [open, setIsOpen] = useState(false);
    return (
        <div
            className={`border-[3px] border-[#0E76D8] rounded-xl flex flex-col font-inter py-3 px-4 w-full transition-all ease-in-out duration-700 cursor-pointer`}
            onClick={() => setIsOpen(!open)}
        >
            <div className='flex flex-col justify-center gap-2 lap:flex-row lap:justify-between'>
                <h3 className='font-medium lap:font-normal text-start text-[18px]'>{experience.title}</h3>
                <div className='flex justify-between items-center lap:gap-4 lap:text-[14px]'>
                    <p className='opacity-80'>{experience.startDate} - {experience.endDate}</p>
                    <img src={plus} alt="icon" className={`w-6 transition-transform duration-700 ${open ? 'rotate-45' : ''}`} />
                </div>
            </div>
            <div
                className={`flex flex-col gap-4 transition-max-height duration-700 ease-in-out overflow-hidden ${open ? 'max-h-[1000px]' : 'max-h-0'}`}
                style={{ transitionProperty: 'max-height' }}
            >
                <hr className='bg-[#0E76D8] border-[#0E76D8] mt-4' />
                <div className={`flex flex-col gap-5`}>
                    <span className='flex gap-3 items-center'>
                        <img src={location} alt="location" className='h-6' />
                        <p>{experience.location}</p>
                    </span>
                    <p className='text-left'>{experience.desc}</p>
                    <div className='flex gap-3'>
                        {experience.tags.map((tag, i) => (
                            <span key={"tag" + i} className='border-2 border-[#57A8F4] px-3 py-1 rounded-lg'>{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExperienceCard;
