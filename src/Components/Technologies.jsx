import React, { useState } from 'react'
import html from "../assets/Technologies/html.png"
import css from "../assets/Technologies/css.png"
import js from "../assets/Technologies/js.png"
import java from "../assets/Technologies/java.png"
import figma from "../assets/Technologies/figma.png"
import node from "../assets/Technologies/nodejs.png"
import express from "../assets/Technologies/express.png"
import typescript from "../assets/Technologies/typescript.png"
import mongo from "../assets/Technologies/mongo.png"
import tailwind from "../assets/Technologies/tailwind.png"
import webflow from "../assets/Technologies/webflow.png"
import git from "../assets/Technologies/git.png"
import react from "../assets/Technologies/react.png"
import wordpress from "../assets/Technologies/wordpress.png"

const Technologies = () => {
    const Techs = [
        {
            name: "Java",
            image: java
        },
        {
            name: "React",
            image: react
        },
        {
            name: "Node",
            image: node
        },
        {
            name: "Express",
            image: express
        },
        {
            name: "Typescript",
            image: typescript
        },
        {
            name: "Mongo DB",
            image: mongo
        },
        {
            name: "Tailwind",
            image: tailwind
        },
        {
            name: "Figma",
            image: figma
        },
        {
            name: "HTML",
            image: html
        },
        {
            name: "CSS",
            image: css
        },
        {
            name: "Javascript",
            image: js
        },
        {
            name: "Wordpress",
            image: wordpress
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

    const [show, setShow] = useState(null);

    const handleMouseEnter = (e) => {
        setShow(e.target.id);
    }

    const handleMouseLeave = () => {
        setShow(null);
    }

    return (
        <div className='text-white text-center px-[20px] flex-col gap-6 lap:gap-14 flex py-8 lap:py-16 lap:px-28 items-center' id='technologies'>
            <div data-aos="fade-up" data-aos-duration="1000" className='flex flex-col items-center justify-center gap-4'>
                <div className='w-fit flex flex-col items-center text-[#1AC576]'>
                    <h2 className='text-4xl lap:text-6xl font-semibold mb-2 font-karla'>Technologies</h2>
                    <hr className='w-[70%] h-[2px] lap:h-[3px] font-bold bg-[#1AC576]' />
                </div>
                <p className='text font-inter lap:text-md'>Proficiencies I've developed in various technologies</p>
            </div>
            <div className='flex flex-wrap gap-8 items-center justify-center lap:w-[80%]'>
                {Techs.map((tech, index) => (
                    <div data-aos="zoom-in-up" data-aos-duration="800" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id={index} key={index} className='border-[3px] border-[#0E76D8] w-fit p-4 lap:p-5 rounded-lg relative flex items-center justify-center bg-none'>
                        <p className={`text-sm lap:text-md font-semibold font-inter absolute uppercase ${show == index ? "flex" : "hidden"}`}>{tech.name}</p>
                        <img id={index} src={tech.image} alt="technology" className={`w-16 ${show == index ? 'opacity-30 scale-125' : 'opacity-100 scale-100'} transition-all`} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Technologies
