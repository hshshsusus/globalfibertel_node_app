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
import { toast } from "react-toastify";
import { MdArrowBackIosNew } from "react-icons/md";

const EmailOtp = () => {

    const [email, setEmail] = useState("");
    const [showError, setShowError] = useState();
    const [loader, setLoader] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOTP = async () => {
        try {
            if (email.length === 0) return;
            setShowError();
            setLoader(true);
            const res = await axios.post(BASE_URL + "/login/user/otp", { email }, { withCredentials: true });
            toast.success("Otp sent successfuly!")
            console.log(res.data)
            dispatch(addUser(res.data));
            navigate("/auth/otp/verify")
        } catch (error) {
            toast.error("Failed to sent otp!")
            setLoader(false)
            setShowError(error.response.data.message);
        }
    }
    return (
        <>
            <TopNavbar />
            <div className="mx-[8%] my-[5%] flex items-center justify-between py-[40px] px-[6%] bg-gradient-to-r from-[#f6f9ff] to-[#ffffff] rounded-2xl shadow-lg">

                <div className="flex flex-col gap-8 w-[40%]">
                    <h2 className="text-[40px] leading-tight font-extrabold text-gray-800">
                        Enjoy your life with <br />
                        <span className="text-green-600">high speed internet</span>
                    </h2>

                    <ul className="flex flex-col gap-5 pl-[10px]">
                        {[
                            "Broadband service",
                            "High speed internet",
                            "Instant customer support",
                            "24/7 availability",
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <IoMdCheckboxOutline className="text-[24px] text-green-600" />
                                <p className="text-[18px] text-gray-600">{item}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-[55%]">
                    <div className="flex flex-col gap-8 p-[40px] rounded-2xl bg-white/70 backdrop-blur-lg shadow-xl border border-gray-200">
                        <MdArrowBackIosNew className="text-[35px] text-red-600 hover:bg-gray-300 rounded-full py-[5px] px-[5px] cursor-pointer" onClick={() => navigate("/")}/>
                        <div className="flex items-center gap-3 mx-auto">
                            <p className="text-[36px] font-bold text-green-600">Email</p>
                            <span className="text-[32px] font-bold text-orange-600">Verification</span>
                            <MdOutlineMailLock className="text-[32px] text-orange-600" />
                        </div>
                        <div className="flex flex-col gap-2 mx-auto w-[70%]">
                            <p className="text-[16px] text-gray-700 font-semibold">Email address</p>
                            <input
                                type="email"
                                placeholder="Enter your email address..."
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="py-[12px] px-[18px] rounded-full border border-gray-400 text-[16px]
                    focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 focus:border-none"
                                onKeyDown={(e) => e.key === "Enter" && handleOTP()} />
                        </div>
                        {showError && (
                            <p className="animate__animated animate__shakeX text-red-600 font-semibold text-center text-[14px]">
                                {showError}
                            </p>
                        )}
                        <div className="flex flex-col gap-4 mx-auto">
                            <button
                                onClick={handleOTP}
                                className="flex items-center gap-2 justify-center cursor-pointer bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 rounded-xl text-white font-semibold text-[18px] py-[12px] px-[40px] shadow-md hover:shadow-lg transition-all duration-300" >
                                {loader ? <Loader /> : "Get OTP"}
                                {!loader && <IoMdArrowForward className="text-[22px]" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
export default EmailOtp;