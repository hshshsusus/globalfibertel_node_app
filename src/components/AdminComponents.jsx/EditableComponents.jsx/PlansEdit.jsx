import React, { useEffect, useState } from "react";
import AdminSideBar from "../AdminSideBar";
import { useDispatch, useSelector } from "react-redux";
import { getAllPacks } from "../../../Redux/packSlice";
import axios from "axios";
import { BASE_URL } from "../../../constants";
import AllPlansEdit from "./AllPlansEdit";
import AddNewPack from "./AddNewPack";
import { useNavigate } from "react-router-dom";
import { addAdmin } from "../../../Redux/adminSlice";
import { IoClose } from "react-icons/io5";

const PlansEdit = () => {

    const [packs, setPacks] = useState([])
    const [form, setForm] = useState(false);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const getAdminProfile = async () => {
        try {
            const res = await axios.get(BASE_URL + "/profile/admin", { withCredentials: true })
            dispatch(addAdmin(res?.data))
        } catch (error) {
            if(error.response.data === "Token got expired..!"){
                // navigate("/admin/login")
            }
        }
    }

    const getAllPackages = async () => {
        try {
            const res = await axios.get(BASE_URL + "/plans/get", { withCredentials: true });
            setPacks(res?.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAdminProfile()
        getAllPackages();
    }, [])

    if (packs.length === 0) return;

    return (
        <div>
            <div className="text-2xl font-bold text-white mb-6 ml-[2%] py-4 px-8  rounded-sm flex items-center justify-between">
                <div className="bg-gray-600 text-white rounded-sm py-2 px-4">
                    Plans edit section
                </div>
                <div className="flex items-center justify-center text-[18px] bg-green-500  w-fit gap-2.5 py-2.5 px-5 text-white font-bold hover:bg-green-600 cursor-pointer transition-all duration-300 ease-in rounded-xl" onClick={() => setForm(true)}>
                    <p>Add new</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
            {form && <div className="fixed inset-0 w-full flex items-center bg-black/50">
                <AddNewPack />
                <IoClose className="fixed top-27 right-100 rounded-2xl text-black text-[45px] bg-white p-2 cursor-pointer" onClick={() => setForm(false)}/>
            </div>}

            <AllPlansEdit packs={packs} />
        </div>
    )
}
export default PlansEdit;