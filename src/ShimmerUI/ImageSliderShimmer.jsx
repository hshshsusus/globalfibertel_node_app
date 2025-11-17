import React from "react";

const ImageSliderShimmer = () => {
    return (
        <div className="relative w-full h-[70vh] animate-pulse">
            <div className="w-full h-full bg-gray-200"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent"></div>
            <div className="absolute left-5 top-1/2 -translate-y-1/2 
            bg-white/20 p-4 rounded-full backdrop-blur-md">
                <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
            </div>
            <div className="absolute right-5 top-1/2 -translate-y-1/2 
            bg-white/20 p-4 rounded-full backdrop-blur-md">
                <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
            </div>
            <div className="absolute top-[18%] left-[10%] max-w-[450px] 
            bg-white/10 backdrop-blur-[2px] p-8 rounded-lg space-y-5">
                <div className="h-8 w-[80%] bg-gray-200 rounded-md"></div>
                <div className="h-8 w-[60%] bg-gray-200 rounded-md"></div>
                <div className="flex items-center gap-3 mt-5">
                    <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
                    <div className="h-4 w-[70%] bg-gray-200 rounded-md"></div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
                    <div className="h-4 w-[60%] bg-gray-200 rounded-md"></div>
                </div>
                <div className="mt-6 h-12 w-48 bg-gray-200 rounded-xl"></div>
            </div>

        </div>
    );
};

export default ImageSliderShimmer;
