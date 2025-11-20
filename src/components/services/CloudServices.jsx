import React from "react";
import { motion } from "framer-motion";
import { Cloud, Shield, Server, Globe } from "lucide-react";

export default function CloudServices() {
    return (
        <div className="w-full min-h-screen bg-white p-6 flex flex-col items-center mt-[45px]">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold mb-6 text-red-600 text-center"
            >
                Cloud Services We Provide
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-4xl text-center text-gray-700 text-lg mb-10"
            >
                Our cloud platform empowers businesses with secure, scalable, and reliable
                cloud solutions. Whether you need storage, computing power, or enterprise-level
                infrastructure — we’ve got you covered.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mb-12">
                {[
                    { icon: Cloud, title: "Cloud Storage", desc: "Secure, scalable, and fast storage." },
                    { icon: Server, title: "Cloud Hosting", desc: "High-performance cloud servers." },
                    { icon: Shield, title: "Cloud Security", desc: "Enterprise-level protection." },
                    { icon: Globe, title: "Global CDN", desc: "Worldwide content delivery." },
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="bg-white border shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition-all"
                    >
                        <item.icon className="w-12 h-12 mx-auto text-red-600 mb-4" />
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl"
            >
                <img
                    src="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg"
                    alt="People using cloud service"
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <img
                    src="https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg"
                    alt="Cloud technology team"
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-5xl mt-12 bg-white border shadow-md p-8 rounded-2xl"
            >
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Why Choose Our Cloud Services?</h2>
                <p className="text-gray-700 leading-relaxed text-base">
                    We deliver reliable, scalable, and cost-effective cloud solutions designed for
                    modern businesses. Our infrastructure is built with the latest technologies to
                    ensure data security, high availability, and global performance.
                </p>
            </motion.div>
        </div>
    );
}
