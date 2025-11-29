import axios from "axios";
import React, { useEffect, useState } from "react";
import { addAdminHomeData } from "../../../Redux/adminHomeSlice";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../../constants";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";

const HomePageEdit = () => {

    const [records, setRecords] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [showData, setShowData] = useState();

    const data = useSelector(store => store.adminHome.adminHomePage)
    // console.log("banners", data?.banners)
    const handleChange = (id, field, value) => {
        setRecords((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, [field]: value } : item
            )
        );
    };

    const handleSave = async (id) => {

        try {
            const updated = records.find((item) => item.id === id);
            console.log(updated)
            const res = await axios.put(BASE_URL + "/admin/homepage/banners/edit/" + id, updated, { withCredentials: true })
            setEditingId(null);
            Swal.fire({
                title: "Saved",
                // text: "You clicked the button!",
                icon: "success"
            });
            setShowData("")
        } catch (error) {
            console.log(error)
        }

    };

    const showInputFieldData = (id) => {
        const editableItem = records?.filter((e) => e?.id === id)
        setShowData(editableItem[0]?.id)
    }

    const showToast = () => {
       return Swal.fire({
            title: "Edit option enabled.",
            // text: "You clicked the button!",
            icon: "success"
        });
    }

    useEffect(() => {
        setRecords(data?.banners)
    }, [data])

    return (
        <div className="mt-8">
            <h2 className="text-xl font-bold text-white mb-6 ml-[2%] fixed top-32 left-50 py-2 px-3 bg-gray-600 rounded-sm">
                Homepage Banners
            </h2>
            <div className="fixed top-32 right-15 bg-gray-600 text-white text-[18px] font-semibold rounded-lg px-4 py-2 shadow-lg transform transition-all hover:bg-gray-700 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-gray-300 flex items-center justify-center gap-2.5 cursor-pointer">
                <button>
                    Add New
                </button>
                <FaRegEdit />
            </div>
            <div className="w-fit flex flex-wrap gap-9 mx-[10%] mt-[85px]">
                {records?.map((item, i) => (
                    <div
                        key={item?.id}
                        className="bg-white shadow-md rounded-xl p-6 border border-gray-200"
                    >

                        {/* IMAGE */}
                        <div className="flex flex-col items-center gap-6">

                            <div className="flex gap-10">
                                <p className="text-[16px] text-start h-fit text-white bg-gray-600 font-semibold py-1.5 px-2.5 w-fit mb-2.5 rounded-lg">Card-{i + 1}</p>

                                <img
                                    src={item?.imageURL}
                                    alt="slider"
                                    className="w-44 h-32 rounded-md shadow"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-gray-600">
                                    Image URL
                                </label>
                                <input
                                    type="text"
                                    value={item?.imageURL}
                                    disabled={editingId !== item.id ? true : false}
                                    onChange={(e) =>
                                        handleChange(item.id, "imageURL", e.target.value)
                                    }
                                    className="border border-gray-300 p-2 rounded-md w-[400px]"
                                />
                            </div>
                        </div>

                        {/* TEXT FIELDS */}
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            {Object.keys(item).map(
                                (field) => (
                                    <div key={field} className="flex flex-col gap-1">
                                        <label className="text-sm font-semibold text-gray-600">
                                            {field !== "id" && field !== "homepage_id" && field !== "imageURL" && field}
                                        </label>
                                        {field !== "id" && field !== "homepage_id" && field !== "imageURL" && <input
                                            type="text"
                                            value={showData === item.id ? item[field !== "id" && field !== "homepage_id" && field] : ""}
                                            disabled={editingId !== item.id}
                                            onChange={(e) =>
                                                handleChange(item.id, field, e.target.value)
                                            }
                                            className="border border-gray-300 p-2 rounded-md"
                                        />}
                                    </div>
                                )
                            )}
                        </div>

                        {/* BUTTONS */}
                        <div className="flex justify-end gap-4 mt-5">
                            {editingId === item.id ? (
                                <>
                                    <button
                                        onClick={() => handleSave(item.id)}
                                        className="bg-green-600 text-white rounded-lg px-5 py-2 font-semibold cursor-pointer hover:bg-green-700 transition-all duration-300 ease-in"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={() => { setEditingId(null), setShowData("") }}
                                        className="bg-red-400 text-white rounded-lg px-5 py-2 font-semibold cursor-pointer hover:bg-red-500 transition-all duration-300 ease-in "
                                    >
                                        Cancel
                                    </button>
                                </>
                            ) : (
                                <button
                                    onClick={() => { setEditingId(item.id), showInputFieldData(item.id), showToast() }}
                                    className="rounded-lg px-5 py-2 font-bold flex items-center gap-3 text-[16px] border border-red-300 bg-red-400 text-white cursor-pointer hover:bg-red-500 transition-all duration-300 ease-in"
                                >
                                    Edit
                                    <FaRegEdit className="font-bold text-[18px] h" />
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePageEdit;



