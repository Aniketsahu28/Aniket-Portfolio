import React, { useState } from 'react';
import blueMail from '../assets/blueMail.png';
import blueInsta from '../assets/blueInsta.png';
import blueWhatsapp from '../assets/blueWhatsapp.png';
import blueLinkedin from '../assets/blueLinkedin.png';
import greenMail from '../assets/greenMail.png';
import greenInsta from '../assets/greenInsta.png';
import greenWhatsapp from '../assets/greenWhatsapp.png';
import greenLinkedin from '../assets/greenLinkedin.png';
import { Link } from 'react-router-dom';

const Contact = () => {
    const contactIcons = [
        {
            blue: blueMail,
            green: greenMail,
            link: 'mailto:aniketsahu1711@gmail.com?subject=Subject&body=Body'

        },
        {
            blue: blueWhatsapp,
            green: greenWhatsapp,
            link: 'https://wa.me/918591378232'
        },
        {
            blue: blueLinkedin,
            green: greenLinkedin,
            link: 'https://www.linkedin.com/in/aniket-sahu028/'
        },
        {
            blue: blueInsta,
            green: greenInsta,
            link: 'https://www.instagram.com/_aniket_028_/'
        },
    ];

    const [hoverIndex, setHoverIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoverIndex(index);
    };

    const handleMouseLeave = () => {
        setHoverIndex(null);
    };

    return (
        <div className='text-white text-center px-[20px] flex-col gap-6 lap:gap-10 flex py-8 lap:py-16 lap:px-28 w-full' id='contact'>
            <div data-aos="fade-up" data-aos-duration="1000" className='flex flex-col items-center justify-center gap-4'>
                <div className='w-fit flex flex-col items-center text-[#1AC576]'>
                    <h2 className='text-4xl lap:text-6xl font-semibold mb-2 font-karla'>Contact</h2>
                    <hr className='w-[70%] h-[2px] lap:h-[3px] font-bold bg-[#1AC576]' />
                </div>
                <p className='font-inter lap:text-md'>Get in touch</p>
            </div>
            <div className='flex gap-4 items-center justify-center'>
                {contactIcons.map((icon, index) => (
                    <Link
                        data-aos="zoom-in-up" data-aos-duration="800"
                        to={icon.link}
                        target='blank'
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        key={index}
                        className='w-14'
                    >
                        <img src={hoverIndex === index ? icon.green : icon.blue} alt="contact icon" />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Contact;
