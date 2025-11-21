import React, { useEffect, useState } from "react";
import { TiLocation } from "react-icons/ti";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { WiTime4 } from "react-icons/wi";
import { Link, useLocation } from "react-router-dom";
import { SiWhatsapp } from "react-icons/si";
import axios from "axios";
import { BASE_URL } from "../constants";
import { FaFacebookF, FaGoogle } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addTopNav } from "../Redux/homeSlice";

const TopNavbar = () => {

    const location = useLocation();
    const dispatch = useDispatch();
    const topData = useSelector(store => store?.home?.topNavData);

    const fetchTopData = async () => {
        try {
            const res = await axios.get(BASE_URL + "/home/topnav", { withCredentials: true })
            dispatch(addTopNav(res.data))
        } catch (error) {
            // console.log(error)
        }
    }

    useEffect(() => {
        !topData && fetchTopData();
    }, [])
    return (
        <div className="w-full shadow-md border-b border-gray-500">
            <div className="max-w-[1400px] mx-auto flex items-center justify-between py-3 px-6 lg:px-10">
                <div className="flex items-center gap-8">
                    {location.pathname === "/login" && (
                        <Link to="/">
                            <img
                                src="https://e7.pngegg.com/pngimages/65/490/png-clipart-internet-service-provider-broadband-internet-access-others-miscellaneous-angle-thumbnail.png"
                                alt="logo"
                                className="w-[55px] h-[55px] rounded-full shadow-md hover:scale-105 duration-300"
                            />
                        </Link>
                    )}
                    <div className="hidden md:flex items-center gap-3 pr-6 border-r border-gray-300">
                        <TiLocation className="text-red-500 text-[24px]" />
                        <p className="text-sm font-semibold text-gray-700">{topData?.location}</p>
                    </div>
                    <div className="hidden md:flex items-center gap-3 pr-6 border-r border-gray-300">
                        <SiWhatsapp className="text-green-600 text-[24px]" />
                        <p className="text-sm font-semibold text-gray-700">+91 {topData?.customerCareNumber}</p>
                    </div>
                    <div className="hidden md:flex items-center gap-3">
                        <WiTime4 className="text-red-500 text-[24px]" />
                        <p className="text-sm font-semibold text-gray-700">{topData?.timings}</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 text-[22px]">
                    {[FaFacebookF, FaInstagram, FaGoogle, AiOutlineYoutube, FaTwitter].map(
                        (Icon, i) => (
                            <Icon
                                key={i}
                                className="text-white bg-red-600 p-1 rounded-full text-[22px] cursor-pointer hover:bg-red-700 hover:scale-110 duration-200"
                            />
                        )
                    )}
                </div>
            </div>
        </div>


    )
}
export default TopNavbar;