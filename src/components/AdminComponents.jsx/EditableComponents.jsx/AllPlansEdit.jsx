import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { BASE_URL } from "../../../constants";
import { RiDeleteBinFill } from "react-icons/ri";


const AllPlansEdit = ({ packs }) => {

    const [services, setServices] = useState(packs);
    const [editingId, setEditingId] = useState(null);

    const handleChange = (id, field, value) => {
        setServices(prev =>
            prev.map(item =>
                item.id === id ? { ...item, [field]: value } : item
            )
        );
    };

    const handleSave = async (id) => {
        const updated = services.find(item => item.id === id);
        console.log("Save", updated)
        const res = await axios.put(BASE_URL + "/plans/update/" + id, updated, { withCredentials: true })
        console.log("Saving data:", res);
        setEditingId(null);
    };

    const handleDeletePack = async (id) => {
        try {
            const res = await axios.delete(BASE_URL+"/plans/delete/"+id,{withCredentials:true})
            console.log(res.data)
            window.location.href = "/admin/dashboard/plans"
        } catch (error) {
            console.log(error)
        }
    }

    return packs?.length > 0 && (
        <div className="mt-10">

            <div className="grid grid-cols-2 md:grid-cols-2 gap-8 p-6 mt-[65px]">

                {services?.map((item, i) => (
                    <div
                        key={item.id}
                        className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 transition-all hover:shadow-xl flex flex-col justify-between"
                    >
                        <p className="text-[16px] text-white bg-gray-600 font-semibold py-1.5 px-2.5 w-fit mb-2.5 rounded-lg">Card-{i + 1}</p>
                        <div className="grid grid-cols-2 gap-4">
                            {Object.keys(item).map(field => {
                                const hidden = field === "id" || field === "homepage_id" || field === "addedAt" || field === "updatedAt" || field === "createdAt";

                                if (hidden) return null;

                                return (
                                    <div key={field} className="flex flex-col gap-1">
                                        <label className="text-sm font-semibold text-gray-600">
                                            {field}
                                        </label>
                                        <input
                                            type="text"
                                            value={item[field]}
                                            disabled={editingId !== item.id}
                                            onChange={(e) =>
                                                handleChange(item.id, field, e.target.value)
                                            }
                                            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                                        />
                                    </div>
                                );
                            })}
                        </div>

                        <div className="flex justify-end gap-3 mt-6">
                            {editingId === item.id ? (
                                <>
                                    <button
                                        onClick={() => handleSave(item.id)}
                                        className="bg-green-600 text-white rounded-lg px-5 py-2 font-semibold cursor-pointer hover:bg-green-700 transition-all duration-300 ease-in"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={() => setEditingId(null)}
                                        className="bg-red-400 text-white rounded-lg px-5 py-2 font-semibold cursor-pointer hover:bg-red-500 transition-all duration-300 ease-in"
                                    >
                                        Cancel
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button
                                        onClick={() => setEditingId(item.id)}
                                        className="rounded-lg px-5 py-2 font-bold flex items-center gap-3 text-[16px] border border-ye-300 bg-yellow-500 text-white cursor-pointer hover:bg-yellow-600 transition-all duration-300 ease-in"
                                    >
                                        Edit
                                        <FaRegEdit className="font-bold text-[18px] h" />
                                    </button>
                                    <button className="bg-red-400 text-white rounded-lg px-6 py-3 hover:bg-red-700 focus:outline-none flex items-center gap-2.5 font-bold cursor-pointer transition-all duration-300 ease-in" onClick={() => handleDeletePack(item?.id)}>
                                        Delete
                                        <RiDeleteBinFill className="text-[18px]" />
                                    </button>

                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllPlansEdit;