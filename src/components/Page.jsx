import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet, useNavigate } from "react-router-dom";
import { RiArrowDropUpLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { FaRocketchat } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import axios from "axios";
import { BASE_URL } from "../constants";
import { addFooter } from "../Redux/homeSlice";

const Page = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const footer = useSelector(store => store?.home?.footerData);
    
    const scroll = useSelector(store => store.scroll);

    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    const handleChatbot = () => {
        navigate("/user/chatbot")
    }

    const handleContact = () => {
        navigate("/contact")
    }

    const handleWhatsapp = () => {
        console.log(window)
        window.open("https://wa.me/919701520653?text=Hello%20I%20need%20help!", "_blank");
    }

    const handleFooter = async () =>{
        try {
            const res = await axios.get(BASE_URL+"/home/footer", {withCredentials:true})
            dispatch(addFooter(res.data))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
        handleFooter();
    },[])

    return (
        <div className="relative element">
            <Navbar />
            <Outlet />
            <Footer footer={footer}/>
            <FaWhatsapp className="w-[50px] h-[50px] fixed right-10 bottom-50 rounded-full flex items-center text-white p-2 justify-center cursor-pointer bg-green-600 circle
             animate__animated animate__fadeInDownBig" onClick={() => handleWhatsapp()} />
            <FaRocketchat className="w-[50px] h-[50px] fixed right-10 bottom-30 rounded-full flex items-center text-green-700 p-2 justify-center cursor-pointer bg-white circle
             animate__animated animate__fadeInDownBig chatbot" onClick={handleChatbot} />
            {scroll && <div className={`w-[50px] h-[50px] fixed right-10 bottom-10 rounded-full flex items-center justify-center cursor-pointer bg-red-600 circle
             animate__animated animate__fadeInDownBig ${scroll === false && "animate__animated animate__fadeInUpBig "}`} onClick={handleScrollTop}>
                <RiArrowDropUpLine className="text-[50px] text-white" />
            </div>}
        </div>
    )
}
export default Page;