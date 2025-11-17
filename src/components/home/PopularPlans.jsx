import React, { useEffect, useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import { PopularPlansShimmer } from "../../ShimmerUI/PopularPlansShimmer";

export const PopularPlans = () => {

    const [hover, setHover] = useState();
    const [shimmer, setShimmer] = useState(false)

    const popularPacks = useSelector(store => store.pack.allPacks);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setShimmer(true)
        }, 500);
        return () => {
            clearTimeout(timerId)
        }
    }, [])

    return !shimmer ? <PopularPlansShimmer /> : (
        <div className="mt-[25px]">
            <p className="text-[35px] text-center py-[10px] font-bold">Our Popular plans</p>
            <div className="relative flex flex-wrap items-center justify-center gap-14 mx-auto py-1.5 px-14 mt-[25px]">
                {
                    popularPacks?.slice(0, 3)?.map((prop, i) => {
                        const { uploadSpeed, downloadSpeed, price, validity } = prop;
                        return (
                            <div
                                key={i}
                                className={`pack cursor-pointer rounded-2xl border border-gray-200 p-8 bg-white/70 backdrop-blur-xl shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate__animated animate__fadeIn`}
                                onMouseOver={() => setHover(i)}
                                onMouseLeave={() => setHover()}
                            >
                                {hover === i && (
                                    <img
                                        src="https://www.actcorp.in/themes/custom/actcorp/Plan_hover_images_webp/Bank_bottom.webp"
                                        alt="img"
                                        className="absolute w-[70px] h-[70px] top-[-40px] right-[-30px] animate__animated animate__fadeIn blur-[2px]"
                                    />
                                )}
                                <p className="text-center text-4xl font-extrabold bg-gradient-to-r from-red-600 to-orange-500 text-transparent bg-clip-text">
                                    {uploadSpeed.toUpperCase()}
                                </p>
                                <div className="mt-6 space-y-3">
                                    <div className="flex items-center gap-2">
                                        <IoMdCheckmarkCircleOutline className="text-green-600 text-xl" />
                                        <p className="text-gray-700 text-[17px]">{uploadSpeed.toUpperCase()} Upload</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <IoMdCheckmarkCircleOutline className="text-green-600 text-xl" />
                                        <p className="text-gray-700 text-[17px]">{downloadSpeed.toUpperCase()} Download</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <IoMdCheckmarkCircleOutline className="text-green-600 text-xl" />
                                        <p className="text-gray-700 text-[17px]">Unlimited Data*</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center mt-7">
                                    <p className="text-3xl font-bold text-red-600">₹{price}</p>
                                    <span className="text-gray-500 text-lg mt-1">/{validity}</span>
                                </div>                              
                                <div
                                    className="mt-7 py-3 px-6 text-center font-semibold text-white bg-gradient-to-r from-red-600 to-red-700 rounded-xl shadow-lg hover:shadow-xl hover:from-red-700 hover:to-red-800 transition-all duration-300"
                                >
                                    Buy / Subscribe
                                </div>
                                {hover === i && (
                                    <img
                                        src="https://www.actcorp.in/themes/custom/actcorp/Plan_hover_images_webp/MeshGraphicBottom.webp"
                                        alt="img"
                                        className="absolute w-[70px] h-[70px] left-[-25px] bottom-[-25px] animate__animated animate__fadeIn"
                                    />
                                )}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
