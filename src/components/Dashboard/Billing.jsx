import React from "react";

const Billing = () => {
    return (
        <div className="mx-auto w-[70vw] py-[45px] px-[120px] account rounded-lg mt-[35px]">
            <p className="text-[25px] text-red-600 font-bold">Billing & Payments</p>
            <div>
                <ul className="flex items-center justify-between mt-[35px] border-b border-gray-300 pb-2.5 px-[10px]">
                    <li className="text-[18px] font-bold">Date</li>
                    <li className="text-[18px] font-bold">Amount</li>
                    <li className="text-[18px] font-bold">Invoice</li>
                </ul>
                <ul className="flex flex-col gap-3.5 mt-[35px] pb-2.5 px-[10px] max-h-[30vh] min-h-[10vh] overflow-y-scroll scrollbar">
                    <div className="flex justify-between">
                        <li className="text-[18px] text-gray-600 font-semibold">00-00-0000</li>
                        <li className="text-[18px] text-gray-600 font-semibold">00.00</li>
                        <li className="text-[16px] cursor-pointer hover:text-blue-700 hover:underline font-semibold text-blue-500 transition-all duration-300 ease-in">Download</li>
                    </div>
                </ul>
            </div>
        </div>
    )
}
export default Billing;