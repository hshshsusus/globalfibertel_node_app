import axios from 'axios';
import React, { useState } from 'react';
import { BASE_URL } from '../../../constants';
import { LuPackagePlus } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

const AddNewPack = () => {
    const [formData, setFormData] = useState({
        GST: "GST extra",
        price: "",
        downloadSpeed: "",
        uploadSpeed: "",
        validity: "",
        extraDetails: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {

        try {
            e.preventDefault();

            const res = await axios.post(BASE_URL + "/plans/add", formData, { withCredentials: true })
            console.log(res.data)

            setFormData({
                GST: "GST extra",
                price: "",
                downloadSpeed: "",
                uploadSpeed: "",
                validity: "",
                extraDetails: "Equipment price add seperatly",
            });

            window.location.href = "/admin/dashboard/plans"
        } catch (error) {
            console.log(error)
        }

    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg relative">
            <div className='flex items-center justify-center mb-6 gap-2.5'>
                <h2 className="text-2xl font-bold text-red-600 text-center">Create New Plan</h2>
                <LuPackagePlus className='text-[24px] text-red-600' />
            </div>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-600" htmlFor="price">
                        Price
                    </label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:border-red-600"
                        placeholder="Enter price"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-600" htmlFor="downloadSpeed">
                        Download Speed
                    </label>
                    <input
                        type="text"
                        id="downloadSpeed"
                        name="downloadSpeed"
                        value={formData.downloadSpeed}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg mt-2"
                        placeholder="Enter download speed"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-600" htmlFor="validity">
                        Validity (Months)
                    </label>
                    <input
                        type="text"
                        id="validity"
                        name="validity"
                        value={formData.validity}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg mt-2"
                        placeholder="Enter validity in months"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-600" htmlFor="GST">
                        GST
                    </label>
                    <input
                        type="text"
                        id="GST"
                        name="GST"
                        value={formData.GST}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg mt-2"
                        readOnly
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-600" htmlFor="uploadSpeed">
                        Upload Speed
                    </label>
                    <input
                        type="text"
                        id="uploadSpeed"
                        name="uploadSpeed"
                        value={formData.uploadSpeed}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg mt-2"
                        placeholder="Enter upload speed"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-600" htmlFor="extraDetails">
                        Extra Details
                    </label>
                    <textarea
                        id="extraDetails"
                        name="extraDetails"
                        value={formData.extraDetails}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg mt-2"
                        placeholder="Enter extra details"
                    />
                </div>
                <div className="col-span-2">
                    <button
                        type="submit"
                        className="w-full py-3 bg-red-500 text-white rounded-lg mt-6 hover:bg-red-700 font-bold cursor-pointer"
                    >
                        Add New Plan
                    </button>
                </div>
            </form>
        </div>

    );
};

export default AddNewPack;
