import React, { useState } from "react";
import { Link } from "react-router-dom";
import AniketLogo from "../assets/AniketLogo.png"
import HamburgerButton from "./HamburgerButton.jsx";

const MobileNavbar = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="absolute w-[95%] bg-mainBlue py-2 pr-2 pl-4 z-10 border-[#0E76D8] border-2 rounded-lg bg-black">
            <div className="flex justify-between">
                <Link to="/">
                    <img className="h-[40px]" src={AniketLogo} alt="" />
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
                <Link
                    onClick={() => {
                        setExpanded(!expanded);
                    }}
                    className={`${expanded ? "block" : "hidden"
                        } hover:text-[#1AC576] relative text-xl w-full block `}
                >
                    About
                </Link>
                <Link
                    onClick={() => {
                        setExpanded(!expanded);
                    }}
                    className={`${expanded ? "block" : "hidden"
                        } hover:text-[#1AC576] relative text-xl w-full block`}
                >
                    Technologies
                </Link>
                <Link
                    onClick={() => {
                        setExpanded(!expanded);
                    }}
                    className={`${expanded ? "block" : "hidden"
                        } hover:text-[#1AC576] relative text-xl w-full block `}
                >
                    Experiences
                </Link>
                <Link
                    onClick={() => {
                        setExpanded(!expanded);
                    }}
                    className={`${expanded ? "block" : "hidden"
                        } hover:text-[#1AC576] relative text-xl w-full block `}
                >
                    Projects
                </Link>
                <Link
                    onClick={() => {
                        setExpanded(!expanded);
                    }}
                    className={`${expanded ? "block" : "hidden"
                        } hover:text-[#1AC576] relative text-xl w-full block `}
                >
                    Contact
                </Link>
            </div>
        </div>
    );
};

export default MobileNavbar
