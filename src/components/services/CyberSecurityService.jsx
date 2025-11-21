import React from "react";
import { motion } from "framer-motion";

export default function CyberSecurity() {
    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black p-8 flex flex-col items-center text-white mt-[55px]">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold mb-6 text-center text-red-500"
            >
                Cyber Security Services
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-4xl text-center text-gray-300 text-lg mb-10"
            >
                Protect your online presence with our advanced cyber‑security features,
                including network protection, threat monitoring, data safety, and AI‑powered analysis.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
                {[
                    { icon: "🛡️", title: "Threat Monitoring", desc: "Detect cyber attacks in real‑time with AI analytics." },
                    { icon: "🔐", title: "Data Protection", desc: "Advanced encryption keeps your data fully secure." },
                    { icon: "🚫", title: "Network Firewall", desc: "Multi‑layer protection blocks unauthorized access." },
                    { icon: "🐞", title: "Malware Defense", desc: "Identify, isolate and remove cyber threats instantly." },
                    { icon: "🧬", title: "Identity Security", desc: "Biometric security & identity authentication." },
                    { icon: "⚠️", title: "Risk Assessment", desc: "Security audits for businesses & enterprises." },
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="bg-gradient-to-br from-gray-950 via-gray-900 to-black backdrop-blur-md border border-red-600 shadow-lg rounded-2xl p-6 text-center hover:shadow-red-500/50 hover:scale-105 transition-all"
                    >
                        <div className="text-6xl mb-4">{item.icon}</div>
                        <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                        <p className="text-gray-300">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mt-12"
            >
                <img
                    src="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg"
                    alt="Cyber security professional"
                    className="w-full h-64 object-cover rounded-2xl shadow-xl"
                />
                <img
                    src="https://images.pexels.com/photos/5380641/pexels-photo-5380641.jpeg"
                    alt="Digital data protection"
                    className="w-full h-64 object-cover rounded-2xl shadow-xl"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-5xl mt-12 bg-gradient-to-br from-gray-950 via-gray-900 to-black p-8 border border-red-700 rounded-2xl shadow-xl"
            >
                <h2 className="text-2xl font-bold mb-4 text-red-500">Why Choose Our Cyber Security?</h2>
                <p className="text-gray-300 leading-relaxed text-base">
                    With increasing cyber threats, your business needs reliable and modern protection.
                    Our cyber security solutions provide real‑time threat detection, encrypted
                    communication, secure data management, and round‑the‑clock monitoring to ensure your
                    digital world is always safe.
                </p>
            </motion.div>
        </div>
    );
}

