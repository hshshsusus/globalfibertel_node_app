import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const CreateTicket = () => {
    const [form, setForm] = useState({
        acc_id: "",
        username_org: "",
        complaint_main: "",
        complaint_type: "",
        complaint_sub_type: "",
        branch: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.acc_id || !form.username_org || !form.complaint_main) {
            toast.error("⚠ Please fill all required fields (Account ID, Username, Main Complaint)");
            return;
        }

        setLoading(true);
        try {
            const res = await axios.post(
                "https://yourdomain.com/api/create_ticket.php",
                form,
                {
                    headers: {
                        "API-KEY": "YOUR_SECRET_API_KEY",
                    },
                }
            );

            if (res.data.status === "success") {
                toast.success("✅ Ticket Created Successfully! We'll be in touch.");
                setForm({
                    acc_id: "",
                    username_org: "",
                    complaint_main: "",
                    complaint_type: "",
                    complaint_sub_type: "",
                    branch: "",
                });
            } else {
                toast.error(res.data.message || "Unable to create ticket.");
            }
        } catch (err) {
            toast.error("❌ Server error: Could not connect to API.");
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="max-w-xl w-full mx-auto p-[2px] border-l-4 border-b-4 border-red-500 rounded-3xl shadow-2xl hover:shadow-3xl transition duration-500">
                <div className="bg-white rounded-[22px] p-8 md:p-10">

                    <h2 className="text-3xl font-extrabold text-red-600 mb-8 text-center tracking-wide">
                        🎫 Create Support Ticket
                    </h2>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="acc_id"
                            value={form.acc_id}
                            onChange={handleChange}
                            placeholder="Customer Account ID *"
                            className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-400 transition duration-200"
                        />

                        <input
                            type="text"
                            name="username_org"
                            value={form.username_org}
                            onChange={handleChange}
                            placeholder="Customer Username *"
                            className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-400 transition duration-200"
                        />

                        <input
                            type="text"
                            name="complaint_main"
                            value={form.complaint_main}
                            onChange={handleChange}
                            placeholder="Main Complaint *"
                            className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-400 transition duration-200"
                        />
                        <input
                            type="text"
                            name="complaint_type"
                            value={form.complaint_type}
                            onChange={handleChange}
                            placeholder="Complaint Type (optional)"
                            className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-red-600 transition duration-200"
                        />

                        <input
                            type="text"
                            name="complaint_sub_type"
                            value={form.complaint_sub_type}
                            onChange={handleChange}
                            placeholder="Sub Complaint Type (optional)"
                            className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-red-600 transition duration-200"
                        />

                        <input
                            type="text"
                            name="branch"
                            value={form.branch}
                            onChange={handleChange}
                            placeholder="Branch (optional)"
                            className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-red-600 transition duration-200"
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 mt-8 rounded-xl font-bold text-lg 
                         bg-gradient-to-r from-red-500 to-orange-600 text-white 
                         shadow-lg hover:shadow-xl hover:brightness-110 active:scale-[0.98] 
                         transition duration-300 ease-in-out"
                        >
                            {loading ? "Creating Ticket..." : "Create Ticket"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateTicket;
