import React from "react";
import { motion } from "framer-motion";
import { Megaphone, Users, BarChart3, Globe2, MessagesSquare, TrendingUp } from "lucide-react";

export default function MarketingService() {
    return (
        <div className="w-full min-h-screen bg-white p-10 text-gray-900 flex flex-col items-center mt-[75px]">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-center mb-4 text-red-600"
            >
                Marketing Services
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-center max-w-3xl text-gray-600 mb-12"
            >
                Boost your brand visibility, engage your audience, and grow your customer base
                with our professional marketing solutions tailored for ISPs and digital businesses.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
                {[
                    { icon: Megaphone, title: "Brand Promotion", desc: "Increase awareness with expert-led marketing campaigns." },
                    { icon: Users, title: "Customer Engagement", desc: "Build stronger relationships with your audience." },
                    { icon: BarChart3, title: "Analytics & Insights", desc: "Make data-driven decisions with real-time analytics." },
                    { icon: Globe2, title: "Digital Campaigns", desc: "Promote your services across digital platforms effectively." },
                    { icon: MessagesSquare, title: "Social Media Marketing", desc: "Manage and grow your social media presence." },
                    { icon: TrendingUp, title: "Growth Strategy", desc: "Scale your business with tailored marketing strategies." },
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        className="bg-white border border-red-300 shadow-md hover:shadow-red-400/50 hover:border-red-500 rounded-2xl p-6 text-center transition-all hover:scale-[1.03]"
                    >
                        <item.icon className="w-12 h-12 mx-auto text-red-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mt-12"
            >
                <img
                    src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
                    alt="Marketing team planning"
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <img
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                    alt="Digital marketing overview"
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-5xl mt-14 bg-white border border-red-300 rounded-2xl p-8 shadow-lg"
            >
                <h2 className="text-2xl font-bold text-red-600 mb-4">Why Choose Our Marketing Services?</h2>
                <p className="text-gray-600 leading-relaxed">
                    Our marketing experts specialize in helping ISPs grow their reach and improve customer
                    acquisition. With powerful digital tools, strategic planning, and performance tracking,
                    we help you stay ahead of the competition and build a stronger brand presence.
                </p>
            </motion.div>
        </div>
    );
}