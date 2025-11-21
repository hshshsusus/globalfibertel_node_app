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

    return (
        <div >
            <TopNavbar />
            <div
                className={`flex items-center justify-between px-10 py-2 bg-white/80 backdrop-blur-xl shadow-md
  transition-all duration-300 
  ${scroll && "fixed top-0 left-0 w-full z-20 shadow-lg animate__animated animate__fadeInDown"}`}
            >
                <div
                    className="relative w-[100px] group"
                    onMouseOver={() => setShowPopup(true)}
                    onMouseLeave={() => setShowPopup(false)}
                >
                    <img
                        src="/company_logo.png" alt="logo" className="w-[90px] h-[90px] cursor-pointer transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(255,0,0,0.55)]" onClick={() => navigate("/")} />

                    {location.pathname !== "/" && showPopup && (
                        <p className="absolute top-0 left-0 -translate-y-3 text-[12px] font-semibold px-3 py-1.5 bg-black/70 backdrop-blur-md text-white rounded-xl shadow-lg shadow-red-500/25 border border-gray-700/40 animate__animated animate__fadeInDown whitespace-nowrap">
                            Go Home
                        </p>
                    )}
                </div>
                <ul className="flex items-center gap-8 text-[16px] font-semibold">
                    {[
                        { name: "HOME", path: "/" },
                        { name: "PLANS", path: "/plans" },
                        { name: "SERVICES", path: "/service" },
                        { name: "CONTACT", path: "/contact" },
                        { name: "ABOUT", path: "/about" },
                    ].map(item => (
                        <Link key={item.path} to={item.path}>
                            <li className={` relative px-2 py-1 cursor-pointer transition-all duration-300 font-semibold tracking-wide ${location.pathname === item.path ? "text-red-600" : "text-gray-700 hover:text-red-500"
                                } group`}>
                                <span className="relative z-10 drop-shadow-sm">
                                    {item.name}
                                </span>
                                <span className="absolute inset-0 rounded-lg bg-red-500/10 scale-0 group-hover:scale-100 transition-transform duration-300" ></span>
                                <span className={` absolute left-0 -bottom-[3px] h-[3px] w-full rounded-full bg-gradient-to-r from-red-500 to-red-700 transition-all duration-300 ${location.pathname === item.path ? "opacity-100 scale-100" : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"
                                    }`} ></span>
                            </li>
                        </Link>
                    ))}
                    <div
                        className={`relative ${user ? "text-green-700" : "hover:text-red-600"} flex items-center`}
                        onMouseOver={() => setShowDash(true)}
                        onMouseLeave={() => setShowDash(false)}
                    >
                        <img
                            src={
                                user
                                    ? "https://res.cloudinary.com/dssabhgtb/image/upload/v1763027943/profile_vufmtj.png"
                                    : "https://res.cloudinary.com/dssabhgtb/image/upload/v1763028097/profile-picture_vuzaai.png"
                            }
                            alt="profile" className="w-[42px] h-[42px] rounded-full cursor-pointer border-2 border-transparent hover:border-red-500 transition-all duration-300 shadow-md hover:shadow-red-500/40 hover:scale-110" onClick={handleImageNavigation} />
                        {showDash && user && (
                            <div className="absolute top-10 left-[-150px] w-48 bg-white/90 backdrop-blur-xl border border-gray-300 rounded-tl-2xl rounded-br-2xl rounded-bl-2xl p-4 flex flex-col gap-3 shadow-xl shadow-red-500/20 animate__animated animate__fadeInDown">
                                <Link to={"/user/dashboard/:userId"}>
                                    <p className="flex items-center gap-3 cursor-pointer px-3 py-2 rounded-lg text-gray-700 hover:bg-red-50 hover:shadow-md hover:shadow-red-500/20 transition-all duration-300" onClick={navigateToDashboard} >
                                        <FaUser className="text-red-500 text-[20px]" />
                                        <span className="font-medium">My account</span>
                                    </p>
                                </Link>
                                <p className="flex items-center gap-3 cursor-pointer px-3 py-2 rounded-lg text-gray-700 hover:bg-red-50 hover:shadow-md hover:shadow-red-500/20 transition-all duration-300" onClick={handleLogout} >
                                    <IoPowerSharp className="text-red-500 text-[20px]" />
                                    <span className="font-medium">Logout</span>
                                </p>
                            </div>
                        )}
                        {!user && showLogin && (
                            <p className="absolute top-[-35px] left-[-40px] text-white bg-black/80 backdrop-blur-md px-3 py-1 rounded-xl text-sm font-medium shadow-lg shadow-red-500/20 animate__animated animate__fadeInUp">
                                Login
                            </p>
                        )}
                    </div>
                    <button className="relative px-4 py-2 font-semibold text-white rounded-xl bg-gradient-to-r from-red-600 to-rose-500 shadow-lg hover:shadow-red-500/40 hover:scale-[1.06] transition-all duration-300 overflow-hidden group cursor-pointer" onClick={navigateContactPage} >
                        <span className="relative z-10">Get Connection</span>
                        <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                        <span className="absolute top-0 left-0 w-full h-full -translate-x-full group-hover:translate-x-full bg-white/30 rotate-45 transition-transform duration-700"></span>
                    </button>
                </ul>
            </div>
        </div >
    )
}
export default Navbar;