import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { TbInvoice } from "react-icons/tb";
import { Link } from 'react-router-dom';


const UserIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
        viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-3-3.87M4 21v-2a4 4 0 013-3.87M12 12a5 5 0 100-10 5 5 0 000 10z" />
    </svg>
);

const DollarIcon = () => (
    <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
    >
        <path d="M6 3h12M6 8h12M6 3h3a6 6 0 0 1 0 12H6l12 6" />
    </svg>
);

const CalendarIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
        viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
);

const PinIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
        viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1118 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const BriefcaseIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
        viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
    </svg>
);

const Dashboard = ({ data }) => {

    if (!data) {
        return (
            <div className="flex items-center justify-center h-64 bg-gray-50 rounded-xl shadow-inner animate-pulse">
                <svg className="animate-spin h-5 w-5 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span className="ml-3 text-lg text-gray-600">Loading Dashboard Data...</span>
            </div>
        );
    }

    const balancePercentage = (data.paid_amount / data.total_invoice_amount) * 100;
    const safeBalancePercentage = isNaN(balancePercentage) || !isFinite(balancePercentage) ? 0 : Math.min(100, balancePercentage);

    const statusColorClass = data.status_color === "success" ? "bg-green-600" : "bg-red-600";
    const onlineStatusClass = data.online_status === "ONLINE" ? "bg-green-500" : "bg-gray-500";
    const kycStatusText = data.kyc_status === "1" ? "Verified" : "Not Verified";

    const Card = ({ title, icon: Icon, children }) => (
        <div className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-xl p-6 border-t-4 border-red-600 space-y-3">
            <div className="flex items-center space-x-3 text-red-600">
                <Icon />
                <h2 className="text-xl font-bold text-gray-800">{title}</h2>
            </div>
            <div className="text-sm space-y-2">{children}</div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-10 font-sans mt-[px]">
            <div className="max-w-7xl mx-auto space-y-8">

                <div className="flex flex-col lg:flex-row items-start lg:items-center bg-white shadow-2xl rounded-2xl p-8 space-y-6 lg:space-y-0 lg:space-x-8 border-b-4 border-red-600">
                    <div className="w-32 h-32 bg-red-600 text-white rounded-full flex items-center justify-center text-4xl font-extrabold shadow-inner ring-4 ring-red-200">
                        {data.firstname[0]}{data.lastname[0]}
                    </div>

                    <div className="flex-1">
                        <h1 className="text-4xl font-extrabold text-gray-900">
                            {data.firstname} {data.middle_name} {data.lastname}
                        </h1>
                        <p className="text-lg bg-red-600 text-white inline-block mt-1 px-2 py-1 rounded">{data.email}</p>
                        <p className="text-gray-600 mt-1">Mobile: <span className="font-medium">{data.mobile}</span></p>

                        <div className="flex flex-wrap items-center gap-3 mt-4">
                            <span className={`px-3 py-1 text-sm font-semibold rounded-full text-white ${statusColorClass}`}>
                                {data.status_text}
                            </span>
                            <span className={`px-3 py-1 text-sm font-semibold rounded-full text-white ${onlineStatusClass}`}>
                                {data.online_status}
                            </span>
                            <span className="px-3 py-1 text-sm font-semibold rounded-full bg-red-100 text-red-800">
                                KYC: {kycStatusText}
                            </span>
                        </div>
                    </div>

                    <div className="flex items-end justify-end">
                        <p className="text-sm font-medium text-gray-500">Registered: {data.registered_date}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                    <Card title="Plan & Balance" icon={DollarIcon}>
                        <p><strong>Package:</strong> <span className="font-semibold">{data.package_name}</span></p>
                        <p><strong>Sub Plan:</strong> {data.sub_plan_name}</p>
                        <p><strong>Plan Price:</strong> <span className="font-bold text-green-600">₹{data.plan_price}</span></p>
                        <p><strong>Outstanding:</strong> <span className="font-bold text-red-600">₹{data.balance}</span></p>

                        <div className="mt-4 border-t pt-4">
                            <span className="text-xs text-gray-600">Invoice Payment Progress</span>
                            <div className="w-full bg-gray-300 h-2.5 rounded mt-1 overflow-hidden">
                                <div className="bg-red-600 h-2.5 transition-all rounded" style={{ width: `${safeBalancePercentage}%` }}></div>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">
                                {safeBalancePercentage.toFixed(1)}% Paid ({data.paid_amount}/{data.total_invoice_amount})
                            </p>
                        </div>
                    </Card>

                    <Card title="Subscription Dates" icon={CalendarIcon}>
                        <p ><strong>Activation:</strong><span className='text-green-600 font-semibold'> {data.activation_date}</span></p>
                        <p><strong>Renewal:</strong><span className='text-indigo-700 font-semibold'> {data.renewal_date}</span></p>
                        <p><strong>Expiry:</strong><span className='text-red-600 font-semibold'> {data.expiry_date}</span></p>
                        <p><strong>DOB:</strong> {data.dob}</p>
                    </Card>

                    <Card title="Location & Billing" icon={PinIcon}>
                        <p><strong>Installation:</strong></p>
                        <p className="text-xs pl-2">{data.installation_address}</p>
                        <p><strong>Billing:</strong></p>
                        <p className="text-xs pl-2">{data.billing_address}</p>
                        <p><strong>Branch:</strong> {data.branch_name}</p>
                    </Card>

                    <Card title="KYC & Organizational" icon={BriefcaseIcon}>
                        <p><strong>PAN:</strong> {data.pan_number}</p>
                        <p><strong>Tax Number:</strong> {data.tax_number}</p>
                        <p><strong>Partner:</strong> {data.partner_name}</p>
                        <p><strong>Company ID:</strong> {data.company_id}</p>
                        <p><strong>Username Org:</strong> {data.username_org}</p>
                    </Card>
                </div>

                <div className="bg-white shadow-xl rounded-xl p-6 flex gap-4">
                    <button className="flex items-center bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 cursor-pointer">
                        <DollarIcon /> <span className="ml-2">Pay Balance (₹{data.balance})</span>
                    </button>

                    <button className="flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 cursor-pointer">
                        <UserIcon /> <span className="ml-2">Raise Support Ticket</span>
                    </button>
                    <Link to={"/user/orders"}>
                        <button className="flex items-center bg-indigo-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-600 cursor-pointer" >
                            <TbInvoice className='text-[25px]' /> <span className="ml-2">Orders & Payments</span>
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};


const App = () => {
    const [userData, setUserData] = useState(null);

    const customerData = useSelector(store => store.customer.customerData);

    const mockData = {
        firstname: "Arjun",
        lastname: "Sharma",
        middle_name: "Kumar",
        email: "arjun.k.sharma@example.com",
        mobile: "+91 98765 43210",
        status_color: "success",
        status_text: "Active",
        online_status: "ONLINE",
        package_name: "Fiber Pro 500",
        sub_plan_name: "Unlimited Data - Quarterly",
        balance: 450.00,
        paid_amount: 5500.00,
        total_invoice_amount: 6000.00,
        plan_price: 1500.00,
        installation_address: "Flat 101, Galaxy Apartments, Begumpet, Hyderabad",
        billing_address: "123 Jubilee Hills Road, Hyderabad",
        branch_name: "South Zone Branch B",
        activation_date: "2023-01-15",
        registered_date: "2023-01-10",
        renewal_date: "2024-01-15",
        expiry_date: "2024-04-15",
        dob: "1988-05-20",
        kyc_status: "1",
        pan_number: "ABCDE1234F",
        tax_number: "GSTIN998877",
        partner_name: "Rajesh Telecom Distributors",
        company_id: "C001",
        username_org: "arjun.sharma.org"
    };

    useEffect(() => {
        const timeId = setTimeout(() => customerData && setUserData(customerData?.data), 1500);
        return () => {
            clearTimeout(timeId)
        }
    }, [customerData]);

    return <Dashboard data={userData} />;
};

export default App;

