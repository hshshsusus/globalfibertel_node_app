import React from "react";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const BarChartData = () => {

    const data = [
        { month: "Jan", usage: 110 },
        { month: "Feb", usage: 200 },
        { month: "Mar", usage: 150 },
        { month: "Apr", usage: 250 },
        { month: "May", usage: 180 },
        { month: "Jun", usage: 190 },
    ];

    return (
        <div className="mx-auto w-[70vw] py-10 px-12 bg-white rounded-3xl shadow-xl mt-[35px] animate__animated animate__fadeIn border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-800 tracking-wide">
                Data Usage (Bar Chart)
            </h2>
            <div className="h-[280px] mt-10 bg-gray-50 rounded-xl p-5 shadow-inner">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} barSize={35}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#d1d5db" />
                        <XAxis dataKey="month" tick={{ fill: "#4b5563", fontSize: 13 }} />
                        <YAxis unit=" GB" tick={{ fill: "#4b5563", fontSize: 13 }} />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "white",
                                borderRadius: "10px",
                                border: "1px solid #e5e7eb",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                            }}
                        />
                        <Bar
                            dataKey="usage"
                            fill="#38a169"
                            radius={[8, 8, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>

    );
};

export default BarChartData;