import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { MdHeadsetMic } from "react-icons/md";

const Footer = () => {
    return (
        <div className="my-10">

            {/* MAIN FOOTER CONTENT */}
            <div className="flex justify-between py-12 px-16 border-t border-gray-200 bg-white shadow-sm rounded-xl">

                {/* CONTACT */}
                <div className="flex items-start gap-6">
                    <MdHeadsetMic className="text-[48px] text-red-600" />

                    <div>
                        <p className="text-[18px] text-gray-500 font-semibold">Contact Us 24/7</p>

                        <p className="mt-2 text-[20px] font-semibold hover:text-red-600 cursor-pointer">
                            (+91) 9999999999
                        </p>

                        <p className="mt-2 text-[20px] font-semibold hover:text-red-600 cursor-pointer">
                            (+91) 8888888888
                        </p>
                    </div>
                </div>

                {/* SERVICES */}
                <div className="flex flex-col gap-3">
                    <p className="text-[20px] font-bold text-gray-800">Our Services</p>

                    <div className="text-[16px] text-gray-600 flex flex-col gap-1 pl-1">
                        <p className="hover:text-blue-600 cursor-pointer hover:underline">Broadband Service</p>
                        <p className="hover:text-blue-600 cursor-pointer hover:underline">Fast Wi-Fi Connection</p>
                        <p className="hover:text-blue-600 cursor-pointer hover:underline">24/7 Customer Support</p>
                    </div>
                </div>

                {/* MENU */}
                <div className="flex flex-col gap-3">
                    <p className="text-[20px] font-bold text-gray-800">Menu</p>

                    <p className="text-gray-600 hover:text-blue-600 cursor-pointer hover:underline">
                        Terms & Conditions
                    </p>

                    <p className="text-gray-600 hover:text-blue-600 cursor-pointer hover:underline">
                        Privacy Policy
                    </p>
                </div>

                {/* TIMINGS */}
                <div className="flex flex-col gap-3 pr-5">
                    <p className="text-[20px] font-bold text-gray-800">Timings</p>

                    <div className="text-gray-600 leading-[1.5]">
                        <p>Monday – Saturday</p>
                        <p>9:00 AM – 6:00 PM</p>
                    </div>
                </div>
            </div>
            {/* SOCIAL ICONS */}
            <div className="flex items-center justify-center gap-6 mt-6">
                <FaFacebookF className="text-white bg-red-600 p-1 rounded-full text-[22px] cursor-pointer hover:bg-red-700 hover:scale-110 duration-200" />
                <FaInstagram className="text-white bg-red-600 p-1 rounded-full text-[22px] cursor-pointer hover:bg-red-700 hover:scale-110 duration-200" />
                <FaGoogle className="text-white bg-red-600 p-1 rounded-full text-[22px] cursor-pointer hover:bg-red-700 hover:scale-110 duration-200" />
                <AiOutlineYoutube className="text-white bg-red-600 p-1 rounded-full text-[22px] cursor-pointer hover:bg-red-700 hover:scale-110 duration-200" />
                <FaTwitter className="text-white bg-red-600 p-1 rounded-full text-[22px] cursor-pointer hover:bg-red-700 hover:scale-110 duration-200" />
            </div>
        </div>

    )
}
export default Footer
