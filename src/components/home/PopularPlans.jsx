import React, { useState } from "react";
import { packagesData } from "../../utils";
import { IoMdCheckboxOutline } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const PopularPlans = () => {

    const [hover, setHover] = useState();

    const popularPacks = useSelector(store => store.pack.allPacks)
       
    return (
        <div className="mt-[25px]">
            <p className="text-[35px] text-center py-[10px] font-bold">Our Popular plans</p>
            <div className="flex flex-wrap items-center justify-center gap-14 mx-auto py-1.5 px-14 mt-[25px]">
                {
                    popularPacks?.slice(0, 3)?.map((prop, i) => {
                        const { uploadSpeed, downloadSpeed, price, validity } = prop;
                        return (
                            <div key={i} className="animate__animated animate__slideInDown border border-gray-300 py-6 px-12 rounded-md relative pack" onMouseOver={() => setHover(i)} onMouseLeave={() => setHover()}>
                                {hover === i && <img src="https://www.actcorp.in/themes/custom/actcorp/Plan_hover_images_webp/Bank_bottom.webp" alt="img" className="absolute w-[75px] h-[75px] top-[-50px] right-[-40px] bag animate__animated animate__fadeIn bag" />}
                                <p className="text-center text-[40px] text-red-600">{uploadSpeed}</p>
                                <div className="mt-[30px] ">
                                    <div className="flex gap-1 items-center">
                                        <IoMdCheckboxOutline className="text-green-500" />
                                        <p className="text-[16px] text-gray-600">{downloadSpeed} Upload</p>
                                    </div>
                                    <div className="flex gap-1 items-center">
                                        <IoMdCheckboxOutline className="text-green-500" />
                                        <p className="text-[16px] text-gray-600">{downloadSpeed} Download</p>
                                    </div>
                                    <div className="flex gap-1 items-center">
                                        <IoMdCheckboxOutline className="text-green-500" />
                                        <p className="text-[16px] text-gray-600">Unlimited</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center mt-[25px]">
                                    <p className="text-[30px]">Rs{price}</p>
                                    <span className="text-end pt-2.5">/{validity}</span>
                                </div>
                                <Link to={"/plans"}><div className="btn flex items-center justify-center gap-2.5 mt-[25px] py-2.5 px-6 cursor-pointer font-bold text-red-600 rounded-tl-[15px] rounded-br-[15px] hover:bg-red-600 hover:text-white transition duration-500 ease-in-out">
                                    <p>View all plans</p>
                                    <FaArrowRight />
                                </div>
                                </Link>
                                {hover === i && <img src="https://www.actcorp.in/themes/custom/actcorp/Plan_hover_images_webp/MeshGraphicBottom.webp" alt="img" className="absolute w-[80px] h-[80px] left-[-30px] bottom-[-30px] animate__animated animate__fadeIn" />}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
