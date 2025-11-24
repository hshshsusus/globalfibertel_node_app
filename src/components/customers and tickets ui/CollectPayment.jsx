import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const CollectPayment = () => {
    const [form, setForm] = useState({
        order_id: "",
        customer_id: "",
        amount: "",
        payment_mode: "",
        transaction_id: "",
        remarks: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.order_id || !form.customer_id || !form.amount || !form.payment_mode) {
            toast.error("⚠ Please fill all required fields");
            return;
        }

        setLoading(true);
        try {
            const res = await axios.post(
                "https://yourdomain.com/api/collect_payment.php",
                form,
                {
                    headers: {
                        "API-KEY": "YOUR_SECRET_API_KEY",
                    },
                }
            );

            if (res.data.status === "success") {
                toast.success("💰 Payment Collected Successfully!");
                setForm({
                    order_id: "",
                    customer_id: "",
                    amount: "",
                    payment_mode: "",
                    transaction_id: "",
                    remarks: "",
                });
            } else {
                toast.error(res.data.message || "Unable to collect payment");
            }
        } catch (err) {
            toast.error("❌ Server error");
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4"> 
            <div className="max-w-lg w-full bg-white shadow-xl rounded-2xl p-8 transform transition-all duration-300 border border-gray-200 border-l-6 border-red-300">
                <div className="relative mb-6">
                    {/* <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-t from-red-400 to-red-600 rounded-l-2xl -ml-8"></div>  */}
                    <h2 className="text-3xl font-extrabold text-red-700 mb-2 text-center drop-shadow-sm">
                        Payment
                    </h2>
                    <p className="text-gray-500 text-center text-sm">Fill out the details below to complete the payment.</p>
                </div>

                <form className="grid gap-6" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="order_id"
                        value={form.order_id}
                        onChange={handleChange}
                        placeholder="Order ID *"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-200 shadow-sm" 
                    />
                    <input
                        type="text"
                        name="customer_id"
                        value={form.customer_id}
                        onChange={handleChange}
                        placeholder="Customer ID *"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-200 shadow-sm" 
                    />
                    <input
                        type="number"
                        name="amount"
                        value={form.amount}
                        onChange={handleChange}
                        placeholder="Amount *"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-200 shadow-sm" 
                    />

                    <div className="relative">
                        <select
                            name="payment_mode"
                            value={form.payment_mode}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-200 shadow-sm pr-10" 
                        >
                            <option value="">Select Payment Mode *</option>
                            <option value="Online">Online</option>
                            <option value="UPI">UPI</option>
                            <option value="Card">Card</option>
                            <option value="Cash">Cash</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg> 
                        </div>
                    </div>


                    <input
                        type="text"
                        name="transaction_id"
                        value={form.transaction_id}
                        onChange={handleChange}
                        placeholder="Transaction ID (optional)"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-200 shadow-sm" 
                    />
                    <textarea
                        name="remarks"
                        value={form.remarks}
                        onChange={handleChange}
                        placeholder="Remarks"
                        rows="3"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-200 shadow-sm"
                    ></textarea>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-bold py-3 px-6 rounded-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50" 
                    >
                        {loading ? "Processing..." : "Make Payment"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CollectPayment;
