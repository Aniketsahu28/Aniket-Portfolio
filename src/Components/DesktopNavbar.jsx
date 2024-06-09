import React from 'react'
import { Link } from 'react-router-dom'
import AniketLogo from "../assets/AniketLogo.png"

const DesktopNavbar = () => {
    return (
        <div className='border-[#0E76D8] border-2 w-[90%] rounded-lg py-2 px-6 flex items-center justify-between'>
            <Link><img src={AniketLogo} alt="Logo" className='h-8 -translate-y-1' /></Link>
            <div className='text-white flex lap:gap-6 lg:gap-10 text-lg'>
                <Link to="#About" className='hover:text-[#1AC576]'>About</Link>
                <Link to="#Technologies" className='hover:text-[#1AC576]'>Technologies</Link>
                <Link to="#Experiences" className='hover:text-[#1AC576]'>Experiences</Link>
                <Link to="#Project" className='hover:text-[#1AC576]'>Project</Link>
            </div>
            <Link className='text-white px-6 py-1 my-1 text-lg border-[#1AC576] hover:text-[#1AC576] border-2 rounded-full'>Contact</Link>
        </div>
    )
}

export default DesktopNavbar
