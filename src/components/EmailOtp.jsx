import React, { useState } from "react";
import TopNavbar from "./TopNavbar";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdOutlineMailLock } from "react-icons/md";
import { IoMdArrowForward } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import { BASE_URL } from "../constants";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/userslice";
import Loader from "./Loader";

const EmailOtp = () => {

    const [email, setEmail] = useState("");
    const [showError, setShowError] = useState();
    const [loader, setLoader] = useState(false);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOTP = async () => {
        try {
            if(email.length === 0) return;
            setShowError();
            setLoader(true);
            const res = await axios.post(BASE_URL + "/login/user/otp", { email }, { withCredentials: true })
            dispatch(addUser(res.data));
            navigate("/auth/otp/verify")
        } catch (error) {
            setLoader(false)
            setShowError(error.response.data.message);
        }
    }

    return (
        <>
            <TopNavbar />
            <div className="mx-[10%] my-[5%] flex items-center justify-between py-[35px] px-[6%] emailOtp">
                <div className="flex flex-col gap-7 w-[34%]">
                    <p className="text-[32px] font-bold">Enjoy your life with<br /> high speed internet</p>
                    <ul className="flex flex-col gap-5 pl-[20px]">
                        <li className="flex items-center gap-3.5">
                            <IoMdCheckboxOutline className="text-[20px] text-green-600 font-bold" />
                            <p className="text-[18px] text-gray-600">Broadband service</p>
                        </li>
                        <li className=" flex items-center gap-3.5">
                            <IoMdCheckboxOutline className="text-[20px] text-green-600 font-bold" />
                            <p className="text-[18px] text-gray-600">High speed internet</p>
                        </li>
                        <li className="flex items-center gap-3.5">
                            <IoMdCheckboxOutline className="text-[20px] text-green-600 font-bold" />
                            <p className="text-[18px] text-gray-600">Instant customer support</p>
                        </li>
                        <li className="flex items-center gap-3.5">
                            <IoMdCheckboxOutline className="text-[20px] text-green-600 font-bold" />
                            <p className="text-[18px] text-gray-600">24/7 availability</p>
                        </li>
                    </ul>
                </div>
                <div className=" flex flex-col gap-10 py-[30px] px-[30px] w-[65%] otpbox mx-auto">
                    <div className="flex items-center gap-2.5 mx-auto">
                        <p className="text-[33px] font-bold text-green-600">Email </p>
                        <span className="text-[30px] font-bold text-orange-600">verification</span>
                        <MdOutlineMailLock className="text-[30px] text-orange-600 font-bold" />
                    </div>
                    <div className="flex flex-col gap-2 pl-[20%]">
                        <p className="text-[16px] text-gray-700 font-bold">Email address</p>
                        <input type="email" placeholder="enter your email address..." className="py-[10px]  px-[15px] otpInput border border-gray-500 rounded-full w-[70%] focus:border-none" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    {showError && <p className="animate__animated animate__flash pl-[20%] overflow-hidden w-[100%] text-[14px] text-red-600 font-semibold text-start mt-[-15px] mb-[-16px]">{showError}</p>}
                    <div className="flex flex-col gap-3.5 mx-auto">
                        <div className="transition delay-150 duration-300 ease-in-out flex gap-1.5 items-center cursor-pointer hover:bg-red-400 rounded-tl-[10px] rounded-br-[10px] justify-center bg-red-600 text-white font-bold w-fit py-[10px] px-[35px]" onClick={handleOTP}>
                            <button className="cursor-pointer">{loader ? <Loader /> : "Get otp"}</button>
                            {!loader && <IoMdArrowForward className="text-[22px]" />}
                        </div>
                        <p className="text-gray-700 font-bold text-center">or</p>
                        <Link to={"/"}><div className="flex items-center gap-2.5 hover:text-green-700 transition-all duration-300 ease-in hover:underline cursor-pointer text-[16px] font-bold text-blue-700">
                            <FaArrowLeft />
                            <p>Back to Home</p>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default EmailOtp;