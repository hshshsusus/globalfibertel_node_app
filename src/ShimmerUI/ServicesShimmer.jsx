import React from "react";

const ServicesShimmer = () => {
  return (
    <div className="animate-pulse mt-[150px] ml-[5%]">
      <div className="flex items-center mx-[5%] gap-[35px] my-[25px]">
        <div className="flex flex-col gap-5 w-[50%]">
          <div className="h-10 w-[80%] shimmer rounded-md"></div>
          <div className="h-5 w-[90%] shimmer rounded-md"></div>
          <div className="h-5 w-[75%] shimmer rounded-md"></div>
          <div className="flex items-center gap-3 mt-3">
            <div className="h-5 w-5 shimmer rounded-full"></div>
            <div className="h-4 w-40 shimmer rounded-md"></div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-5 w-5 shimmer rounded-full"></div>
            <div className="h-4 w-48 shimmer rounded-md"></div>
          </div>
        </div>
        <div className="w-[40%] h-[300px] shimmer rounded-br-[15px] rounded-tl-[15px]"></div>
      </div>
      <div className="mx-auto mt-[40px] h-9 w-[40%] shimmer rounded-md"></div>
      <div className="grid grid-cols-3 gap-6 mx-[5%] mt-[40px]">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="h-[180px] w-full shimmer rounded-2xl shadow-md"
            ></div>
          ))}
      </div>
    </div>
  );
};

export default ServicesShimmer;