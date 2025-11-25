import { useState } from "react";
import { IoClose, IoTicketOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import CreateTicket from "./CreateTicket";

const Tickets = ({ data }) => {

    const [selectedTicket, setSelectedTicket] = useState(null);
    const [showTicketForm, setShowTicketform] = useState(false)

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
            <div className="flex items-center justify-between mx-[17%] my-[25px]">
                <h2 className="text-2xl font-extrabold mb-6 text-red-600 tracking-wide flex items-center gap-2">
                    🎫 Customer Tickets
                </h2>
                <div className="flex items-center justify-center ">
                    <button className=" flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-2xl shadow-md shadow-red-200 transition-all duration-300 ease-out hover:scale-[1.07] hover:shadow-lg hover:shadow-red-400 active:scale-95 border border-red-300 backdrop-blur-md cursor-pointer" onClick={() => setShowTicketform(true)}>
                        <IoTicketOutline className="text-[20px] drop-shadow-sm" />
                        Raise Ticket
                    </button>
                </div>
            </div>
            {showTicketForm && <div className="fixed inset-0 items-center justify-center bg-black/50 ">
                <div className="animate__animated animate__zoomIn">
                    <CreateTicket />
                </div>
                <IoClose className="fixed top-12 right-1/4 rounded-2xl text-white text-[45px] bg-white/30 p-2 cursor-pointer" onClick={() => setShowTicketform(false)} />
            </div>}
            <div className="flex items-center justify-center">
                <span className="text-[18px] text-gray-800 font-bold">Total tickets : </span><p className="text-[18px] text-red-600 font-bold">{data?.length}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6 max-h-[520px] overflow-y-auto pr-2 max-w-2/3 ml-[17%] py-[3%] px-[4%] ticketCol rounded-2xl">

                {data?.map((t, index) => (
                    <div
                        key={index}
                        onClick={() => setSelectedTicket(t)}
                        className="bg-white border border-red-200 rounded-2xl p-5 shadow-md hover:shadow-xl cursor-pointer transition-all duration-300 hover:-translate-y-1"
                    >
                        {/* Top Row */}
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-extrabold text-red-600">
                                #{t.id}
                            </h2>
                            <span className={`px-3 py-1 rounded-lg text-sm font-semibold ${getStatusColor(t.status_text)}`}>
                                {t.status_text}
                            </span>
                        </div>

                        {/* Complaint Title */}
                        <p className="text-gray-800 font-semibold mt-2 text-[15px]">
                            {t.complaint_sub_type || t.complaint_main}
                        </p>

                        {/* Meta Info */}
                        <div className="grid grid-cols-2 gap-4 mt-4 text-[14px]">
                            <p><span className="font-bold text-gray-600">Username:</span> {t.username_org}</p>
                            <p><span className="font-bold text-gray-600">Branch:</span> {t.branch}</p>
                        </div>

                        {/* Online + Date */}
                        <div className="flex justify-between items-center mt-4">
                            <span className={`px-3 py-1 rounded-md text-sm font-semibold ${getOnlineColor(t.online_status)}`}>
                                {t.online_status}
                            </span>
                            <p className="text-gray-500 text-sm">{t.complaint_date}</p>
                        </div>
                    </div>
                ))}
            </div>

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
