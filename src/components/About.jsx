import React, { useEffect, useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addScroll } from "../Redux/scrollSlice";
import { useNavigate } from "react-router-dom";
import { Counting } from "./home/Counting";
import AboutShimmer from "../ShimmerUI/AboutShimmer";

const About = () => {

    const [scroll, setScroll] = useState(false);
    const [shimmerLoader, setShimmerLoader] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleScroll = () => {
        if (window.scrollY > 20) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    }

    const handleConnect = () => {
        navigate("/contact")
    }

    useEffect(() => {
        dispatch(addScroll(scroll));
        const timeId = setTimeout(() => {
            setShimmerLoader(true)
        }, 2500);
        return () => {
            clearTimeout(timeId)
        }
    }, [scroll, dispatch]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return !shimmerLoader ? <AboutShimmer /> : (
        <>
            <div className="relative w-full py-[60px] px-[7%] bg-gradient-to-br from-gray-50 to-white overflow-hidden -z-[10]">
                <div className="absolute top-0 left-0 w-[280px] h-[280px] bg-red-500/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-[240px] h-[240px] bg-purple-500/10 blur-3xl rounded-full"></div>

                <div className="flex items-center gap-[60px] relative z-10">     {/* Left Image */}
                    <div className="relative w-[50%] animate__animated animate__fadeIn">
                        <div className="absolute -top-5 -left-5 w-[120px] h-[120px] bg-red-400/30 blur-2xl rounded-full"></div>
                        <img
                            src="https://media.gettyimages.com/id/1081869356/photo/taking-on-the-late-shift-with-true-dedication.jpg?s=612x612&w=0&k=20&c=6cd0XCc7SXbwh3gDTDgg7yjljBPbW8gAmUUmDCQqs9E="
                            alt="img"
                            className="rounded-2xl shadow-xl w-full object-cover border-[6px] border-white"
                        />
                        <div className="absolute bottom-0 right-0 w-[150px] h-[150px] bg-red-500/30 blur-3xl rounded-full"></div>
                    </div>
                    <div className="flex flex-col gap-6 w-[50%] animate__animated animate__fadeIn">
                        <div>
                            <p className="text-[42px] leading-tight font-extrabold text-gray-900">
                                We Provide the
                                <span className="text-red-600"> Best Internet service</span>
                            </p>
                            <div className="w-[120px] h-[6px] bg-red-500 rounded-full mt-3"></div>
                        </div>
                        <p className="text-[18px] text-gray-600 leading-relaxed">
                            We are a recognized leader in next-generation digital communication,
                            providing high-speed Internet, premium networking, and seamless
                            connectivity using world-class technologies like
                            <span className="font-semibold text-gray-800"> GePON, Wi-Max</span>,
                            and a dedicated fiber backbone.
                        </p>
                        <div className="flex flex-col gap-4">

                            <div className="flex items-center gap-3 bg-white/70 backdrop-blur-xl border border-gray-200 p-3 rounded-xl shadow-sm hover:shadow-md transition-all">
                                <IoMdCheckmarkCircleOutline className="text-green-600 text-[28px]" />
                                <p className="text-[17px] text-gray-700 font-medium">Reasonable price packages</p>
                            </div>

                            <div className="flex items-center gap-3 bg-white/70 backdrop-blur-xl border border-gray-200 p-3 rounded-xl shadow-sm hover:shadow-md transition-all">
                                <IoMdCheckmarkCircleOutline className="text-green-600 text-[28px]" />
                                <p className="text-[17px] text-gray-700 font-medium">Trusted & recommended</p>
                            </div>

                        </div>
                        <button
                            onClick={handleConnect}
                            className="py-[12px] px-[26px] text-white bg-gradient-to-r from-red-600 to-red-500 rounded-xl shadow-lg hover:shadow-xl w-fit font-semibold text-[17px] transition-all hover:scale-105 "
                        >
                            Get Connection
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-[60px]">
                <Counting />
            </div>
        </>
    )
}
export default About;