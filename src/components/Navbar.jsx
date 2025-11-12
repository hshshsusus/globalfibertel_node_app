import React, { useEffect, useState } from "react";
import TopNavbar from "./TopNavbar";
import { LOGO } from "../utils";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllPacks } from "../Redux/packSlice";
import axios from "axios";
import { BASE_URL } from "../constants";
import { CgLogIn } from "react-icons/cg";
import { SiSimplelogin } from "react-icons/si";

const Navbar = () => {

    const [showPopup, setShowPopup] = useState(false);
    const [scrollValue, setScrollValue] = useState();
    const [showLogin, setShowLogin] = useState(false);

    const location = useLocation();
    const scroll = useSelector(store => store.scroll);

    const dispatch = useDispatch();
    const admin = useSelector(store => store.admin.admin);

    const getAllPackages = async () => {
        try {
            const res = await axios.get(BASE_URL + "/plans/get", { withCredentials: true });
           
            dispatch(getAllPacks(res.data));

        } catch (error) {
            console.log(error);
        }
    }
    const handleScroll = () => {
        setScrollValue(window.scrollY);
    }

    useEffect(() => {
        admin && getAdminPro();
        getAllPackages();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <div>
            <TopNavbar />
            <div className={`flex items-center justify-between py-1.5 px-14 ${scroll && 'w-[100%] fixed top-0 left-0 z-50 navshadow animate__animated animate__fadeInDown '} ${scrollValue <= 10 && "animate__animated animate__fadeInUp"} bg-white`}>
                <div className="relative w-[100px]" onMouseOver={() => setShowPopup(true)} onMouseLeave={() => setShowPopup(false)}>
                    <img src={LOGO} alt="logo" className="w-[75px] h-[75px]" />
                    {showPopup && <Link to={"/"}><p className="hover:text-white hover:font-bold rounded-tl-[10px] rounded-br-[10px] cursor-pointer py-[4px] px-[8px] bg-[rgba(0,0,0,0.6)] hover:bg-[rgba(0,0,0,0.9)] text-gray-200 absolute bottom-[-10px] right-2.5 text-[14px]">Go Home</p></Link>}
                </div>
                <div className="pr-5">
                    <ul className="flex items-center justify-between gap-8 text-[14px] text-gray-800 font-bold">
                        <Link to={"/"}>
                            <li className={`${location.pathname === "/" ? "text-red-600 underline" : "text-gray-800"} cursor-pointer`}>HOME</li>
                        </Link>
                        <Link to={"/plans"}>
                            <li className={`${location.pathname === "/plans" ? "text-red-600 underline" : "text-gray-800"} cursor-pointer`}>PLANS</li>
                        </Link>
                        <Link to={"/service"}>
                            <li className={`${location.pathname === "/service" ? "text-red-600 underline" : "text-gray-800"} cursor-pointer`}>SERVICES</li>
                        </Link>
                        <Link to={"/contact"}>
                            <li className={`${location.pathname === "/contact" ? "text-red-600 underline" : "text-gray-800"} cursor-pointer`}>CONTACT</li>
                        </Link>
                        <Link to={"/about"}>
                            <li className={`${location.pathname === "/about" ? "text-red-600 underline" : "text-gray-800"} cursor-pointer`}>ABOUT</li>
                        </Link>

                        <div className="relative mt-[5px] hover:text-red-600" onMouseOver={() => setShowLogin(true)} onMouseLeave={() => setShowLogin(false)}>
                            <SiSimplelogin className="text-[25px] font-bold" />
                            {showLogin && <Link to={"/auth/otp"}><div className="absolute bottom-[-30px] right-[-10px] flex items-center gap-2 hover:text-white hover:bg-gray-700 bg-black py-[5px] px-[10px] text-gray-200">
                                <p className="text-[14px] font-bold">Login</p>
                                <CgLogIn className="text-[20px] font-bold" />
                            </div></Link>}
                        </div>

                    </ul>
                </div>
            </div >

        </div >
    )
}
export default Navbar;