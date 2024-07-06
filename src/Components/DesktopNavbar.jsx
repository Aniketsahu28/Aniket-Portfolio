import React from 'react'
import { Link } from 'react-router-dom'
import AniketLogo from "../assets/AniketLogo.png"

const DesktopNavbar = () => {
    const handleClick = (event, id) => {
        event.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div data-aos="fade-down" data-aos-duration="1000" className='border-[#0E76D8] border-2 w-[90%] rounded-lg py-2 px-6 flex items-center justify-between'>
            <Link><img src={AniketLogo} alt="Logo" className='h-8 -translate-y-1' /></Link>
            <div className='text-white flex lap:gap-10 lg:gap-10 text-lg'>
                <Link to="#about" className='hover:text-[#1AC576]' onClick={(e) => handleClick(e, "about")}>About</Link>
                <Link className='hover:text-[#1AC576]' onClick={(e) => handleClick(e, "technologies")}>Technologies</Link>
                <Link className='hover:text-[#1AC576]' onClick={(e) => handleClick(e, "project")}>Projects</Link>
                <Link className='hover:text-[#1AC576]' onClick={(e) => handleClick(e, "experiences")}>Experiences</Link>
            </div>
            <Link className='text-white px-6 py-1 my-1 text-lg border-[#1AC576] hover:text-[#1AC576] border-2 rounded-full' onClick={(e) => handleClick(e, "contact")}>Contact</Link>
        </div>
    )
}

export default DesktopNavbar
