import React, { useEffect, useState } from "react";
import TopNavbar from "./TopNavbar";
import { LOGO } from "../utils";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllPacks } from "../Redux/packSlice";
import axios from "axios";
import { BASE_URL } from "../constants";
import { FaUser } from "react-icons/fa";
import { IoPowerSharp } from "react-icons/io5";
import { addUser, removeUser } from "../Redux/userslice";
import { toast } from "react-toastify";

const Navbar = () => {

    const [showPopup, setShowPopup] = useState(false);
    const [scrollValue, setScrollValue] = useState();
    const [showLogin, setShowLogin] = useState(false);
    const [showDash, setShowDash] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();
    const scroll = useSelector(store => store.scroll);

    const dispatch = useDispatch();
    const user = useSelector(store => store.user);

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

    // console.log(1763190525.49 - Date.now()/1000 )

    const fetchUser = async () => {
        try {
            const res = await axios.get(BASE_URL + "/profile/user/get", { withCredentials: true });
            dispatch(addUser(res.data))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchUser();
        getAllPackages();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const handleLogout = async () => {
        try {
            const res = await axios.post(BASE_URL + "/logout/user", {}, { withCredentials: true });
            toast.success("Logged ou successfuly!")
            dispatch(removeUser())
            window.location.href = "/";
        } catch (error) {
            console.log(error)
        }
    }

    const navigateToDashboard = () => {
        user && navigate("/user/dashboard/:userId")
    }

    const handleImageNavigation = () => {
        !user && navigate("/auth/otp")
    }

    return (
        <div>
            <TopNavbar />
            <div className={`flex items-center justify-between py-1.5 navshadow px-14 ${scroll && 'w-[100%] fixed top-0 left-0 z-10 navshadow animate__animated animate__fadeInDown md:max-w-full md:px-1.5 md:py-1 md:flex items-center gap-1 text-[14px]'} ${scrollValue <= 10 && "animate__animated animate__fadeInUp"} bg-white`}>
                <div className="relative w-[100px]" onMouseOver={() => setShowPopup(true)} onMouseLeave={() => setShowPopup(false)}>
                    <img src={LOGO} alt="logo" className="w-[100px] h-[100px]" />
                    {showPopup && <Link to={"/"}><p className="hover:text-white hover:font-bold rounded-tl-[10px] rounded-br-[10px] cursor-pointer py-[4px] px-[8px] bg-[rgba(0,0,0,0.6)] hover:bg-[rgba(0,0,0,0.9)] text-gray-200 absolute bottom-[-10px] right-2.5 text-[14px]">Go Home</p></Link>}
                </div>
                <div className="pr-5">
                    <ul className="flex items-center justify-between gap-8 text-[14px] text-gray-800 font-bold">
                        <Link to={"/"}>
                            <li className={`${location.pathname === "/" ? "text-red-600 underline" : "text-gray-800"} cursor-pointer hover:text-red-600`}>HOME</li>
                        </Link>
                        <Link to={"/plans"}>
                            <li className={`${location.pathname === "/plans" ? "text-red-600 underline" : "text-gray-800"} cursor-pointer hover:text-red-600`}>PLANS</li>
                        </Link>
                        <Link to={"/service"}>
                            <li className={`${location.pathname === "/service" ? "text-red-600 underline" : "text-gray-800"} cursor-pointer hover:text-red-600`}>SERVICES</li>
                        </Link>
                        <Link to={"/contact"}>
                            <li className={`${location.pathname === "/contact" ? "text-red-600 underline" : "text-gray-800"} cursor-pointer hover:text-red-600`}>CONTACT</li>
                        </Link>
                        <Link to={"/about"}>
                            <li className={`${location.pathname === "/about" ? "text-red-600 underline" : "text-gray-800"} cursor-pointer hover:text-red-600`}>ABOUT</li>
                        </Link>
                        <div className={`relative mt-[5px] ${user ? "text-green-700" : "hover:text-red-600"} `} onMouseOver={() => { setShowDash(true) }} onMouseLeave={() => { setShowDash(false) }}>
                            <img src={user ? "https://res.cloudinary.com/dssabhgtb/image/upload/v1763027943/profile_vufmtj.png" : "https://res.cloudinary.com/dssabhgtb/image/upload/v1763028097/profile-picture_vuzaai.png"} alt="" className="w-[35px] h-[35px] cursor-pointer" onClick={handleImageNavigation} onMouseOver={() => setShowLogin(true)} onMouseLeave={() => setShowLogin(false)} />
                            {showDash && user && <div className={`absolute top-6 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl w-40 z-10 animate__animated animate__slideInDown ${!showDash && "animate__animated animate__fadeOutUp"} left-[-150px] flex flex-col bg-[rgba(0,0,0,0.8)] text-gray-100 gap-2.5 py-3.5 px-4 dash`}>
                                <Link to={"/user/dashboard/:userId"}>
                                    <p className="flex items-center gap-2.5 userOption cursor-pointer hover:bg-gray-700 rounded-md py-[5px] px-[5px]" onClick={navigateToDashboard}><FaUser className="text-red-600 text-[20px]" /> <span>My account</span></p>
                                </Link>
                                <p className="flex items-center gap-2.5 userOption cursor-pointer hover:bg-gray-700 rounded-md py-[5px] px-[5px]" onClick={handleLogout}><IoPowerSharp className="text-red-600 text-[20px]" /> <span>Logout</span></p>
                            </div>}
                            {!user && showLogin && (
                                <p
                                    className={`transition-all duration-300 ease-in-out text-[16px] text-white bg-black py-0.5 px-2 font-semibold absolute top-[-30px] left-[-40px] rounded-tl-xl rounded-tr-xl rounded-bl-xl`}
                                >
                                    Login
                                </p>
                            )}

                        </div>
                    </ul>
                </div>
            </div >
        </div >
    )
}
export default Navbar;