import React from "react";
import { motion } from "framer-motion";

export default function WifiInternet() {
    return (
        <div className="w-full min-h-screen bg-white flex flex-col items-center overflow-hidden">
            <div className="relative w-full bg-red-600 text-white py-20 px-6 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl font-bold"
                >
                    Our WiFi Internet Services
                </motion.h1>
                <p className="text-lg mt-4 opacity-90 max-w-2xl mx-auto">
                    Fast, reliable, and seamless WiFi connectivity for homes and businesses.
                </p>
                <svg
                    className="absolute bottom-0 left-0 w-full"
                    viewBox="0 0 1440 320"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill="#ffffff"
                        fillOpacity="1"
                        d="M0,160L48,160C96,160,192,160,288,181.3C384,203,480,245,576,266.7C672,288,768,288,864,256C960,224,1056,160,1152,149.3C1248,139,1344,181,1392,202.7L1440,224V320H0Z"
                    ></path>
                </svg>
            </div>
            <div className="w-full max-w-6xl px-6 mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-blue-50 p-6 rounded-2xl shadow-md border border-blue-100"
                >
                    <h2 className="text-2xl font-semibold mb-4 bg-red-600 py-2 px-4 text-white rounded-2xl">Who We Are</h2>
                    <p className="text-gray-700 leading-relaxed">
                        We offer high‑quality WiFi internet services using advanced wireless
                        technology for smooth streaming, gaming, remote work, and business
                        operations. Our goal is to keep you connected anytime, anywhere.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-blue-50 p-6 rounded-2xl shadow-md border border-blue-100"
                >
                    <h2 className="text-2xl font-semibold mb-4 bg-red-600 py-2 px-4 text-white rounded-2xl">What We Provide</h2>
                    <ul className="list-disc ml-6 text-gray-700 leading-relaxed">
                        <li>High‑speed Wireless Internet (up to 500 Mbps)</li>
                        <li>Long‑range WiFi coverage for homes</li>
                        <li>Business‑grade WiFi solutions</li>
                        <li>Seamless streaming & gaming performance</li>
                        <li>24/7 Customer Support</li>
                    </ul>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="w-full max-w-6xl px-6 mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
                <img
                    src="https://res.cloudinary.com/dssabhgtb/image/upload/v1763613962/wifiInternet_img_1_qhbakv.png"
                    alt="People using WiFi"
                    className="w-full h-72 object-cover rounded-2xl shadow-lg"
                />
                <img
                    src="https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg"
                    alt="Family enjoying WiFi"
                    className="w-full h-72 object-cover rounded-2xl shadow-lg"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="w-full max-w-6xl px-6 mt-16 mb-16"
            >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div className="bg-blue-100 p-6 rounded-xl shadow">
                        <span className="text-5xl">📶</span>
                        <p className="mt-4 font-semibold bg-red-600 py-1.5 px-3 text-white rounded-2xl">Strong Signal</p>
                    </div>
                    <div className="bg-blue-100 p-6 rounded-xl shadow">
                        <span className="text-5xl">⚡</span>
                        <p className="mt-4 font-semibold bg-red-600 py-1.5 px-3 text-white rounded-2xl">Fast Speeds</p>
                    </div>
                    <div className="bg-blue-100 p-6 rounded-xl shadow">
                        <span className="text-5xl">🔒</span>
                        <p className="mt-4 font-semibold bg-red-600 py-1.5 px-3 text-white rounded-2xl">Secure Network</p>
                    </div>
                    <div className="bg-blue-100 p-6 rounded-xl shadow">
                        <span className="text-5xl">📡</span>
                        <p className="mt-4 font-semibold bg-red-600 py-1.5 px-3 text-white rounded-2xl">Wide Coverage</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
