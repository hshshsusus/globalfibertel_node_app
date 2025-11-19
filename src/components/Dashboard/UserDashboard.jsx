import React, { useEffect, useState } from "react";
import DataUsage from "./DataUsage";
import Billing from "./Billing";
import BarChartData from "./BarChartData";
import { FaRocketchat } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {

    const [scrollValue, setScrollValue] = useState();
    const navigate = useNavigate();

    const handleScroll = () => {
        setScrollValue(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, [])

    const handleChatbot = async () =>{
       navigate("/user/chatbot")
    }

    return (
        <div className="relative">
            <div className="mt-[75px] flex items-center gap-4 ml-[2%]">
                <div className="w-[35vw] flex flex-col gap-12 py-12 px-10 rounded-xl 
    bg-white/80 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-200">
                    <p className="text-[26px] text-red-600 font-extrabold tracking-wide">
                        Account Summary
                    </p>
                    <p className="text-[36px] font-bold text-gray-900">
                        User Name
                    </p>
                    <div className="flex items-start justify-between">
                        <div className="flex flex-col gap-3">
                            <p className="text-[18px] text-gray-500 font-semibold">Current Plan</p>
                            <p className="text-[24px] font-bold text-gray-800 pb-2">Speed</p>

                            <button className="py-2.5 px-7 text-[18px] font-semibold border border-red-600 text-red-600 rounded-xl shadow-sm hover:bg-red-600 hover:text-white hover:shadow-[0_4px_15px_rgba(255,0,0,0.4)] transition-all duration-300 ease-out">
                                Renew Plan
                            </button>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className="text-[18px] text-gray-500 font-semibold">Validity</p>
                            <p className="text-[24px] font-bold text-gray-800 pb-2">*months</p>
                            <button className="py-2.5 px-7 text-[18px] font-semibold border border-red-600 text-red-600 rounded-xl shadow-sm hover:bg-red-600 hover:text-white hover:shadow-[0_4px_15px_rgba(255,0,0,0.4)] transition-all duration-300 ease-out
      ">
                                Upgrade Plan
                            </button>
                        </div>
                    </div>
                </div>
                <DataUsage />
            </div>
            {scrollValue > 10 && <BarChartData />}
            <Billing />
            
        </div>
    )
}
export default UserDashboard;