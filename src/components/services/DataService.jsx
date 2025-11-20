import React from "react";
import { motion } from "framer-motion";

export default function DataService() {
    return (
        <div className="w-full min-h-screen text-black mt-15">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-extrabold text-center tracking-wide mb-10"
            >
                Our Data Services
            </motion.h1>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-xl"
            >
                <h2 className="text-2xl font-bold mb-3">Who We Are</h2>
                <p className="text-base text-black leading-relaxed">
                    We provide advanced data connectivity solutions for homes, enterprises, startups,
                    and IT infrastructures. Our services ensure faster, secure, and efficient data
                    transfer with minimal downtime.
                </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-xl"
                >
                    <h2 className="text-2xl font-bold mb-3">What We Offer</h2>
                    <ul className="list-disc ml-6 text-black leading-relaxed">
                        <li>Enterprise-grade Data Connectivity</li>
                        <li>High-Speed Dedicated Data Links</li>
                        <li>Secure Encrypted Data Transfer</li>
                        <li>Cloud Sync & Remote Storage Connectivity</li>
                        <li>24/7 Enterprise Support</li>
                    </ul>
                </motion.div>
                <motion.img
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                    alt="Team using data services"
                    className="w-full h-64 object-cover rounded-3xl shadow-xl"
                />
                <motion.img
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    src="https://res.cloudinary.com/dssabhgtb/image/upload/v1763615164/Gemini_Generated_Image_9psigu9psigu9psi_r9ao80.png"
                    alt="Data Services Use"
                    className="w-full h-64 object-cover rounded-3xl shadow-xl"
                />
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-10"
            >
                <img
                    src="https://res.cloudinary.com/dssabhgtb/image/upload/v1763615261/Gemini_Generated_Image_358a50358a50358a_mbtvyz.png"
                    alt="People working with data services"
                    className="w-full h-64 object-cover rounded-3xl shadow-xl"
                />
                <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                    alt="Office team using advanced data connectivity"
                    className="w-full h-64 object-cover rounded-3xl shadow-xl"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-xl mt-10"
            >
                <h2 className="text-2xl font-bold mb-3">Why Choose Our Data Service?</h2>
                <p className="text-base text-black leading-relaxed">
                    With ultra-secure data transmission, optimised performance, and round-the-clock monitoring,
                    our solutions are ideal for IT companies, banks, educational institutions, and
                    high-demand cloud environments.
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12 text-center"
            >
                <div>
                    <span className="text-6xl">🔐</span>
                    <p className="mt-2 font-semibold">High Security</p>
                </div>
                <div>
                    <span className="text-6xl">🚀</span>
                    <p className="mt-2 font-semibold">Fast Transfer</p>
                </div>
                <div>
                    <span className="text-6xl">☁️</span>
                    <p className="mt-2 font-semibold">Cloud Optimized</p>
                </div>
                <div>
                    <span className="text-6xl">📡</span>
                    <p className="mt-2 font-semibold">Reliable Uptime</p>
                </div>
            </motion.div>
        </div>
    );
}
