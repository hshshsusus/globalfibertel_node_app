import React, { useEffect, useState } from "react";
import AdminSideBar from "./AdminSideBar";
import AdminMainBody from "./AdminMainBody";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { addAdminHomeData, adminHomeFooter, adminHomeTopbarData } from "../../Redux/adminHomeSlice";
import { useDispatch } from "react-redux";
import { RiAdminFill } from "react-icons/ri";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { getAllPacks } from "../../Redux/packSlice";
import { addAdmin } from "../../Redux/adminSlice";
import PlansEdit from "./EditableComponents.jsx/PlansEdit";
import { IoPowerSharp } from "react-icons/io5";
import Swal from "sweetalert2";
import { FaPlus } from "react-icons/fa6";
import NewAdminForm from "./NewAdminForm";
import { RxCross2 } from "react-icons/rx";


const AdminDashBoard = () => {

    const [options, setOptions] = useState(["Homepage Banners", "Services", "Subscribers", "FAQs", "Topbar", "Footer"]);
    const [showPage, setShowPage] = useState();
    const [showLogout, setShowLogout] = useState(false);
    const [showAdminForm, setShowAdminForm] = useState(false);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const fetchFooterData = async () => {
        try {
            const res = await axios.get(BASE_URL + "/home/footer", { withCredentials: true })
            dispatch(adminHomeFooter(res?.data))
        } catch (error) {
            // console.log(error)
        }
    }

    const fetchHomeTopbarData = async () => {
        try {
            const res = await axios.get(BASE_URL + "/home/topnav", { withCredentials: true });
            dispatch(adminHomeTopbarData(res?.data))
        } catch (error) {

        }
    }

    const fetchHomepageData = async () => {
        try {
            const res = await axios.get(BASE_URL + "/homepage/data/get", { withCredentials: true })
            dispatch(addAdminHomeData(res?.data))
        } catch (error) {
            // console.log(error)
        }
    }

    const getAllPackages = async () => {
        try {
            const res = await axios.get(BASE_URL + "/plans/get", { withCredentials: true });

            dispatch(getAllPacks(res.data));

        } catch (error) {
            // console.log(error);
        }
    }

    const getAdminProfile = async () => {
        try {
            const res = await axios.get(BASE_URL + "/profile/admin", { withCredentials: true });
            dispatch(addAdmin(res?.data))
        } catch (error) {

        }
    }

    const click = (e) => {
        const res = options.find((prev) => prev === e)
        setShowPage(res)
    }

    const adminLogout = async () => {
        try {
            const res = await axios.post(BASE_URL + "/logout/admin", {}, { withCredentials: true });
            // console.log("res", res)
            Swal.fire({
                icon: "success",
                title: "Logout success",
            });
            navigate("/admin/login")
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchHomepageData();
        fetchHomeTopbarData();
        fetchFooterData();
        getAllPackages()
        getAdminProfile();
    }, [])

    return (
        <div className="flex w-full">
            <div className="w-fit">
                <AdminSideBar />
            </div>
            <div className="flex flex-col w-full">
                <div className="flex items-center justify-between py-6 px-8 header w-full adminHead border-black">
                    <div className="flex items-center gap-4 ">
                        {
                            options.map((e, i) => {
                                return (
                                    <div key={i} className={`text-[17px] text-gray-800 font-semibold hover:bg-black/5 py-[5px] px-[10px] cursor-pointer ${showPage === e ? "text-red-400 border-b-4 border-red-400 " : ""}`} onClick={() => click(e)}>
                                        <p>{e}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="flex items-center justify-center mr-20 mt-2.5 relative" onMouseOver={() => setShowLogout(true)} onMouseLeave={() => setShowLogout(false)}>
                        <RiAdminFill className="text-[35px] text-gray-500" />
                        {showLogout && <div className="flex flex-col items-center gap-2 absolute bottom-[-55px] right-[18px] bg-gray-800 text-white font-bold cursor-pointer px-3 py-2 rounded-lg w-fit">
                            <Link to={"/admin/create"}><p className="whitespace-nowrap flex items-center gap-2 text-[14px] hover:bg-gray-700 py-1 px-2 w-full"
                                onClick={() => { setShowLogout(false), setShowAdminForm(true) }}>
                                <FaPlus className="text-red-500 text-[20px]" />
                                <span>Admin List</span>
                            </p>
                            </Link>
                            <p className="whitespace-nowrap flex items-center gap-2 text-[14px] hover:bg-gray-700 py-1 px-2 w-full" onClick={adminLogout}>
                                <IoPowerSharp className="text-red-500 text-[18px]" />
                                <span className="">Logout</span>
                            </p>
                        </div>
                        }
                        {/* {showAdminForm && <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-10">
                            <NewAdminForm />
                            <RxCross2 className="absolute top-[22%] right-[37%] text-[30px] text-gray-600 cursor-pointer p-1 w-fit hover:bg-gray-100 rounded-full" onClick={() => setShowAdminForm(false)}/>
                        </div>} */}
                    </div>
                </div>
                <AdminMainBody showPage={showPage} />
            </div>
        </div>
    )
}

export default AdminDashBoard;