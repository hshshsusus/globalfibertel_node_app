import React, { useEffect, useState } from "react";
import { TiLocation } from "react-icons/ti";
import { WiTime4 } from "react-icons/wi";
import { Link, useLocation } from "react-router-dom";
import { SiWhatsapp } from "react-icons/si";
import axios from "axios";
import { BASE_URL } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopNav } from "../Redux/homeSlice";
import * as FaIcons from "react-icons/fa";
import * as Fa6Icons from "react-icons/fa6";
import * as TiIcons from "react-icons/ti";
import * as SiIcons from "react-icons/si";
import * as WiIcons from "react-icons/wi";

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

    const getIcon = (icon, library) => {

        const libraries = {
            fa: FaIcons,
            fa6: Fa6Icons,
            ti: TiIcons,
            si: SiIcons,
            wi: WiIcons
        };

        if (!library) return;

        const lib = libraries[library];

        if (!icon) return;

        const Icon = lib[icon];

        return <Icon className={`${library === "fa" || library === "fa6" ? "text-white bg-red-600 p-1 rounded-full text-[22px] cursor-pointer hover:bg-red-700 hover:scale-110 duration-200" : `${library === "si" ? "text-green-500" : "text-red-500"} text-[24px]`}`} />
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
                        {getIcon(topData?.[0]?.icon, topData?.[0]?.icon_library)}
                        <p className="text-sm font-semibold text-gray-700">{topData?.[0]?.location}</p>
                    </div>
                    <div className="hidden md:flex items-center gap-3 pr-6 border-r border-gray-300">
                        {getIcon(topData?.[1]?.icon, topData?.[1]?.icon_library)}
                        <p className="text-sm font-semibold text-gray-700">+91 {topData?.[0]?.customerCareNumber}</p>
                    </div>
                    <div className="hidden md:flex items-center gap-3">
                        {getIcon(topData?.[2]?.icon, topData?.[2]?.icon_library)}
                        <p className="text-sm font-semibold text-gray-700">{topData?.[0]?.timings}</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 text-[22px]">
                    {topData?.map((data, i) => {

                        const hiddenIcon = data?.icon === "TiLocation" || data?.icon === "SiWhatsapp" || data?.icon === "WiTime4";

                        const hiddenLib = data?.icon_library === "ti" || data?.icon_library === "si" || data?.icon_library === "wi";

                        if (hiddenIcon, hiddenLib) return null;

                        return (
                            getIcon(data?.icon, data?.icon_library)
                        )
                    }
                    )}
                </div>
            </div>
        </div>
    )
}
export default TopNavbar;