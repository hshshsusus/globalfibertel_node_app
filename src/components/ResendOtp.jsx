import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../Redux/userslice";
import { toast } from "react-toastify";
import Loader from "./Loader";

const ResendOtp = (prop) => {

    const { email, otpExpiry } = prop;
    // console.log(Date.now() - otpExpiry)
    const remainingTime = Math.floor(otpExpiry - Date.now() / 1000);
    const [timer, setTimer] = useState(remainingTime);
    const [resendOtp, setResendOtp] = useState(false);
    const [loader, setLoader] = useState(false);
    const [newTimer, setNewTimer] = useState();

    const user = useSelector(store => store.user);
    
    const dispatch = useDispatch();

    const handleResendOtp = async () => {
        try {
            setLoader(true)
            const res = await axios.post(BASE_URL + "/login/user/otp/resend", { email }, { withCredentials: true });
            setTimer(Math.floor(res?.data?.otpExpiry - Date.now() / 1000));
            toast.success("OTP resended successfully.!")
            dispatch(addUser(res.data))
            setLoader(false)
        } catch (error) {

            toast.error("Failed to resend otp.!")
            setLoader(false)
            console.log(error)
        }
    }

    useEffect(() => {

        if (timer <= 0) {
            setResendOtp(true);
            return;
        }

        const timeId = setInterval(() => {
            timer !== 0 && setTimer((prev) => prev - 1)
        }, 1000)

        const timeFormate = () => {
        }
        return () => {
            clearInterval(timeId);
        }
    }, [timer]);

    return (
        <div className="w-full flex flex-col items-center justify-end mt-3">
            <div className="bg-gray-100 px-6 py-3 rounded-xl shadow-md border border-gray-200 flex items-center gap-2">
                {!resendOtp ? (
                    <>
                        <p className="text-gray-600 font-medium tracking-wide">
                            Resend OTP in
                        </p>
                        <span className="font-bold text-red-600 text-lg">
                            {Math.floor(timer / 60)} : {String(timer % 60).padStart(2, "0")}
                        </span>
                    </>
                ) : (
                    <p className="text-green-600 font-semibold text-lg">
                        OTP expired!
                    </p>
                )}
            </div>
            <button
                disabled={!resendOtp}
                className={`
          mt-4 px-5 py-2 rounded-lg font-semibold transition-all 
          ${resendOtp
                        ? "bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 rounded-xl text-white font-semibold"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }
        `}
                onClick={handleResendOtp} >
                {loader ? <Loader /> : "Resend OTP"}
            </button>

        </div>
    )
}
export default ResendOtp;