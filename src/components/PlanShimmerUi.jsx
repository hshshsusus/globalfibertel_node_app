import React from "react";

const PlanShimmer = () => {
    return (
        <div className="flex flex-wrap justify-center gap-16 py-10 px-6">
            {Array(6)
                .fill(0)
                .map((_, i) => (
                    <div
                        key={i}
                        className="relative w-[300px] h-[400px] rounded-[28px] overflow-hidden 
        bg-gradient-to-br from-white/25 to-white/5 backdrop-blur-2xl 
        border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                    >
                        <div className="absolute inset-x-0 top-0 h-[120px] bg-gradient-to-b 
        from-white/50 to-transparent opacity-70"></div>
                        <div className="absolute inset-0 bg-gradient-to-r 
        from-transparent via-white/30 to-transparent 
        animate-[shimmer_2s_infinite]"></div>
                        <div className="relative z-10 p-8">
                            <div className="h-8 w-40 bg-white/30 rounded-xl mb-8"></div>
                            <div className="space-y-6">
                                <div className="h-4 w-52 bg-white/20 rounded-lg"></div>
                                <div className="h-4 w-48 bg-white/20 rounded-lg"></div>
                                <div className="h-4 w-40 bg-white/20 rounded-lg"></div>
                            </div>
                            <div className="mt-9 h-9 w-28 bg-white/25 rounded-xl mx-auto"></div>
                            <div className="mt-8 h-10 w-full bg-white/20 rounded-xl"></div>
                            <div className="mt-4 h-10 w-full bg-white/10 rounded-xl"></div>
                        </div>
                    </div>
                ))}
        </div>


    );
};

export default PlanShimmer;
