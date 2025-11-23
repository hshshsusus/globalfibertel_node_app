import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard2";
import { useSelector } from "react-redux";

const UserDashboard = () => {

    const [scrollValue, setScrollValue] = useState();
    const navigate = useNavigate();

    const customerData = useSelector(store => store.customer)
    console.log(customerData)

    const handleScroll = () => {
        setScrollValue(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, [])

    const handleChatbot = async () => {
        navigate("/user/chatbot")
    }
    return (
        <Dashboard />
    //     <div className="relative flex flex-col items-start justify-center gap-6 mt-20 px-5">
    //         <div className="w-full lg:w-[35vw] flex flex-col gap-12 py-12 px-10 rounded-xl 
    //   bg-white/80 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-200">
    //             <p className="text-2xl text-red-600 font-extrabold tracking-wide">
    //                 Account Summary
    //             </p>
    //             <p className="text-3xl font-bold text-gray-900">
    //                 User Name
    //             </p>
    //             <div className="flex flex-col md:flex-row items-start justify-between gap-6">
    //                 <div className="flex flex-col gap-3">
    //                     <p className="text-lg text-gray-500 font-semibold">Current Plan</p>
    //                     <p className="text-2xl font-bold text-gray-800 pb-2">Speed</p>
    //                     <button className="py-2.5 px-7 text-lg font-semibold border border-red-600 text-red-600 rounded-xl shadow-sm hover:bg-red-600 hover:text-white hover:shadow-[0_4px_15px_rgba(255,0,0,0.4)] transition-all duration-300 ease-out">
    //                         Renew Plan
    //                     </button>
    //                 </div>
    //                 <div className="flex flex-col gap-3">
    //                     <p className="text-lg text-gray-500 font-semibold">Validity</p>
    //                     <p className="text-2xl font-bold text-gray-800 pb-2">*months</p>
    //                     <button className="py-2.5 px-7 text-lg font-semibold border border-red-600 text-red-600 rounded-xl shadow-sm hover:bg-red-600 hover:text-white hover:shadow-[0_4px_15px_rgba(255,0,0,0.4)] transition-all duration-300 ease-out">
    //                         Upgrade Plan
    //                     </button>
    //                 </div>
    //             </div>
    //         </div>
            
    //         <div className="w-full lg:w-[50vw]">
    //             <Billing />
    //         </div>
    //     </div>

    )
}
export default UserDashboard;