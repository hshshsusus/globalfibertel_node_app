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
        <div className="flex items-center justify-between py-1.5 px-14 border-b border-gray-200 topNav">

            <div className="flex items-center justify-center gap-10 py-3.5 topChild1">
                {location.pathname === "/login" && <Link to={"/"}>
                    <img src="https://e7.pngegg.com/pngimages/65/490/png-clipart-internet-service-provider-broadband-internet-access-others-miscellaneous-angle-thumbnail.png" alt="" className="w-[45px] h-[45px]" />
                </Link>}
                <div className="flex items-center justify-center gap-3 text-[20px] border-r-3 border-gray-300 pr-6 topSubChild1">
                    <TiLocation className="text-red-600 text-[20px]" />
                    <p className="text-[14px] text-gray-500">{topData?.location}</p>
                </div>
                <div className="flex items-center justify-center gap-3 text-[20px] border-r-3 border-gray-300 pr-6">
                    <SiWhatsapp className="text-green-700 text-[20px]" />
                    <p className="text-[14px] text-gray-500">+91 {topData?.customerCareNumber}</p>
                </div>
                <div className="flex items-center justify-center gap-3 text-[20px] pr-6">
                    <WiTime4 className="text-red-600 text-[20px]" />
                    <p className="text-[14px] text-gray-500">{topData?.timings}</p>
                </div>
            </div>
            <div className="flex items-center justify-center gap-5 text-[18px]">
                <FaFacebook className="text-blue-600 cursor-pointer" />
                <FaInstagram className="text-pink-600 cursor-pointer" />
                <FaLinkedin className="text-sky-600 cursor-pointer" />
                <FaYoutube className="text-red-600 cursor-pointer" />
                <FaTwitter className="text-sky-600 cursor-pointer" />
            </div>
        </div>
    )
}
export default TopNavbar;