import React, { useEffect, useRef, useState } from "react";
import TopNavbar from "./TopNavbar";
import { IoMdCheckboxOutline } from "react-icons/io";
import Footer from "./Footer";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../Redux/userslice";
import Loader from "./Loader";
import { toast } from "react-toastify";
import ResendOtp from "./ResendOtp";

const VerifyOtp = () => {

    const OTP_NUMBER_COUNT = 5;

    const [inputArr, setInputArr] = useState(new Array(OTP_NUMBER_COUNT).fill(""));
    const [showError, setShowError] = useState();
    const [loader, setLoader] = useState(false)

    const user = useSelector(store => store?.user);
    console.log(user)
    const email = user?.email;
    const otpExpiry = user?.otpExpiry
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const refArr = useRef([]);

    const isFilled = inputArr.every(e => e !== "");

    const handleOtpValues = (value, index) => {
        if (isNaN(value)) return;
        const newValue = value.trim();
        const newArr = [...inputArr];
        newArr[index] = newValue.slice(-1);
        setInputArr(newArr);

        if (index === OTP_NUMBER_COUNT - 1) return;
        newValue && refArr.current[index + 1].focus();
    }

    useEffect(() => {
        refArr.current[0].focus();
    }, [])

    const handleFocus = (e, index) => {

        if (!e.target.value && e.key === "Backspace") {
            if (index === 0) return;
            refArr.current[index - 1].focus();
        }
    }

    const handleSentOTP = async () => {
        try {
            setLoader(true);
            setShowError();
            const { email } = user;
            const otp = parseInt(inputArr.join(''));
            const res = await axios.post(BASE_URL + "/login/user/otp/verify", { email, otp }, { withCredentials: true })
            dispatch(addUser(res.data));
            toast.success("Logged in successfully.!");
            navigate("/")
            setLoader(false)
        } catch (error) {
            toast.error("Login unsuccessfull!")
            setLoader(false)
            setShowError(error?.response?.data?.message)
            console.log(error)
        }
    }

    return (
        <>
            <TopNavbar />
            <div className="mx-[10%] my-[6%] flex items-center justify-between py-[35px] px-[8%] emailOtp">
                <div className="flex flex-col gap-7 w-[50%]">
                    <p className="text-[35px] font-bold">Enjoy your life with<br /> high speed internet</p>
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
                <div className="flex items-center justify-center py-[35px] px-[40px] otpbox rounded-2xl">
                    <div className="flex flex-col gap-10">
                        <Link to={"/auth/otp"}>
                            <IoIosArrowBack className="text-[55px] font-bold text-red-600 p-[10px] rounded-full hover:bg-[rgba(0,0,0,0.1)] cursor-pointer" />
                        </Link>
                        <div className="mt-[-30px]">
                            <p className="text-[25px] font-bold text-green-600">OTP<span className="text-[30px] font-bold text-orange-500">  verification</span></p>
                            <p className="text-gray-500 font-semibold">The otp has been sent to your email address. please check it out!</p>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="flex gap-6">
                                {
                                    inputArr.map((value, index) => {
                                        return <input key={index} type="text" placeholder={value} value={inputArr[index]} onChange={(e) => handleOtpValues(e.target.value, index)} className="border border-gray-500 rounded-xl w-[45px] h-[45px] text-center leading-[45px] text-[22px] font-semibold focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-none" ref={(input) => refArr.current[index] = input} onKeyDown={(e) => {
                                            e.key === "Enter" && handleSentOTP();
                                            handleFocus(e, index);
                                        }} />
                                    })
                                }
                            </div>
                            <div className="flex items-end justify-end text-red-600 font-bold "><ResendOtp email={user?.email} otpExpiry={user?.otpExpiry} /></div>
                            <p className="text-[14px] font-semibold text-red-600">{showError}</p>
                        </div>
                        <div className={`transition delay-150 duration-300 ease-in-out flex gap-1.5 items-center cursor-pointer hover:bg-red-400 rounded-tl-[10px] rounded-br-[10px] justify-center ${isFilled ? "bg-red-600 text-white font-bold" : "bg-gray-400 text-white font-bold"} w-fit py-[10px] px-[35px] mt-[-40px] mt-[20px]`} onClick={() => isFilled && handleSentOTP()}>
                            <button className="cursor-pointer">{loader ? <Loader /> : "Verify"}</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default VerifyOtp;