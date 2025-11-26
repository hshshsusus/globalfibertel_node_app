import React, { useEffect, useState } from "react";
import AdminSideBar from "../AdminSideBar";
import { useSelector } from "react-redux";
import { getAllPacks } from "../../../Redux/packSlice";
import axios from "axios";
import { BASE_URL } from "../../../constants";
import AllPlansEdit from "./AllPlansEdit";
import AddNewPack from "./AddNewPack";

const PlansEdit = () => {

    const [packs, setPacks] = useState([])
    const [form, setForm] = useState(false);

    const getAllPackages = async () => {
        try {
            const res = await axios.get(BASE_URL + "/plans/get", { withCredentials: true });
            console.log("res", res.data)
            setPacks(res?.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllPackages();
    }, [])

    if (packs.length === 0) return;

    return (
        <div>
            <div className="flex items-center justify-between fixed top-0 left-0 w-[100%] py-5 px-12">
                <div>
                    Plans edit section
                </div>
                <div className="flex items-center justify-center bg-green-500  w-fit gap-2.5 py-2.5 px-5 text-white font-bold hover:bg-green-600 cursor-pointer transition-all duration-300 ease-in rounded-xl" onClick={() => setForm(true)}>
                    <p>Add new</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
            {form &&<div className="fixed inset-0 w-full flex items-center bg-black/50">
                <AddNewPack />
            </div>}

            <AllPlansEdit packs={packs} />
        </div>
    )
}
export default PlansEdit;