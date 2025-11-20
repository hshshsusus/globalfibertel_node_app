import React from "react";
import { motion } from "framer-motion";

export default function BroadbandInfo() {
    return (
        <div className="w-full min-h-screen p-10 bg-gradient-to-b from-blue-50 to-white flex flex-col items-center">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl font-extrabold mb-10 text-red-600 drop-shadow-sm text-center"
            >
                Experience Lightning-Fast Broadband
            </motion.h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="bg-white rounded-3xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-all duration-300">
                        <h2 className="text-3xl font-bold mb-4 text-red-600">Who We Are</h2>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            We are a trusted high-speed broadband provider bringing reliable,
                            low-latency, and ultra-fast internet solutions to homes and
                            businesses. With cutting-edge fiber technology and a dedicated
                            support team, we guarantee an exceptional online experience.
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="bg-white rounded-3xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-all duration-300">
                        <h2 className="text-3xl font-bold mb-4 text-red-600">What We Provide</h2>
                        <ul className="list-disc ml-6 text-gray-700 leading-relaxed text-lg">
                            <li>Fiber Broadband up to 1 Gbps</li>
                            <li>Unlimited Home Internet Plans</li>
                            <li>Dedicated Business Leased Line</li>
                            <li>Gaming-Optimized Low-Latency Plans</li>
                            <li>24/7 Customer & Technical Support</li>
                        </ul>
                    </div>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="max-w-6xl mt-10"
            >
                <div className="bg-white rounded-3xl shadow-lg p-8 border border-blue-100 hover:shadow-2xl transition-all duration-300">
                    <h2 className="text-3xl font-bold mb-4 text-red-600">Why Choose Us?</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Enjoy unmatched consistency, stability, and speed with our fully
                        upgraded fiber network. Whether streaming in 4K, gaming online,
                        working remotely, or running a business, we deliver smooth
                        connectivity with minimal downtime.
                    </p>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="max-w-6xl mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
                <img
                    src="https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg"
                    alt="People enjoying high-speed broadband"
                    className="w-full h-64 object-cover rounded-3xl shadow-lg hover:scale-[1.02] transition-all duration-300"
                />
                <img
                    src="https://images.pexels.com/photos/1181353/pexels-photo-1181353.jpeg"
                    alt="Happy customer streaming online"
                    className="w-full h-64 object-cover rounded-3xl shadow-lg hover:scale-[1.02] transition-all duration-300"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="max-w-6xl mt-10"
            >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className="flex flex-col items-center bg-white p-6 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300">
                        <span className="text-6xl">⚡</span>
                        <p className="mt-3 font-semibold text-red-600 text-lg">Super Fast</p>
                    </div>

                    <div className="flex flex-col items-center bg-white p-6 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300">
                        <span className="text-6xl">🎮</span>
                        <p className="mt-3 font-semibold text-red-600 text-lg">Low Latency</p>
                    </div>

                    <div className="flex flex-col items-center bg-white p-6 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300">
                        <span className="text-6xl">📶</span>
                        <p className="mt-3 font-semibold text-red-600 text-lg">Reliable Network</p>
                    </div>

                    <div className="flex flex-col items-center bg-white p-6 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300">
                        <span className="text-6xl">💼</span>
                        <p className="mt-3 font-semibold text-red-600 text-lg">Business Plans</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

