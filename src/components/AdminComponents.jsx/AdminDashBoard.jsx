import React, { useEffect, useState } from "react";
import AdminSideBar from "./AdminSideBar";
import AdminMainBody from "./AdminMainBody";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { addAdminHomeData, adminHomeFooter, adminHomeTopbarData } from "../../Redux/adminHomeSlice";
import { useDispatch } from "react-redux";
import { RiAdminFill } from "react-icons/ri";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { getAllPacks } from "../../Redux/packSlice";
import { addAdmin } from "../../Redux/adminSlice";
import PlansEdit from "./EditableComponents.jsx/PlansEdit";


const AdminDashBoard = () => {

    const [options, setOptions] = useState(["Homepage Banners", "Services", "Subscribers", "FAQs", "Topbar", "Footer"]);
    const [showPage, setShowPage] = useState();

    const navigate = useNavigate();

    const dispatch = useDispatch();

    console.log("location", location)

    const fetchFooterData = async () => {
        try {
            const res = await axios.get(BASE_URL + "/home/footer", { withCredentials: true })
            dispatch(adminHomeFooter(res?.data))
        } catch (error) {
            console.log(error)
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
            console.log(error)
        }
    }

    const getAllPackages = async () => {
        try {
            const res = await axios.get(BASE_URL + "/plans/get", { withCredentials: true });

            dispatch(getAllPacks(res.data));

        } catch (error) {
            console.log(error);
        }
    }

    const getAdminProfile = async () => {
        try {
            const res = await axios.get(BASE_URL + "/profile/admin", { withCredentials: true });
            dispatch(addAdmin(res?.data))
        } catch (error) {
            if (error.response.data === "Token got expired..!") {
                // navigate("/admin/login")
            }
        }
    }

    const click = (e) => {
        const res = options.find((prev) => prev === e)
        setShowPage(res)
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
                    <div className="flex items-center justify-center mr-20 mt-2.5 rounded-full p-1.5 border-4 border-gray-500">
                        <RiAdminFill className="text-[35px] text-gray-800" />
                    </div>
                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default AdminDashBoard;