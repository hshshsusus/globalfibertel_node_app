import React, { useEffect, useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Counting } from "./home/Counting";
import { useDispatch } from "react-redux";
import { addScroll } from "../Redux/scrollSlice";
import { useNavigate } from "react-router-dom";

const About = () => {

    const [scroll, setScroll] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleScroll = () => {
        if (window.scrollY > 20) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    }

    const handleConnect = () =>{
        navigate("/contact")
    }

    useEffect(() => {
        dispatch(addScroll(scroll));
    }, [scroll, dispatch]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return (
        <>
            <div className="flex items-center mx-[5%] gap-[35px] my-[25px]">
                <div>
                    <img src="https://media.gettyimages.com/id/1081869356/photo/taking-on-the-late-shift-with-true-dedication.jpg?s=612x612&w=0&k=20&c=6cd0XCc7SXbwh3gDTDgg7yjljBPbW8gAmUUmDCQqs9E=" alt="img" className="rounded-br-[15px] rounded-tl-[15px] animate__animated animate__fadeInLeft" />
                </div>
                <div className="flex flex-col gap-5">
                    <p className="text-[40px] font-bold">
                        We Provide Best Internet Connection in Twin States
                    </p>
                    <p className="text-[18px] text-gray-500">
                        We are a recognized leader in providing state-of-the-art digital communications,<br /> networking services, and Internet connectivity to individuals and businesses. Vnet<br /> Internet enables individuals, businesses, and government institutions to connect and<br /> establish connectivity with cutting edge technology such GePON and Wi-Max.
                    </p>
                    <div className="flex items-center gap-10">
                        <div className="flex items-center gap-2.5">
                            <IoMdCheckmarkCircleOutline className="text-green-600" />
                            <p>Reasonable price packages</p>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <IoMdCheckmarkCircleOutline className="text-green-600" />
                            <p>Trusted & recommended</p>
                        </div>
                    </div>
                    <button className="py-[8px] px-[15px] text-red-600 border border-red-600 w-fit rounded-br-[15px] rounded-tl-[15px] hover:bg-red-600 hover:text-white cursor-pointer font-bold" onClick={handleConnect}>Get connection</button>
                </div>
            </div>
            <Counting />
        </>
    )
}
export default About;