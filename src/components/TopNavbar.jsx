import React, { useEffect, useState } from "react";
import { TiLocation } from "react-icons/ti";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { WiTime4 } from "react-icons/wi";
import { Link, useLocation } from "react-router-dom";
import { SiWhatsapp } from "react-icons/si";
import axios from "axios";
import { BASE_URL } from "../constants";

const TopNavbar = () => {

    const [topData, setTopData] = useState()
    const location = useLocation();

    const fetchTopData = async () => {
        try {
            const res = await axios.get(BASE_URL + "/home/topnav", { withCredentials: true })
            setTopData(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        !topData && fetchTopData();
    }, [])
    return (
        <div className="w-full border-b border-gray-200 shadow-sm bg-white">
            <div className="flex items-center justify-between px-10 py-3">

                {/* LEFT SECTION */}
                <div className="flex items-center gap-10">

                    {/* Logo only on login page */}
                    {location.pathname === "/login" && (
                        <Link to="/">
                            <img
                                src="https://e7.pngegg.com/pngimages/65/490/png-clipart-internet-service-provider-broadband-internet-access-others-miscellaneous-angle-thumbnail.png"
                                alt="logo"
                                className="w-[48px] h-[48px] rounded-full shadow-sm hover:scale-105 duration-200"
                            />
                        </Link>
                    )}

                    {/* Location */}
                    <div className="flex items-center gap-3 pr-6 border-r border-gray-300">
                        <TiLocation className="text-red-600 text-[22px]" />
                        <p className="text-sm font-medium text-gray-600">{topData?.location}</p>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex items-center gap-3 pr-6 border-r border-gray-300">
                        <SiWhatsapp className="text-green-600 text-[22px]" />
                        <p className="text-sm font-medium text-gray-600">+91 {topData?.customerCareNumber}</p>
                    </div>

                    {/* Timings */}
                    <div className="flex items-center gap-3">
                        <WiTime4 className="text-red-600 text-[22px]" />
                        <p className="text-sm font-medium text-gray-600">{topData?.timings}</p>
                    </div>
                </div>

                {/* RIGHT SECTION - SOCIALS */}
                <div className="flex items-center gap-5 text-[20px]">

                    <FaFacebook className="text-blue-600 cursor-pointer hover:scale-110 duration-200" />
                    <FaInstagram className="text-pink-600 cursor-pointer hover:scale-110 duration-200" />
                    <FaLinkedin className="text-sky-600 cursor-pointer hover:scale-110 duration-200" />
                    <FaYoutube className="text-red-600 cursor-pointer hover:scale-110 duration-200" />
                    <FaTwitter className="text-sky-600 cursor-pointer hover:scale-110 duration-200" />

                </div>
            </div>
        </div>

    )
}
export default TopNavbar;