import React, { useEffect, useState } from "react";
import { TbMessages } from "react-icons/tb";
import { CgArrowRight } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { addScroll } from "../Redux/scrollSlice";
import axios from "axios";
import { BASE_URL } from "../constants";
import Loader from "./Loader";
import { toast } from "react-toastify";
import { time } from "framer-motion";
import ContactShimmer from "../ShimmerUI/ContactShimmer";
import { PiBuildingOfficeDuotone } from "react-icons/pi";
import GeoMap from "./GeoMap"

const Contact = () => {

    const [name, setName] = useState("");
    const [phoneNumber, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState();
    const [loader, setLoader] = useState(false);
    const [shimmerLoader, setShimmerLoader] = useState(false);

    const [scroll, setScroll] = useState(false);

    const dispatch = useDispatch();

    const handleScroll = () => {
        if (window.scrollY > 20) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    }

    const handleContactUs = async () => {
        try {
            setLoader(true)
            const res = await axios.post(BASE_URL + "/user/contact/sent/message", {
                name,
                email,
                phoneNumber,
                message,
            }, { withCredentials: true });
            toast.success("Message submitted successfully!")
            setSuccessMessage(res.data)
            setLoader(false)
            setName("")
            setNumber("")
            setEmail("")
            setSuccessMessage("")
        } catch (error) {
            toast.error("Message submitted failed!")
            setLoader(false)
            setSuccessMessage(error.response.data.message)
        }
    }

    useEffect(() => {
        dispatch(addScroll(scroll));
        if (successMessage) {
            const time = setTimeout(() => {
                setSuccessMessage('');
            }, 5000);
        }

        const timeId = setTimeout(() => {
            setShimmerLoader(true)
        }, 500)
        return () => {
            clearTimeout(time)
            clearTimeout(timeId)
        }
    }, [scroll, dispatch, successMessage]);

    const handleContact = () => {

    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return !shimmerLoader ? <ContactShimmer /> : (
        <>
            <div className="mx-[15%] bg-white shadow-xl rounded-2xl p-6 flex gap-6 mt-[50px]">
                <div className="w-[65%] flex flex-col gap-4">
                    <p className="text-3xl text-red-600 font-extrabold">Contact Us</p>

                    <div className="flex gap-6">
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-gray-600 font-medium">Your Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="border border-gray-300 w-full py-2.5 px-4 rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition-all"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-gray-600 font-medium">Mobile Number</label>
                            <input
                                type="number"
                                placeholder="Enter mobile number"
                                className="border border-gray-300 w-full py-2.5 px-4 rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition-all"
                                value={phoneNumber}
                                onChange={(e) => setNumber(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-gray-600 font-medium">Email Address</label>
                        <input
                            type="email"
                            placeholder="email@gmail.com"
                            className="border border-gray-300 w-full py-2.5 px-4 rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition-all"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-gray-600 font-medium">Message</label>
                        <textarea
                            placeholder="Write your message..."
                            className="border border-gray-300 h-[22vh] py-2.5 px-4 rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition-all resize-none"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleContactUs()}
                        />
                    </div>

                    <p className="text-sm text-red-600 font-semibold">{successMessage}</p>

                    <button
                        onClick={handleContactUs}
                        className=" bg-red-600 hover:bg-red-500 text-white font-semibold py-3 px-6 rounded-xl flex items-center w-fit transition-all shadow-md"
                    >
                        {loader ? <Loader /> : "Submit Message"}
                        <CgArrowRight className="ml-2 text-xl" />
                    </button>
                </div>
                <div className="w-[35%] p-8 rounded-xl bg-gray-50 border border-gray-200 flex flex-col gap-4">
                    <p className="text-lg font-semibold text-gray-700">Contact Info</p>

                    <div className="flex flex-col py-1">
                        <div className="flex items-center gap-3">
                            <PiBuildingOfficeDuotone className="text-[20px] text-gray-500" />
                            <p className="text-[16px] text-gray-800 font-bold">Corporate Office:</p>
                        </div>
                        <p className="text-[14px] text-gray-600 mt-2 font-semibold">
                            Plot no 46, 5th Floor, VIP Hills,<br />
                            Hi-Tech City, Madhapur, Hyderabad,<br />
                            Telangana - 500081.
                        </p>
                    </div>

                    <div className="flex items-center gap-3 text-red-600 font-bold text-xl">
                        <TbMessages />
                        <span>(+91) 9999999999</span>
                    </div>
                </div>
            </div>
            <div className="my-[5%]">
                <GeoMap />
            </div>
        </>

    )
}
export default Contact;