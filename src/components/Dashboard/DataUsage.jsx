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
        <div className="flex flex-col gap-7 w-[60vw] py-[25px] px-[65px] account rounded-lg">
            <p className="text-[25px] text-red-600 font-bold">Datausage in Linechart</p>
            <div className="bg-white rounded-2xl shadow p-4 w-full h-[300px]">

                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="day" />
                        <YAxis unit=" GB" />
                        <Tooltip />
                        <Line
                            type="linear"
                            dataKey="usage"
                            stroke="#38a169"
                            strokeWidth={3}
                            dot={{ r: 4 }}
                        />
                    </LineChart>
                </ResponsiveContainer>

            </div>
        </div>
    )
}
export default DataUsage;