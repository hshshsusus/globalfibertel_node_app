import React from "react";

const PlanShimmer = () => {
    return (
        <div className="w-full px-[10%] py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 animate-fade">

            {[1, 2, 3, 4, 5, 6].map((_, i) => (
                <div
                    key={i}
                    className="relative p-8 rounded-2xl bg-white/40 backdrop-blur-xl shadow-lg border border-gray-200 overflow-hidden"
                >
                    {/* SHIMMER EFFECT */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200/40 to-transparent animate-shimmer"></div>

                    <div className="flex flex-col items-center space-y-6">
                        {/* Big Title */}
                        <div className="w-32 h-8 rounded-full bg-gray-200/60"></div>

                        {/* Features */}
                        <div className="w-full space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-6 h-6 rounded-full bg-gray-200/60"></div>
                                <div className="w-40 h-4 rounded-full bg-gray-200/60"></div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-6 h-6 rounded-full bg-gray-200/60"></div>
                                <div className="w-44 h-4 rounded-full bg-gray-200/60"></div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-6 h-6 rounded-full bg-gray-200/60"></div>
                                <div className="w-36 h-4 rounded-full bg-gray-200/60"></div>
                            </div>
                        </div>

                        {/* Price */}
                        <div className="w-28 h-8 rounded-full bg-gray-200/60"></div>

                        {/* Button */}
                        <div className="w-full h-12 rounded-xl bg-gray-200/60 mt-2"></div>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default PlanShimmer;

