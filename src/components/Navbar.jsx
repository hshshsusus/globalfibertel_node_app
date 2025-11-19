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
        }
    }
    const navigateToDashboard = () => {
        user && navigate("/user/dashboard/:userId")
    }

    const handleImageNavigation = () => {
        !user && navigate("/auth/otp")
    }

    const navigateContactPage = () => {
        navigate("/contact")
    }
    // const location = useLocation()

    return (
        <div >
            <TopNavbar />
            <div className={` flex items-center justify-between py-1.5 navshadow px-14 ${scroll && 'w-[100%] fixed top-0 left-0 z-10 navshadow animate__animated animate__fadeInDown items-center gap-1 text-[14px]'} ${scrollValue <= 10 && "animate__animated animate__fadeInUp"} bg-white`}>
                <div
                    className="relative w-[100px] group"
                    onMouseOver={() => setShowPopup(true)}
                    onMouseLeave={() => setShowPopup(false)}
                >
                    <img
                        src="/company_logo.png"
                        alt="logo"
                        className="w-[100px] h-[100px] cursor-pointer transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(255,0,0,0.45)]" onClick={() => navigate("/")} />
                    {location.pathname !== "/" && showPopup && (
                        <p className="absolute top-0 left-0 -translate-y-1/2 text-[13px] font-semibold px-3 py-1.5 bg-black/70 backdrop-blur-md text-white rounded-tr-xl rounded-tl-xl rounded-bl-xl shadow-lg shadow-red-500/20  border border-gray-700/40 animate-[fadeIn_0.25s_ease-out,slideIn_0.25s_ease-out] whitespace-nowrap">
                            Go Home
                        </p>
                    )}
                </div>
                <div className="pr-5">
                    <ul className="flex items-center gap-10 text-[15px] font-semibold">
                        {[
                            { name: "HOME", path: "/" },
                            { name: "PLANS", path: "/plans" },
                            { name: "SERVICES", path: "/service" },
                            { name: "CONTACT", path: "/contact" },
                            { name: "ABOUT", path: "/about" },
                        ].map((item) => (
                            <Link key={item.path} to={item.path}>
                                <li className={`font-bold relative cursor-pointer transition-all duration-300 ${location.pathname === item.path ? "text-red-600" : "text-gray-700 hover:text-red-600"}`} >
                                    {item.name}
                                    <span className={` absolute left-0 -bottom-1 h-[3px] w-full rounded-full bg-red-600 transition-all duration-300 ${location.pathname === item.path ? "opacity-100 scale-100" : "opacity-0 scale-0 group-hover:scale-100"}`}></span>
                                </li>
                            </Link>
                        ))}
                        <div className={`relative mt-[5px] ${user ? "text-green-700" : "hover:text-red-600"} flex items-center gap-10`} onMouseOver={() => { setShowDash(true) }} onMouseLeave={() => { setShowDash(false) }}>
                            <img
                                src={
                                    user
                                        ? "https://res.cloudinary.com/dssabhgtb/image/upload/v1763027943/profile_vufmtj.png"
                                        : "https://res.cloudinary.com/dssabhgtb/image/upload/v1763028097/profile-picture_vuzaai.png"
                                }
                                alt="profile"
                                className="w-[40px] h-[40px] rounded-full cursor-pointer  border-2 border-transparent hover:border-red-500 transition-all duration-300 shadow-md hover:shadow-red-500/40 hover:scale-110"
                                onClick={handleImageNavigation}
                                onMouseOver={() => setShowLogin(true)}
                                onMouseLeave={() => setShowLogin(false)}
                            />
                            {showDash && user && (
                                <div className={`absolute top-12 left-[-160px] w-48 bg-black/70 backdrop-blur-xl border border-gray-700 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl p-4 flex flex-col gap-3 z-20 shadow-xl shadow-red-500/20 animate__animated animate__fadeInDown`}>
                                    <Link to={"/user/dashboard/:userId"}>
                                        <p className="flex items-center gap-3 cursor-pointer  px-3 py-2 rounded-lg text-gray-200 hover:bg-gray-800 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300" onClick={navigateToDashboard} >
                                            <FaUser className="text-red-500 text-[22px]" />
                                            <span className="font-medium">My account</span>
                                        </p>
                                    </Link>
                                    <p className="flex items-center gap-3 cursor-pointer px-3 py-2 rounded-lg text-gray-200 hover:bg-gray-800 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300" onClick={handleLogout} >
                                        <IoPowerSharp className="text-red-500 text-[22px]" />
                                        <span className="font-medium">Logout</span>
                                    </p>

                                </div>
                            )}
                            {!user && showLogin && (
                                <p className="absolute top-[-40px] left-[-45px] text-white bg-black/80 backdrop-blur-md px-3 py-1 rounded-tl-xl rounded-tr-xl rounded-bl-xl text-sm font-semibold shadow-lg shadow-red-500/20 animate__animated animate__fadeInUp">
                                    Login
                                </p>
                            )}
                            <button
                                class="relative px-8 py-3 font-semibold text-white rounded-xl bg-gradient-to-r from-red-600 to-rose-500 shadow-lg hover:shadow-red-500/40 hover:scale-[1.06] transition-all duration-300 overflow-hidden group cursor-pointer" onClick={navigateContactPage}>
                                <span class="relative z-10">Get Connection</span>
                                <span class="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                </span>
                                <span class="absolute top-0 left-0 w-full h-full -translate-x-full group-hover:translate-x-full bg-white/30 rotate-45 transition-transform duration-700">
                                </span>
                            </button>
                        </div>
                    </ul>

                </div>

            </div >
        </div >
    )
}
export default Navbar;