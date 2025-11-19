import React, { useEffect, useState } from "react";
import { FaTowerBroadcast } from "react-icons/fa6";
import { GiWifiRouter } from "react-icons/gi";
import { HiOutlineArrowRight } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { useRef } from "react";

export const OurServices = () => {

    const [showLeftArrow, setLeftArrow] = useState(false);
    const [showrightArrow, setRightArrow] = useState(true);

    const home = useSelector(store => store.home);
    const services = home?.services;

    const slideRef = useRef();

    const handleScrolle = () => {
        const ele = slideRef.current;
        const maxScroll = ele.scrollWidth - ele.clientWidth;

        console.log("scrollleft", ele.scrollLeft);
        console.log("scrollWidth", ele.scrollWidth);
        console.log("clientWidth", ele.clientWidth);

        if (ele.scrollLeft >= 80) {
            setLeftArrow(true)
        } else {
            setLeftArrow(false)
        }

        if (ele.scrollLeft === maxScroll) {
            setRightArrow(false)
        } else {
            setRightArrow(true)
        }
    }

    const handleScroll = () => {

    }

    const handleRightArrow = () => {
        slideRef.current.scrollLeft = slideRef.current.scrollLeft + 300;
    }

    const handleLeftArrow = () =>{
        slideRef.current.scrollLeft = slideRef.current.scrollLeft - 300;
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, [])
    return (
        <div className="mt-[40px]">
            <p className="text-[38px] text-center font-extrabold tracking-wide">
                Our Popular Services
            </p>

            <div className="flex items-center mx-[6%] mt-[4%] overflow-hidden relative rounded-3xl py-3.5">
                {showLeftArrow && <div className="absolute top-0 left-0 h-full w-[150px] px-[25px] leftArrow flex items-center justify-center w-[150px]" onClick={handleLeftArrow}>
                    <MdArrowBackIos className="text-[55px] arrow rounded-full" />
                </div>}
                <div className="cards pl-40 whitespace-nowrap" ref={slideRef} onScroll={handleScrolle}>
                    {services?.map((each, i) => {
                        return (
                            <div
                                key={i}
                                className="group card w-[300px] bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer hover:bg-gradient-to-b hover:from-red-50 hover:to-white"
                            >
                                <div className="flex">
                                    {each.serviceName === "Broadband" ? <FaTowerBroadcast
                                        className="text-red-600 text-[50px] group-hover:scale-110 transition-all duration-300"
                                    /> : <GiWifiRouter
                                        className="text-red-600 text-[50px] group-hover:scale-110 transition-all duration-300"
                                    />}
                                </div>
                                <p className="mt-5 text-[24px] text-gray-800 font-bold text-start group-hover:text-red-600 transition-all duration-300">
                                    {each?.serviceName}
                                </p>
                                <p className="mt-5 text-[16px] text-gray-500 whitespace-normal text-start leading-relaxed h-[18vh] overflow-hidden">
                                    {each?.serviceDescription}
                                </p>
                                <Link to="/service">
                                    <div className="mt-6 flex items-center justify-center gap-2 text-red-600 font-bold group-hover:gap-4 transition-all duration-300">
                                        <p>READ MORE</p>
                                        <HiOutlineArrowRight className="text-lg" />
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
                {showrightArrow && <div className="absolute top-0 right-0 h-full w-[150px] px-[25px] rightArrow flex items-center justify-center w-[150px]" onClick={handleRightArrow}>
                    <MdArrowForwardIos className="text-[55px] arrow rounded-full" />
                </div>}
            </div>
        </div>
    )
}
