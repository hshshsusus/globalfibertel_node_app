import React, { useEffect, useState } from "react";
import DataUsage from "./DataUsage";
import Billing from "./Billing";
import BarChartData from "./BarChartData";

const UserDashboard = () => {

    const [scrollValue, setScrollValue] = useState();

    const handleScroll = () =>{
        setScrollValue(window.scrollY)
    }
    
    useEffect(() =>{
        window.addEventListener("scroll", handleScroll)
    },[])

    return (
        <>
            <div className="mt-[75px] flex items-center gap-4 ml-[2%]">
                <div className="w-[35vw] flex flex-col gap-10 py-[55px] px-[65px] account rounded-lg">
                    <p className="text-[25px] text-red-600 font-bold ">Account summary</p>
                    <p className="text-[35px] font-bold">User name</p>
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col gap-2">
                            <p className="text-[18px] text-gray-600 font-bold">Current plan</p>
                            <p className="text-[22px] font-bold pb-[10px]">Speed</p>
                            <button className="py-[10px] rounded-tl-[10px] rounded-br-[8px] px-[25px] text-[18px] border border-red-600 text-red-600 font-semibold cursor-pointer hover:bg-red-600 hover:text-white transition-all duration-300 ease-in">Renew plan</button>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-[18px] text-gray-600 font-bold">Validity</p>
                            <p className="text-[22px] pb-[10px] font-bold">*months</p>
                            <button className="py-[10px] rounded-tl-[10px] rounded-br-[8px] px-[25px] text-[18px] border border-red-600 text-red-600 font-semibold cursor-pointer hover:bg-red-600 hover:text-white transition-all duration-300 ease-in">Upgrade plan</button>
                        </div>
                    </div>
                </div>
                <DataUsage />
            </div>
            {scrollValue > 10 &&<BarChartData/>}
            <Billing/>
        </>
    )
}
export default UserDashboard;