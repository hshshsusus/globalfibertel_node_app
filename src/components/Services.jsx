import React, { useEffect, useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { OurServices } from "./home/OurServices";
import { useDispatch } from "react-redux";
import { addScroll } from "../Redux/scrollSlice";
import ServicesShimmer from "../ShimmerUI/ServicesShimmer";

const Services = () => {

    const [scroll, setScroll] = useState(false);
    const [showShimmer, setShowShimmer] = useState(false);

    const dispatch = useDispatch();

    const handleScroll = () => {
        if (window.scrollY > 20) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    }
    
    useEffect(() => {
        dispatch(addScroll(scroll));
        const timeId = setTimeout(() =>{
            setShowShimmer(true)
        },2000)
    }, [scroll, dispatch]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return !showShimmer ? <ServicesShimmer/> : (
        <>
            <div className="flex items-center mx-[5%] gap-[35px] my-[25px] z-10">
                <div className="flex flex-col gap-5">
                    <p className="text-[40px] font-bold">Find Perfect Network Solutions From Us</p>
                    <p className="text-[18px] text-gray-500">Home Internet to connect your computer, phone, and other devices in<br /> your home simultaneously.</p>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2.5">
                            <IoMdCheckmarkCircleOutline className="text-green-600" />
                            <p>Quality support</p>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <IoMdCheckmarkCircleOutline className="text-green-600" />
                            <p>Skilled technical team</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://vnetservices.in/wp-content/uploads/2022/01/in_services_img.jpg" alt="" className="rounded-br-[15px] rounded-tl-[15px] animate__animated animate__fadeInRight" />
                </div>
            </div>
            <div>
                <p className="text-[35px] text-center font-bold">Find Perfect Network Solutions</p>
                <OurServices />
            </div>
        </>
    )
}
export default Services;