import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const DataUsage = () => {
    const data = [
        { day: "Mon", usage: 1 },
        { day: "Tue", usage: 2 },
        { day: "Wed", usage: 1.8 },
        { day: "Thu", usage: 2.5 },
        { day: "Fri", usage: 3.5 },
        { day: "Sat", usage: 2 },
        { day: "Sun", usage: 1.5 },
    ];
    return (
        <div className="flex flex-col gap-8 w-[60vw] py-10 px-12 rounded-2xl bg-white/80 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-200">
            <div>
                <p className="text-[26px] font-extrabold text-gray-900 flex items-center gap-3">
                    <span className="text-red-600">Data Usage</span> (Line Chart)
                </p>
                <div className="w-[120px] h-[4px] bg-red-500 mt-1 rounded-full"></div>
            </div>
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-100 p-6 w-full h-[350px] hover:shadow-[0_6px_25px_rgba(0,0,0,0.18)] transition-all duration-300 ease-out">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#e2e8f0" />
                        <XAxis dataKey="day" stroke="#475569" />
                        <YAxis unit=" GB" stroke="#475569" />
                        <Tooltip
                            contentStyle={{
                                borderRadius: "12px",
                                border: "1px solid #ddd",
                                boxShadow: "0 3px 10px rgba(0,0,0,0.12)",
                            }}
                        />
                        <Line
                            type="monotone"
                            dataKey="usage"
                            stroke="#ef4444"
                            strokeWidth={3}
                            dot={{ r: 4, fill: "#ef4444" }}
                        />
                    </LineChart>
                </ResponsiveContainer>

            </div>
        </div>

    )
}
export default DataUsage;