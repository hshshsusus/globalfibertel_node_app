import React from "react";

const Billing = () => {
    return (
        <div className="mx-auto w-[70vw] py-10 px-20 bg-white rounded-3xl shadow-xl mt-10 border border-gray-100">
            <p className="text-3xl font-bold text-gray-800">Billing & Payments</p>
            <div className="mt-10">
                <ul className="grid grid-cols-3 text-left border-b border-gray-200 pb-3 px-4">
                    <li className="text-lg font-semibold text-gray-700">Date</li>
                    <li className="text-lg font-semibold text-gray-700">Amount</li>
                    <li className="text-lg font-semibold text-gray-700">Invoice</li>
                </ul>
                <ul className="mt-6 px-4 max-h-[35vh] overflow-y-scroll scrollbar flex flex-col gap-4">
                    <div className="grid grid-cols-3 items-center bg-gray-50 hover:bg-gray-100 transition-all duration-300 p-4 rounded-xl shadow-sm">
                        <li className="text-[17px] text-gray-700 font-medium">00-00-0000</li>
                        <li className="text-[17px] text-gray-700 font-medium">00.00</li>
                        <li className="text-[16px] font-semibold text-blue-600 cursor-pointer hover:text-blue-800 hover:underline transition-all">Download</li>
                    </div>

                </ul>
            </div>
        </div>

    )
}
export default Billing;