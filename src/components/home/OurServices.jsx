import React from "react";
import { FaTowerBroadcast } from "react-icons/fa6";
import { GiWifiRouter } from "react-icons/gi";
import { HiOutlineArrowRight } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const OurServices = () => {

    const home = useSelector(store => store.home);
    const services = home?.services;

    return (
        <div className="mt-[40px]">
            <p className="text-[38px] text-center font-extrabold tracking-wide">
                Our Popular Services
            </p>

            <div className="flex flex-wrap items-center justify-center gap-10 mt-10 px-[10%]">
                {services?.map((each, i) => {
                    return (
                        <div
                            key={i}
                            className="group w-[300px] bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-3 hover:bg-gradient-to-b hover:from-red-50 hover:to-white"
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
                            <p className="mt-5 text-[16px] text-gray-500 text-start leading-relaxed h-[18vh] overflow-hidden">
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
        </div>
    )
}
