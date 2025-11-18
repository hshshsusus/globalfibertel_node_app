import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { RiArrowDropUpLine } from "react-icons/ri";
import { useSelector } from "react-redux";

const Page = () => {
    const scroll = useSelector(store => store.scroll);

    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div className="relative element">
            <Navbar />
            <Outlet />
            <Footer />
            {scroll && <div className={`fixed w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-pointer bg-red-600 circle
             right-28 bottom-9 animate__animated animate__fadeInDownBig ${scroll === false && "animate__animated animate__fadeInUpBig"}`} onClick={handleScrollTop}>
                <RiArrowDropUpLine className="text-[50px] text-white" />
            </div>}
        </div>
    )
}
export default Page;