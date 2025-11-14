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
        <div className="mx-auto w-[70vw] py-[45px] px-[35px] account rounded-lg mt-[35px] animate__animated animate__fadeIn">
            <h2 className="text-[25px] text-red-600 font-bold">Datausage in Barchart</h2>
            <div className="h-[250px] mt-[35px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} barSize={40}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="month" />
                        <YAxis unit=" GB" />
                        <Tooltip />
                        <Bar dataKey="usage" fill="#38a169" radius={[1, 1, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default BarChartData;