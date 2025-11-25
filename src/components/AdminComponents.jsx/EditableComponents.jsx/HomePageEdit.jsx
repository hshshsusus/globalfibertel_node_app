import React, { useState } from "react";
const data = [
  { id: 1, image: "https://...", title: "Enjoy high speed internet connection", subtitle: "High Speed Bandwidth", description: "Connect Any Device Securely", phone1: "9999999999", phone2: "8888888888" },
  { id: 2, image: "https://...", title: "Switch to Global Fibertel", subtitle: "Stable connection", description: "24/7 support", phone1: "9999999999", phone2: "8888888888" },
  // add others...
];
const HomePageEdit = () => {
    const [records, setRecords] = useState(data);
    const [editingId, setEditingId] = useState(null);

    const handleChange = (id, field, value) => {
       console.log(value)
    };

    const handleSave = (id) => {
        const updated = records.find((item) => item.id === id);
        console.log("Send to backend:", updated); // axios.put(url, updated)
        setEditingId(null);
    };

    return (
        <div className="w-[90%] mx-auto mt-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Homepage Slider Manager
            </h2>

            <div className="grid gap-6">
                {records.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white shadow-md rounded-xl p-6 border border-gray-200"
                    >
                        {/* IMAGE */}
                        <div className="flex items-center gap-6">
                            <img
                                src={item.image}
                                alt="slider"
                                className="w-44 h-32 rounded-md shadow"
                            />
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-gray-600">
                                    Image URL
                                </label>
                                <input
                                    type="text"
                                    value={item.image}
                                    disabled={editingId !== item.id ? true : false}
                                    onChange={(e) =>
                                        handleChange(item.id, "image", e.target.value)
                                    }
                                    className="border border-gray-300 p-2 rounded-md w-[400px]"
                                />
                            </div>
                        </div>

                        {/* TEXT FIELDS */}
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            {["title", "subtitle", "description", "phone1", "phone2"].map(
                                (field) => (
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
                                            className="border border-gray-300 p-2 rounded-md"
                                        />
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
                                        className="bg-green-600 text-white rounded-md px-5 py-2 font-semibold"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={() => setEditingId(null)}
                                        className="bg-gray-400 text-white rounded-md px-5 py-2 font-semibold"
                                    >
                                        Cancel
                                    </button>
                                </>
                            ) : (
                                <button
                                    onClick={() => setEditingId(item.id)}
                                    className="bg-blue-600 text-white rounded-md px-5 py-2 font-semibold"
                                >
                                    Edit
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



