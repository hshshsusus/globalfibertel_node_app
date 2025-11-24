import { useState } from "react";

const Tickets = ({ data }) => {

    const [selectedTicket, setSelectedTicket] = useState(null);

    const getStatusColor = (status) => {
        switch (status) {
            case "Closed":
                return "bg-green-100 text-green-700";
            case "Open":
                return "bg-red-100 text-red-700";
            case "In Progress":
                return "bg-yellow-100 text-yellow-700";
            default:
                return "bg-gray-100 text-gray-700";
        }
    };

    const getOnlineColor = (status) =>
        status === "ONLINE"
            ? "text-green-600 font-semibold"
            : "text-red-600 font-semibold";

    return (
        <div className="p-6">
            <h2 className="text-2xl font-extrabold mb-6 text-red-600 tracking-wide flex items-center gap-2">
                🎫 Customer Tickets
            </h2>

            {/* TABLE */}
            <div className="overflow-x-auto rounded-2xl shadow-xl border border-red-200 mx-auto w-[900px]">
                <table className="w-full border-collapse ">
                    <thead className="bg-gradient-to-r from-red-600 to-red-500 text-white">
                        <tr>
                            <th className="p-4 text-left font-semibold">Ticket ID</th>
                            <th className="p-4 text-left font-semibold">Complaint</th>
                            <th className="p-4 text-left font-semibold">Username</th>
                            <th className="p-4 text-left font-semibold">Branch</th>
                            <th className="p-4 text-left font-semibold">Online</th>
                            <th className="p-4 text-left font-semibold">Status</th>
                            <th className="p-4 text-left font-semibold">Date</th>
                        </tr>
                    </thead>

                        <tbody className="text-gray-700">
                            {data?.map((t, index) => (
                                <tr
                                    key={index}
                                    className="border-b hover:bg-red-50 transition cursor-pointer"
                                    onClick={() => setSelectedTicket(t)}
                                >
                                    <td className="p-4 font-semibold">{t.id}</td>
                                    <td className="p-4">{t.complaint_sub_type || t.complaint_main}</td>
                                    <td className="p-4">{t.username_org}</td>
                                    <td className="p-4">{t.branch}</td>
                                    <td className="p-4">
                                        <span className={`px-2 py-1 rounded-md text-sm font-semibold ${getOnlineColor(t.online_status)}`}>
                                            {t.online_status}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <span className={`px-2 py-1 rounded-md text-sm font-semibold ${getStatusColor(t.status_text)}`}>
                                            {t.status_text}
                                        </span>
                                    </td>
                                    <td className="p-4">{t.complaint_date}</td>
                                </tr>
                            ))}
                        </tbody>
                </table>
            </div>

            {/* POP-UP MODAL */}
            {selectedTicket && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="bg-white w-[500px] p-7 rounded-2xl shadow-2xl border-t-4 border-red-600 animate__animated animate__zoomIn">
                        <h3 className="text-2xl font-bold mb-4 text-red-600 tracking-wide">
                            🧾 Ticket Details — #{selectedTicket.id}
                        </h3>

                        <div className="space-y-2 text-gray-700 leading-relaxed text-[15px]">
                            <p><strong className="text-gray-900">Customer:</strong> {selectedTicket.username_org}</p>
                            <p><strong className="text-gray-900">Complaint:</strong> {selectedTicket.complaint_main}</p>
                            <p><strong className="text-gray-900">Sub Type:</strong> {selectedTicket.complaint_sub_type}</p>
                            <p><strong className="text-gray-900">Created By:</strong> {selectedTicket.created_user}</p>
                            <p><strong className="text-gray-900">Opening Notes:</strong> {selectedTicket.opening_notes}</p>
                            <p><strong className="text-gray-900">Status:</strong> {selectedTicket.status_text}</p>
                            <p><strong className="text-gray-900">Closed By:</strong> {selectedTicket.closed_by}</p>
                            <p><strong className="text-gray-900">Closed Notes:</strong> {selectedTicket.closed_notes}</p>
                        </div>

                        <button
                            onClick={() => setSelectedTicket(null)}
                            className="mt-6 w-full py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-xl shadow hover:brightness-110 active:scale-95 transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>


    );
};

export default Tickets;
