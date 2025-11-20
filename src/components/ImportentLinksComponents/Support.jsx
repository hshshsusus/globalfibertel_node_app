import React from "react";
import { motion } from "framer-motion";
import {
    Phone,
    Mail,
    Smile,
    UserCog,
    MessageCircle,
    Clock
} from "lucide-react";

export default function Support() {
    return (
        <div className="w-full min-h-screen bg-white text-gray-800 p-8 flex flex-col items-center mt-[55px]">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold mb-4 text-center text-red-600"
            >
                Customer Support
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-3xl text-center text-gray-600 text-lg mb-10"
            >
                Welcome to our Customer Support! We're here to ensure you have the best
                experience with our <span className="font-semibold">Global Fibertel</span> services.
                Whether you need help troubleshooting, have questions about your account,
                or want to explore additional features — we’re here for you.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-blue-100 border border-red-300 rounded-2xl p-6 max-w-2xl w-full mb-12 shadow-md"
            >
                <h2 className="text-2xl font-bold flex items-center gap-3 text-red-600 mb-4">
                    <UserCog className="w-7 h-7" /> Manage Your Account
                </h2>
                <p className="text-gray-700 mb-3">
                    Access your account online to view bills, update information, and manage your subscriptions.
                </p>
                <a
                    href="#"
                    className="text-red-600 font-semibold underline hover:text-red-800"
                >
                    Go to MyAccount →
                </a>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full"
            >
                <div className="border rounded-2xl p-6 shadow-md bg-gray-50 hover:shadow-lg transition-all">
                    <Phone className="w-10 h-10 text-red-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Customer Support Hotline</h3>
                    <p className="text-gray-600 mb-1 font-medium">Call Us: +91 9705999972</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                        <Clock className="w-4 h-4" />
                        08:30 AM to 08:30 PM
                    </div>
                </div>
                <div className="border rounded-2xl p-6 shadow-md bg-gray-50 hover:shadow-lg transition-all">
                    <MessageCircle className="w-10 h-10 text-red-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Live Chat Support</h3>
                    <p className="text-gray-600">Chat with our support team for real-time help.</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                        <Clock className="w-4 h-4" />
                        08:30 AM to 08:30 PM
                    </div>
                </div>
                <div className="border rounded-2xl p-6 shadow-md bg-gray-50 hover:shadow-lg transition-all">
                    <Mail className="w-10 h-10 text-red-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Email Support</h3>
                    <p className="text-gray-600 mb-1">Reach us at:</p>
                    <p className="font-medium text-gray-700">Support@globalfibertel.com</p>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-16 text-center text-gray-600 max-w-xl"
            >
                <Smile className="w-10 h-10 mx-auto mb-2 text-red-600" />
                We're committed to providing you with fast, friendly, and reliable support.
                Your satisfaction is our top priority!
            </motion.div>
        </div>
    );
}
