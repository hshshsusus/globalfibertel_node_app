import axios from "axios";
import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { BASE_URL } from "../constants";

const ChatBot = () => {

    const [chat, setChat] = useState([]);
    const [text, setText] = useState("");
    const [typing, setTyping] = useState(false);

    const handleChat = async () => {
        try {
            setTyping(true)
            if (!text.trim()) return;

            const userMessage = { role: "user", message: text };

            setChat((prev) => [...prev, userMessage])

            setText("");

            const res = await axios.post(BASE_URL + "/user/chatbot", { message: userMessage.message }, { withCredentials: true });

            const botMessage = { role: "bot", message: res?.data?.[0]?.Ai }

            const timeId = setTimeout(() => {
                setTyping(false)
                setChat((prev) => [...prev, botMessage])
            }, 2000);

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="w-full h-[80vh] flex items-center justify-center">
            <div className="w-[30%] h-[60vh] rounded-2xl overflow-hidden 
                shadow-[0_8px_30px_rgba(0,0,0,0.2)] 
                bg-white/40 backdrop-blur-xl border border-white/50">
                <div className="flex items-center gap-4 px-5 h-[15%] 
                    bg-gradient-to-r from-red-500 to-red-600 
                    text-white shadow-md">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/10063/10063451.png"
                        alt="Chatbot Avatar"
                        className="w-[42px] h-[42px] rounded-full bg-white p-1 shadow-lg"
                    />
                    <div className="">
                        <p className="text-[20px] font-bold tracking-wide">Chatbot</p>
                        <p className="text-white/80 text-[13px] -mt-1">Online • Ready to assist</p>
                    </div>
                </div>
                <div className="w-full h-[70%] flex flex-col gap-4 py-4 px-3 overflow-y-auto">
                    {
                        chat?.map((e, i) => {

                            return (
                                <div key={i} className={`flex ${e?.role === "user" ? "justify-end" : "justify-start"} `}>
                                    <div className={`max-w-[75%] ${e?.role === "user" ? "bg-gradient-to-br from-red-500 to-red-600  text-white" : "bg-white/90 backdrop-blur-lg border border-gray-200 text-gray-800"}  px-4 py-2 rounded-2xl rounded-br-none
                            shadow-md animate-slide-up`}>
                                        {typing && e?.role !== "user" && i === chat.length - 1 ? <p className="text-gray-700">typing...</p> : <p className="text-[15px] leading-relaxed">{e?.message}</p>}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="flex items-center w-full px-4 py-3 gap-3 bg-white/70 backdrop-blur-xl
                    shadow-inner border-t border-white/60" ref={scrollRef}>
                    <input
                        type="text"
                        placeholder="Type a message..."
                        value={text}
                        className="w-full bg-white/60 rounded-xl px-4 py-2 shadow-sm border border-gray-300 focus:ring-2 focus:ring-red-400 outline-none placeholder-gray-500" onChange={(e) => setText(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleChat()} />
                    <IoIosSend
                        className="text-white bg-red-500 hover:bg-red-600 text-[35px] p-1 rounded-full cursor-pointer shadow-md hover:shadow-lg transition-all" onClick={() => handleChat()} />
                </div>
            </div>
        </div>
    )
}
export default ChatBot;