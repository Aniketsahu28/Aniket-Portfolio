import React, { useState } from 'react'
import html from "../assets/Technologies/html.png"
import css from "../assets/Technologies/css.png"
import js from "../assets/Technologies/js.png"
import java from "../assets/Technologies/java.png"
import figma from "../assets/Technologies/figma.png"
import mongo from "../assets/Technologies/mongo.png"
import tailwind from "../assets/Technologies/tailwind.png"
import webflow from "../assets/Technologies/webflow.png"
import git from "../assets/Technologies/git.png"
import react from "../assets/Technologies/react.png"

const Technologies = () => {
    const Techs = [
        {
            name: "HTML",
            image: html
        },
        {
            name: "CSS",
            image: css
        },
        {
            name: "Tailwind",
            image: tailwind
        },
        {
            name: "Javascript",
            image: js
        },
        {
            name: "React",
            image: react
        },
        {
            name: "Mongo DB",
            image: mongo
        },
        {
            name: "Figma",
            image: figma
        },
        {
            name: "Java",
            image: java
        },
        {
            name: "Webflow",
            image: webflow
        },
        {
            name: "Git",
            image: git
        },
    ]

    const [show, setShow] = useState(50);

    const handleMouseEnter = (e) => {
        setShow(e.target.id);
    }

    const handleMouseLeave = () => {
        setShow(50);
    }

    return (
        <div className='text-white text-center px-[20px] flex-col gap-6 sm:gap-14 flex py-8 sm:py-16 sm:px-28 items-center'>
            <div className='flex flex-col items-center justify-center gap-2'>
                <div className='w-fit flex flex-col items-center text-[#1AC576]'>
                    <h2 className='text-4xl sm:text-6xl font-semibold mb-2 font-karla'>Technologies</h2>
                    <hr className='w-[70%] h-[2px] sm:h-[3px] font-bold bg-[#1AC576]' />
                </div>
                <p className='text font-inter sm:text-xl'>Proficiencies I've developed in various technologies</p>
            </div>
            <div className='flex flex-wrap gap-8 items-center justify-center sm:w-[80%]'>
                {Techs.map((tech, index) => (
                    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id={index} key={index} className='border-[3px] border-[#0E76D8] w-fit p-5 rounded-lg relative flex items-center justify-center bg-none'>
                        <p className={`text-md font-semibold font-inter absolute uppercase ${show == index ? "flex" : "hidden"}`}>{tech.name}</p>
                        <img src={tech.image} alt="technology" className={`w-20 sm:w-16 ${show == index ? 'opacity-30 scale-125' : 'opacity-100 scale-100'} transition-all`} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Technologies
