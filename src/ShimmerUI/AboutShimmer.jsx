import React from "react";

const AboutShimmer = () => {
  return (
    <div className="relative w-full py-[60px] mt-[65px] px-[7%] bg-gradient-to-br from-gray-50 to-white overflow-hidden animate-pulse">
      <div className="absolute top-0 left-0 w-[280px] h-[280px] bg-red-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[240px] h-[240px] bg-purple-500/10 blur-3xl rounded-full"></div>

      <div className="flex items-center gap-[60px] relative z-10">
        <div className="relative w-[50%]">
          <div className="absolute -top-5 -left-5 w-[120px] h-[120px] bg-red-400/30 blur-2xl rounded-full"></div>

          <div className="w-full h-[400px] bg-gray-200 rounded-2xl shadow-xl"></div>

          <div className="absolute bottom-0 right-0 w-[150px] h-[150px] bg-red-500/30 blur-3xl rounded-full"></div>
        </div>
        <div className="flex flex-col gap-6 w-[50%]">
          <div className="space-y-4">
            <div className="h-10 w-[70%] bg-gray-200 rounded-md"></div>
            <div className="h-10 w-[50%] bg-gray-200 rounded-md"></div>
            <div className="w-[120px] h-[6px] bg-gray-200 rounded-full"></div>
          </div>
          <div className="space-y-3">
            <div className="h-4 w-[95%] bg-gray-200 rounded-md"></div>
            <div className="h-4 w-[85%] bg-gray-200 rounded-md"></div>
            <div className="h-4 w-[90%] bg-gray-200 rounded-md"></div>
          </div>
          <div className="flex flex-col gap-4 mt-2">
            <div className="flex items-center gap-3 bg-white/60 backdrop-blur-xl border border-gray-100 p-3 rounded-xl shadow-sm">
              <div className="h-6 w-6 rounded-full bg-gray-200"></div>
              <div className="h-4 w-[60%] bg-gray-200 rounded-md"></div>
            </div>
            <div className="flex items-center gap-3 bg-white/60 backdrop-blur-xl border border-gray-100 p-3 rounded-xl shadow-sm">
              <div className="h-6 w-6 rounded-full bg-gray-200"></div>
              <div className="h-4 w-[55%] bg-gray-200 rounded-md"></div>
            </div>
          </div>
          <div className="h-12 w-[180px] bg-gray-200 rounded-xl"></div>
        </div>
      </div>
      <div className="mt-[80px] justify-between flex px-[7%]">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <div className="h-10 w-20 bg-gray-200 rounded-md"></div>
              <div className="h-4 w-28 bg-gray-200 rounded-md"></div>
            </div>
          ))}
      </div>

    </div>
  );
};

export default AboutShimmer;
