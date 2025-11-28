import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";
import { TbMailOpenedFilled } from "react-icons/tb";
import { PiBuildingOfficeDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import * as Fa6Icons from "react-icons/fa6";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";

const Footer = ({ footer }) => {
    if (!footer) return;
    const { ourServices, ourProducts, importentLinks, companyInfo } = footer;
    // console.log(footer)
    const handleWhatsapp = () => {
        window.open("https://wa.me/919701520653?text=Hello%20I%20need%20help!", "_blank");
    }

    const getIcon = (icon, Library) => {
        const libraries = {
            fa6: Fa6Icons,
            fa: FaIcons,
            md:MdIcons,
        };

        const lib = libraries[Library];
        if (!lib) return null;

        const IconComponent = lib[icon];

        if (!IconComponent) {
            console.warn(`Icon not found: ${icon} in ${Library}`);
            return <span className="text-gray-500">•</span>; 
        }

        return (
            <IconComponent className="text-[18px] text-gray-500 group-hover:text-red-600 duration-200" />
        );
    };


    return (
        <div className="bg-[#0a0a0a] text-gray-300 px-[5%] pt-14 pb-10 mt-10">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-gray-700 pb-10">
                <div>
                    <Link to={"/"}><img
                        src="/company_logo.png"
                        alt="Company Logo"
                        className="w-[125px] h-[125px] mb-4"
                    /></Link>
                    <p className="text-sm text-gray-500 leading-relaxed">
                        Delivering ultra-fast broadband, secured network solutions, and modern digital services across India.
                    </p>
                </div>
                <div>
                    <p className="text-[18px] font-bold text-white mb-4">Our Services</p>
                    <div className="flex flex-col gap-3">
                        {ourServices?.map((e, i) => {
                            const Icon = e?.icon;
                            return (
                                <Link to={e.linkURL}><div key={i} className="flex items-center gap-2.5 group cursor-pointer">
                                    {getIcon(e?.icon, e?.iconLibrary)}
                                    <p className="text-[16px] group-hover:text-red-600 text-gray-400">{e.text}</p>
                                </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
                <div>
                    <p className="text-[18px] font-bold text-white mb-4">Important Links</p>
                    <div className="flex flex-col gap-3">
                        {importentLinks?.map((e, i) => {
                            const Icon = e.icon;
                            return (
                                <Link to={e.linkURL}><div key={i} className="flex items-center gap-2.5 group cursor-pointer">
                                    {getIcon(e?.icon, e?.iconLibrary)}
                                    <p className="text-[16px] group-hover:text-red-600 text-gray-400">{e.text}</p>
                                </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
                <div>
                    <p className="text-[18px] font-bold text-white mb-4">Our products</p>
                    <div className="flex flex-col gap-3">
                        {ourProducts?.map((e, i) => {
                            const Icon = e.icon;
                            return (
                                <div key={i} className="flex items-center gap-2.5 group cursor-pointer">
                                    {getIcon(e?.icon, e?.iconLibrary)}
                                    <p className="text-[16px] group-hover:text-red-600 text-gray-400">{e.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div>
                    <p className="text-[18px] font-bold text-white mb-4">Contact Us</p>
                    <img
                        src="https://erp.globalfibertel.com/assets/images/whatsapp_logo.png"
                        className="w-[130px] mb-3 cursor-pointer hover:scale-105 duration-200"
                        onClick={handleWhatsapp} />

                    <div className="flex items-center gap-3 py-1 cursor-pointer">
                        <IoIosCall className="text-[20px] text-gray-500 group-hover:text-red-600" />
                        <p className="text-[16px] hover:text-red-600 text-gray-400">+91 {companyInfo?.[0]?.phone_number}</p>
                    </div>
                    <div className="flex items-center gap-3 py-1 cursor-pointer">
                        <TbMailOpenedFilled className="text-[20px] text-gray-500" />
                        <p className="text-[16px] hover:text-red-600 text-gray-400">{companyInfo?.[0]?.email}</p>
                    </div>
                    <div className="flex flex-col py-1">
                        <div className="flex items-center gap-3">
                            <PiBuildingOfficeDuotone className="text-[20px] text-gray-500" />
                            <p className="text-[16px] text-gray-400">Corporate Office:</p>
                        </div>
                        <p className="text-[14px] text-gray-600 mt-2 font-semibold">
                            {companyInfo?.[0]?.address}
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center gap-6 mt-6">
                {[FaFacebookF, FaInstagram, FaGoogle, AiOutlineYoutube, FaTwitter].map(
                    (Icon, i) => (
                        <Icon
                            key={i}
                            className="text-white bg-red-600 p-1 rounded-full text-[22px] cursor-pointer hover:bg-red-700 hover:scale-110 duration-200"
                        />
                    )
                )}
            </div>
            <p className="text-center text-gray-500 text-[15px] mt-6 font-bold">
                © 2025 VI GLOBAL FIBERTEL PRIVATE LIMITED — All Rights Reserved.
            </p>
        </div>
    )
}
export default Footer
