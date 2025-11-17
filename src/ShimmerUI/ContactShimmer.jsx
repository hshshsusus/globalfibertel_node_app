import React from "react";

const ContactShimmer = () => {
    return (
        <div className="mx-[15%] bg-white shadow-xl rounded-2xl p-10 flex gap-10 animate-pulse">
            <div className="w-[65%] flex flex-col gap-6">
                <div className="h-8 w-40 bg-gray-200 rounded-md"></div>
                <div className="flex gap-6 w-full">
                    <div className="flex flex-col gap-2 w-full">
                        <div className="h-4 w-24 bg-gray-200 rounded-md"></div>
                        <div className="h-10 w-full bg-gray-200 rounded-lg"></div>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <div className="h-4 w-28 bg-gray-200 rounded-md"></div>
                        <div className="h-10 w-full bg-gray-200 rounded-lg"></div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="h-4 w-28 bg-gray-200 rounded-md"></div>
                    <div className="h-10 w-full bg-gray-200 rounded-lg"></div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="h-4 w-20 bg-gray-200 rounded-md"></div>
                    <div className="h-[22vh] w-full bg-gray-200 rounded-lg"></div>
                </div>
                <div className="h-12 w-40 bg-gray-200 rounded-xl"></div>
            </div>
            <div className="w-[35%] p-8 rounded-xl bg-gray-50 border border-gray-100 flex flex-col gap-5">
                <div className="h-5 w-32 bg-gray-200 rounded-md"></div>
                <div className="space-y-2">
                    <div className="h-4 w-[80%] bg-gray-200 rounded-md"></div>
                    <div className="h-4 w-[60%] bg-gray-200 rounded-md"></div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="h-7 w-7 rounded-full bg-gray-200"></div>
                    <div className="h-5 w-32 bg-gray-200 rounded-md"></div>
                </div>
            </div>
        </div>
    );
};

export default ContactShimmer;
