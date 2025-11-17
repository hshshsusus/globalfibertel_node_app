import React from "react";

export const PopularPlansShimmer = () => {
    return (
        <div className="mt-[25px]">
            <p className="text-[35px] text-center py-[10px] font-bold text-transparent bg-gray-100/50 rounded-md w-[260px] mx-auto animate-pulse">
                Loading...
            </p>

            <div className="relative flex flex-wrap items-center justify-center gap-14 mx-auto py-1.5 px-14 mt-[25px]">
                {[1, 2, 3].map((_, i) => (
                    <div
                        key={i}
                        className="w-[280px] h-[350px] rounded-2xl border border-gray-200 p-8 
            bg-white/60 backdrop-blur-xl shadow-md animate-pulse flex flex-col"
                    >
                        <div className="w-[120px] h-[35px] mx-auto rounded-lg bg-gray-100/70"></div>
                        <div className="mt-8 space-y-4">
                            <div className="h-[20px] bg-gray-100/70 rounded-md w-[70%]"></div>
                            <div className="h-[20px] bg-gray-100/70 rounded-md w-[80%]"></div>
                            <div className="h-[20px] bg-gray-100/70 rounded-md w-[60%]"></div>
                        </div>
                        <div className="flex justify-center mt-8">
                            <div className="w-[120px] h-[32px] bg-gray-100/70 rounded-md"></div>
                        </div>
                        <div className="w-full h-[45px] bg-gray-100/70 rounded-xl mt-8"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};
