import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Original CustomerDashboard component adapted to use mock data
const App = ({ customerId }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [invoiceData, setInvoiceData] = useState([]);
    const [error, setError] = useState(null);

    const customerData = useSelector(store => store.customer.customerData);
    const customerInvoices = useSelector(store => store.customer.invoices)
    console.log(invoiceData)

    useEffect(() => {
        const fetchCustomerData = async () => {

            console.log(`Simulating fetch for customer ID: ${customerId}`);

            await new Promise(resolve => setTimeout(resolve, 1500));

            if (customerId === customerData?.data?.acc_id) {

                setError("Customer CUST-999 not found. Please check the ID.");
                setLoading(false);

            } else {
                setData(customerData?.data);
                setInvoiceData(customerInvoices?.orders)
                setLoading(false);
            }
            // --- End Simulation Implementation ---
        };

        // Reset state before fetching new data (if customerId changes)
        setLoading(true);
        setError(null);
        setData(null);
        // setInvoiceData(null);

        fetchCustomerData();
    }, [customerData?.data, customerInvoices?.orders]);

    // Styling for the spinning loader
    const loaderStyle = "loader border-t-4 border-b-4 border-red-400 w-12 h-12 rounded-full animate-spin";

    // Custom loader component
    if (loading)
        return (
            <div className="flex flex-col justify-center items-center h-screen bg-gray-50 p-4">
                <div className={loaderStyle}></div>
                <p className="mt-4 text-lg text-gray-600">Loading Customer Data...</p>
            </div>
        );

    // Error component
    if (error)
        return (
            <div className="flex justify-center items-center h-screen bg-red-50 p-4 rounded-xl shadow-lg m-4">
                <div className="text-red-700 text-center font-bold text-xl p-8 bg-white border border-red-300 rounded-lg shadow-md">
                    <svg className="w-8 h-8 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.332 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                    {error}
                </div>
            </div>
        );

    // Main Dashboard Content
    console.log(invoiceData)
    return customerData && (
        <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-800">
                    Customer Service Dashboard
                </h1>

                <div className="space-y-8">
                    {/* Customer Info and Address Block */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Customer Info Card */}
                        <div className="lg:col-span-2 bg-white shadow-xl rounded-2xl p-8 border-t-4 border-red-300 transition duration-300 hover:shadow-2xl">
                            <h2 className="text-2xl font-bold mb-4 text-red-600 flex items-center">
                                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                Customer Details
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
                                <p className="py-1">
                                    <span className="font-semibold text-gray-900">Name:</span>{" "}
                                    <span className="text-[20px] font-bold text-green-700">{data?.firstname} {data?.lastname}</span>
                                </p>
                                <p className="py-1">
                                    <span className="font-semibold text-gray-900">Email:</span> {data?.email}
                                </p>
                                <p className="py-1">
                                    <span className="font-semibold text-gray-900">Mobile:</span> {data?.mobile}
                                </p>
                                <p className="py-1">
                                    <span className="font-semibold text-gray-900">Plan:</span>{" "}
                                    <span className="bg-purple-100 text-purple-800 text-sm font-medium px-2.5 py-0.5 rounded-full">{data?.package_name}</span>
                                </p>
                                <p className="py-1">
                                    <span className="font-semibold text-gray-900">Balance:</span>{" "}
                                    <span className="font-bold text-red-500">{data?.balance}</span>
                                </p>
                                <p className="py-1">
                                    <span className="font-semibold text-gray-900">Status:</span>{" "}
                                    <span
                                        className={`font-extrabold text-sm px-2 py-1 rounded-full ${data?.status === "1" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                                            }`}
                                    >
                                        {data?.status_text}
                                    </span>
                                </p>
                            </div>
                        </div>

                        {/* Address Info Card */}
                        <div className="bg-white shadow-xl rounded-2xl p-8 transition duration-300 border-t-4 border-red-300 hover:shadow-2xl">
                            <h2 className="text-2xl font-bold mb-4 text-red-600 flex items-center">
                                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                Addresses
                            </h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-semibold text-gray-900">Installation Address:</h3>
                                    <p className="text-gray-700">{data?.installation_address}</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Billing Address:</h3>
                                    <p className="text-gray-700">{data?.billing_address}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Orders / Tickets Block */}
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                        {/* Orders */}
                        <div className="bg-white shadow-xl rounded-2xl p-8 border-l-4 border-green-300">
                            <h2 className="text-2xl font-bold mb-4 text-green-700 flex items-center">
                                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                                Recent Payments
                            </h2>
                            {invoiceData && invoiceData.length > 0 ? (
                                <ul className="space-y-4 max-h-96 overflow-y-scroll ">
                                    {invoiceData?.map((order) => {

                                        return (
                                            <li
                                                key={order?.order_id}
                                                className=" p-4 rounded-lg bg-green-50 hover:bg-green-100 transition duration-150 flex items-center justify-between border-r-4 border-green-300 invoiceCard"
                                            >
                                                <div>
                                                    <p className="text-sm font-semibold text-green-800">Order ID: <span className="font-normal text-gray-700">{order?.order_id}</span></p>
                                                    <p><span className="font-bold">Status: </span><span className={`font-semibold text-[14px] py-[2px] px-[8px] rounded-lg ${order?.status === "Paid" ? "bg-green-200 text-green-600 " : "bg-red-200 text-red-600"} `}>{order?.status}</span></p>
                                                    <p> <span className="font-semibold">Date-time : </span><span className="text-[14px] text-gray-600">{order?.date_time}</span> </p>
                                                </div>
                                                <div className="flex flex-col items-center gap-1.5 justify-between mt-1 text-sm">
                                                    <p>Total: <span className="font-medium text-gray-800">{order?.total}</span></p>
                                                    <p>Paid: <span className="font-medium text-gray-800">{order?.paid}</span></p>
                                                    <p>Balance: <span className="font-bold text-red-600">{order?.balance}</span></p>
                                                </div>
                                                <div>
                                                    {order?.status === "Paid" ? (<Link to={`/user/orders/${order?.customer_id
                                                        }/${order?.order_id}/${order?.api_inv_id}`}><button
                                                            className="px-5 py-3 rounded-xl bg-green-600 hover:bg-green-700 active:scale-[.98] text-white text-[16px] font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={1.8}
                                                                stroke="currentColor"
                                                                className="size-5"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"

                                                                />
                                                            </svg>
                                                            <span>Download Invoice</span>
                                                        </button>
                                                    </Link>
                                                    ) : (
                                                        < button
                                                            className="px-5 py-3 rounded-xl bg-red-500 hover:bg-red-700 active:scale-[.98] text-white text-[16px] font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                                strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                                    d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                            </svg>
                                                            <p>Pay Balance</p>
                                                        </button>
                                                    )}
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            ) : (
                                <p className="text-gray-500 p-4 border rounded-lg text-center">No orders found.</p>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
};

const CustomerOrder = () => {
    const targetCustomerId = "CUST-101";

    return (
        <App customerId={targetCustomerId} />
    );
};

export default CustomerOrder;