import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../../constants";
import { FaRegEdit } from "react-icons/fa";

const FooterOurServicesEdit = () => {

    const [services, setServices] = useState([])
    const [editingId, setEditingId] = useState(null);

    const home = useSelector(store => store.adminHome.adminHomeFooter);
    const service = home?.ourServices

    const handleChange = (id, field, value) => {
        setServices((prev) =>
            prev?.map((item) => item?.id === id ? { ...item, [field]: value } : item)
        )
    }

    const handleSave = async (id) => {

        try {
            const updated = services.find((item) => item?.id === id);
            console.log(updated)
            const res = await axios.put(BASE_URL + "/admin/home/footer/ourservices/edit/" + id, updated, { withCredentials: true })
            console.log(res)
            setEditingId(null);
        } catch (error) {
            console.log(error)
        }

    };

    useEffect(() => {
        setServices(service)
    }, [home])

    return (
        <div className="mt-10">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 mt-[65px]">
                {services?.map((service, i) => (
                    <div
                        key={service?.id}
                        className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 transition-all hover:shadow-xl flex flex-col justify-between"
                    >
                        {/* FIELDS */}
                        <p className="text-[16px] text-white bg-gray-600 font-semibold py-1.5 px-2.5 w-fit mb-2.5 rounded-lg">Card-{i + 1}</p>
                        <div className="grid grid-cols-1 gap-4">
                            {Object.keys(service).map((eachField) => {
                                const isTextArea = eachField === "serviceDescription";
                                const isHiddenField =
                                    eachField === "id" ||
                                    eachField === "homepage_id" ||
                                    eachField === "bgImgURL";

                                if (isHiddenField) return null;

                                return (
                                    <div key={eachField} className="flex flex-col gap-1">
                                        <label className="text-sm font-semibold text-gray-600">
                                            {eachField}
                                        </label>

                                        {isTextArea ? (
                                            <textarea
                                                value={service[eachField]}
                                                disabled={editingId !== service.id}
                                                onChange={(e) =>
                                                    handleChange(service.id, eachField, e.target.value)
                                                }
                                                className="border border-gray-300 p-3 rounded-lg h-28 resize-none focus:ring-2 focus:ring-blue-400 outline-none"
                                            />
                                        ) : (
                                            <input
                                                type="text"
                                                value={service[eachField]}
                                                disabled={editingId !== service.id}
                                                onChange={(e) =>
                                                    handleChange(service.id, eachField, e.target.value)
                                                }
                                                className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                                            />
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {/* BUTTONS */}
                        <div className="flex justify-end gap-3 mt-6">
                            {editingId === service?.id ? (
                                <>
                                    <button
                                        onClick={() => handleSave(service?.id)}
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
                                    onClick={() => setEditingId(service?.id)}
                                    className="rounded-lg px-5 py-2 font-bold flex items-center gap-3 text-[16px] border border-red-300 bg-red-400 text-white cursor-pointer hover:bg-red-500"
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
    )
}

export default FooterOurServicesEdit;
