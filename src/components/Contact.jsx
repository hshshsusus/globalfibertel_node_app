import React, { useEffect, useState } from "react";
import { TbMessages } from "react-icons/tb";
import { CgArrowRight } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { addScroll } from "../Redux/scrollSlice";
import axios from "axios";
import { BASE_URL } from "../constants";
import Loader from "./Loader";

const Contact = () => {

    const [name, setName] = useState("");
    const [phoneNumber, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState();
    const [loader, setLoader] = useState(false);

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
            });
            setSuccessMessage(res.data)
            setLoader(false)
            setName("")
            setNumber("")
            setEmail("")
            setSuccessMessage("")
        } catch (error) {
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
    
    }, [scroll, dispatch, successMessage]);

    const handleContact = () => {

    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return (
        <div className="mx-[20%] my-[25px] contact py-[2%] px-[6%] flex gap-5">

            <div className="w-[70%] flex flex-col gap-5">
                <p className="text-[25px] text-red-600 font-bold">Contact us</p>
                <div className="flex gap-6">
                    <div className="flex flex-col w-fit gap-2.5">
                        <label htmlFor="">Your name</label>
                        <input type="text" placeholder="name.." className="border border-gray-300 py-[5px] px-[10px] rounded-md input focus:border-none" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="flex flex-col w-fit gap-2.5">
                        <label htmlFor="">Mobile number</label>
                        <input type="number" placeholder="mobile number." className="num border border-gray-300 py-[5px] px-[10px] rounded-md input focus:border-none" value={phoneNumber} onChange={(e) => setNumber(e.target.value)} />
                    </div>
                </div>
                <div className="flex flex-col w-fit gap-2.5">
                    <label htmlFor="">Email address</label>
                    <input type="email" placeholder="email@gmail.com" className="border border-gray-300 py-[5px] px-[10px] rounded-md input focus:border-none" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="flex flex-col w-full gap-2.5">
                    <label htmlFor="">Message</label>
                    <textarea name="" id="" className="h-[22vh] border border-gray-300 py-[5px] px-[10px] rounded-md input focus:border-none" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>
                <p className="text-[14px] text-red-600 font-semibold">{successMessage}</p>
                <div className="text-white font-bold py-[10px] px-[20px] flex gap-2.5 items-center bg-red-600 hover:bg-red-500 w-fit rounded-br-[15px] rounded-tl-[15px]" onClick={handleContact}>
                    <button onClick={handleContactUs}>{loader ? <Loader /> : "Submit message"}</button>
                    <CgArrowRight className="text-[20px]" />
                </div>
            </div>
            <div className="w-[30%] py-[10%] border-t border-gray-300 border-b border-gray-200 h-fit flex flex-col gap-2.5">
                <p className="text-gray-600">Contact info</p>
                <p className="text-gray-600">Isnapur, Telangana-503607</p>
                <div className="flex items-center gap-1.5 text-[20px] text-red-600 font-bold">
                    <TbMessages className="" />
                    <p>(+91) 9999999999</p>
                </div>
            </div>
        </div>

    )
}
export default Contact;