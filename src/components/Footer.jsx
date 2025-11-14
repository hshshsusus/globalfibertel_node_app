import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { MdHeadsetMic } from "react-icons/md";

const Footer = () => {
    return (
        <div className="my-[25px]">
            <div className="flex justify-between py-10 px-14 border-t border-gray-200 mt-[25px]">
                <div className="flex items-center gap-6">
                    <MdHeadsetMic className="text-[45px] text-red-600 font-bold" />
                    <div>
                        <p className="text-[18px] text-gray-400 font-bold">Contact us 24/7</p>
                        <p className="mt-[5px] text-[20px] font-bold hover:text-red-600">(+91) 9999999999</p>
                        <p className="mt-[10px] text-[20px] font-bold hover:text-red-600 mt-[10px]">(+91) 8888888888</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="text-[20px] font-bold">Our services</p>
                    <div className="text-[16px] text-gray-600 pl-[5px]">
                        <p className="hover:text-blue-600 cursor-pointer hover:underline">Broadband Service</p>
                        <p className="hover:text-blue-600 cursor-pointer hover:underline">Fast wifi-connection</p>
                        <p className="hover:text-blue-600 cursor-pointer hover:underline">24/7 customer service</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="text-[20px] font-bold">Menu</p>
                    <p className="hover:text-blue-600 text-gray-600 cursor-pointer hover:underline mt-[10px]">Terms & Conditions</p>
                    <p className="hover:text-blue-600 text-gray-600 cursor-pointer hover:underline">Privacy policy</p>
                </div>
                <div className="flex flex-col pr-5">
                    <p className="text-[20px] font-bold">Timings</p>
                    <div className="flex flex-col text-gray-600">
                        <p>Monday - Saturday</p>
                        <p>9:00 am - 6:00 pm</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center gap-5 text-[18px]">
                <FaFacebookF  className="text-white cursor-pointer bg-red-600 p-[4px] rounded-full text-[25px]" />
                <FaInstagram  className="text-white cursor-pointer bg-red-600 p-[4px] rounded-full text-[25px]" />
                <FaGoogle  className="text-white cursor-pointer bg-red-600 p-[4px] rounded-full text-[25px]" />
                <AiOutlineYoutube  className="text-white cursor-pointer bg-red-600 p-[4px] rounded-full text-[25px]" />
                <FaTwitter className="text-white cursor-pointer bg-red-600 p-[4px] rounded-full text-[25px]" />
            </div>
        </div>
    )
}
export default Footer
