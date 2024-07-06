import React, { useState } from "react";
import { Link } from "react-router-dom";
import AniketLogo from "../assets/AniketLogo.png"
import HamburgerButton from "./HamburgerButton.jsx";

const MobileNavbar = () => {
    const [expanded, setExpanded] = useState(false);

    const handleClick = (event, id) => {
        event.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div data-aos="fade-down" className="absolute w-[95%] bg-mainBlue py-1 pr-2 pl-4 z-10 border-[#0E76D8] border-2 rounded-lg bg-black">
            <div className="flex justify-between items-center">
                <Link to="/">
                    <img className="h-[32px] pb-1" src={AniketLogo} alt="Logo" />
                </Link>
                <div
                    onClick={() => {
                        setExpanded(!expanded);
                    }}
                >
                    <HamburgerButton status={expanded} setStatus={setExpanded} />
                </div>
            </div>
            <div
                className={`text-white text-xl ${expanded ? "h-full flex flex-col gap-5 mt-[20px] mb-[10px]" : "h-0 "
                    } transition-all duration-200 w-full`}
            >
                <a
                    href="#about"
                    onClick={(e) => {
                        handleClick(e, "about");
                        setExpanded(!expanded);
                    }}
                    className={`${expanded ? "block" : "hidden"
                        } hover:text-[#1AC576] relative text-xl w-full block `}
                >
                    About
                </a>
                <a
                    href="#technologies"
                    onClick={(e) => {
                        handleClick(e, "technologies");
                        setExpanded(!expanded);
                    }}
                    className={`${expanded ? "block" : "hidden"
                        } hover:text-[#1AC576] relative text-xl w-full block`}
                >
                    Technologies
                </a>
                <a
                    href="#projects"
                    onClick={(e) => {
                        handleClick(e, "project");
                        setExpanded(!expanded);
                    }}
                    className={`${expanded ? "block" : "hidden"
                        } hover:text-[#1AC576] relative text-xl w-full block `}
                >
                    Projects
                </a>
                <a
                    href="#experiences"
                    onClick={(e) => {
                        handleClick(e, "experiences");
                        setExpanded(!expanded);
                    }}
                    className={`${expanded ? "block" : "hidden"
                        } hover:text-[#1AC576] relative text-xl w-full block `}
                >
                    Experiences
                </a>
                <a
                    href="#contact"
                    onClick={(e) => {
                        handleClick(e, "contact");
                        setExpanded(!expanded);
                    }}
                    className={`${expanded ? "block" : "hidden"
                        } hover:text-[#1AC576] relative text-xl w-full block `}
                >
                    Contact
                </a>
            </div>
        </div>
    );
};

export default MobileNavbar;
