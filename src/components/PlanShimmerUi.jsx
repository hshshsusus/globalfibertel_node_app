import React from "react";

const PlanShimmer = () => {
    return (
        <div className="flex flex-wrap gap-20 mx-[5%] py-2 mt-[75px] pl-[150px]">
            {Array(6)
                .fill(0)
                .map((_, i) => (
                    <div
                        key={i}
                        className="w-[280px] h-[380px] rounded-2xl border border-gray-200 p-6 
            bg-white/70 backdrop-blur-xl shadow animate-pulse"
                    >
                        <div className="h-10 w-32 mx-auto bg-gray-200 rounded-md mb-6"></div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
                                <div className="h-4 w-40 bg-gray-200 rounded-md"></div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
                                <div className="h-4 w-44 bg-gray-200 rounded-md"></div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
                                <div className="h-4 w-36 bg-gray-200 rounded-md"></div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center mt-8">
                            <div className="h-8 w-20 bg-gray-200 rounded-md"></div>
                        </div>
                        <div className="mt-6 h-10 w-full bg-gray-200 rounded-xl"></div>
                        <div className="mt-4 h-10 w-full bg-gray-100 rounded-xl"></div>
                    </div>
                ))}
        </div>
    );
};

export default PlanShimmer;
