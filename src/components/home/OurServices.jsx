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
        <div className="mt-[25px] ">
            <p className="text-[35px] text-center py-[10px] font-bold">Our popular services</p>
            <div className="flex items-center justify-center gap-8 mt-[20px] mx-[10%] ">
                {
                    services?.map((each, i) => {
                        return (
                            <div key={i} className="flex flex-col gap-5 border border-gray-200 py-4 px-5 rounded-md service ">
                                <FaTowerBroadcast className="text-red-600 text-[45px] hover:text-red-600" />
                                <p className="text-[25px] text-gray-700 font-bold hover:text-white">{each?.serviceName}</p>
                                <p className="text-[16px] text-gray-500 hover:text-white">{each?.serviceDescription}</p>
                                <Link to={"/service"}><div className="flex items-center gap-3 text-[14px] text-red-600 font-bold hover:text-red-600 cursor-pointer">
                                    <p >READ MORE</p>
                                    <HiOutlineArrowRight />
                                </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
