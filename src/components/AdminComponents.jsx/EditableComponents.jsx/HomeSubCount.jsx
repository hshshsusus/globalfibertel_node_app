import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../../constants";
import { FaRegEdit } from "react-icons/fa";

const HomeSubCount = () => {
    const [services, setServices] = useState([]);
    const [editingId, setEditingId] = useState(null);

    const home = useSelector(store => store.adminHome.adminHomePage);
    const counters = home?.subscriberscount;

    useEffect(() => {
        setServices(counters);
    }, [home]);

    // handle input change
    const handleChange = (id, field, value) => {
        setServices(prev =>
            prev.map(item =>
                item.id === id ? { ...item, [field]: value } : item
            )
        );
    };

    const handleSave = async (id) => {
        const updated = services.find(item => item.id === id);
        const res = await axios.put(BASE_URL + "/admin/homepage/subscriberscount/edit/" + id, updated, { withCredentials: true })
        console.log("Saving data:", res);
        setEditingId(null);
    };

    return (
        <div className="mt-10">
            <h2 className="text-3xl font-bold text-white mb-6 ml-[2%] fixed top-32 left-50 py-2 px-3 bg-gray-600 rounded-lg">
                Subscriberscount Edit
            </h2>
            <div className="fixed top-32 right-15 bg-gray-600 text-white text-lg font-semibold rounded-lg px-4 py-2 shadow-lg transform transition-all hover:bg-gray-700 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-gray-300 flex items-center justify-center gap-2.5 cursor-pointer">
                <button>
                    Add New
                </button>
                <FaRegEdit />
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 mt-[65px]">

                {services?.map((item, i) => (
                    <div
                        key={item.id}
                        className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 transition-all hover:shadow-xl flex flex-col justify-between"
                    >
                        {/* FIELDS */}
                        <p className="text-[16px] text-white bg-gray-600 font-semibold py-1.5 px-2.5 w-fit mb-2.5 rounded-lg">Card-{i + 1}</p>
                        <div className="grid grid-cols-1 gap-4">
                            {Object.keys(item).map(field => {
                                const hidden =
                                    field === "id" ||
                                    field === "homepage_id";

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

                        {/* BUTTONS */}
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
                                <button
                                    onClick={() => setEditingId(item.id)}
                                    className="rounded-lg px-5 py-2 font-bold flex items-center gap-3 text-[16px] border border-red-300 bg-red-400 text-white cursor-pointer hover:bg-red-500"
                                >
                                    Edit
                                    <FaRegEdit className="font-bold text-[18px] h"/>
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeSubCount;
