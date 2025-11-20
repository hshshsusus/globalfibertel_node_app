import React from "react";
import { motion } from "framer-motion";

export default function ParentalControle() {
    return (
        <div className="min-h-screen w-full bg-gray-50 text-gray-900 py-16 px-6 mt-[35px]">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto text-center mb-14"
            >
                <h1 className="text-4xl font-bold text-red-600 mb-4">Parental Control Services</h1>
                <p className="text-lg text-gray-700">
                    Keep your family safe online with our advanced parental control solutions designed to
                    protect children from harmful content.
                </p>
            </motion.div>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white shadow-lg border border-red-200 rounded-2xl p-6 hover:shadow-red-300 hover:border-red-400 transition"
                >
                    <h2 className="text-2xl font-semibold text-red-600 mb-3">Website Blocking & Filtering</h2>
                    <p className="text-gray-700">
                        Parental control software can block unwanted websites using databases of banned
                        words, URL scanners, and API monitoring. These tools prevent access to harmful or
                        inappropriate content.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-white shadow-lg border border-red-200 rounded-2xl p-6 hover:shadow-red-300 hover:border-red-400 transition"
                >
                    <h2 className="text-2xl font-semibold text-red-600 mb-3">Proxy-Based Controls</h2>
                    <p className="text-gray-700">
                        Proxy servers review every web request and block inappropriate content. While
                        effective, this method requires the child's device to be configured correctly and can
                        be bypassed if reconfigured.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white shadow-lg border border-red-200 rounded-2xl p-6 hover:shadow-red-300 hover:border-red-400 transition"
                >
                    <h2 className="text-2xl font-semibold text-red-600 mb-3">Network-Based Parental Controls</h2>
                    <p className="text-gray-700">
                        Modern routers use firewalls, packet filtering, DNS RPZ, and deep packet inspection
                        (DPI) to block harmful online content before it reaches connected devices.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-white shadow-lg border border-red-200 rounded-2xl p-6 hover:shadow-red-300 hover:border-red-400 transition"
                >
                    <h2 className="text-2xl font-semibold text-red-600 mb-3">Mobile Device Protection</h2>
                    <p className="text-gray-700">
                        Mobile parental control apps allow monitoring of browsing history, app usage,
                        messages, calls, GPS location, and social media activity. Major OS platforms support
                        in-built parental control systems.
                    </p>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto mt-16 bg-white border border-red-200 shadow-lg rounded-2xl p-8"
            >
                <h2 className="text-2xl font-bold text-red-600 mb-4">More About Parental Controls</h2>
                <p className="text-gray-700 mb-4">
                    Mobile parental control software also allows real-time monitoring of social media
                    accounts, posts, messages, and interactions. These tools help protect children from
                    cyberbullying and inappropriate exposure.
                </p>
                <p className="text-gray-700">
                    While parental controls are helpful, they may also create anxiety in children. In some
                    cases, extreme restrictions may lead to anger or destructive behavior toward their
                    devices. Parents should find a balance between safety and digital independence.
                </p>
            </motion.div>
            <div className="max-w-4xl mx-auto text-center mt-12 text-sm text-gray-600">
                <p>
                    Global Fibertel, Plot No. 46, VIP Hills, 5A, Arunodaya Colony, Madhapur (Hitech City),
                    Hyderabad – 500081.
                </p>
            </div>
        </div>
    );
}