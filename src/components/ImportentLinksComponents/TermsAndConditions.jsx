import React from "react";
import { motion } from "framer-motion";

export default function TermsAndConditions() {
    return (
        <div className="min-h-screen bg-white text-gray-900 py-16 px-6 mt-[35px]">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto text-center mb-12"
            >
                <h1 className="text-4xl font-bold mb-4 text-red-600">Terms & Conditions</h1>
                <p className="text-gray-700 text-lg">
                    Please read the following Terms & Conditions carefully before using our services.
                </p>
            </motion.div>
            <div className="max-w-5xl mx-auto space-y-10 leading-relaxed text-gray-800">
                <section>
                    <h2 className="text-2xl font-semibold mb-2 text-red-500">Introduction</h2>
                    <p>
                        i). VI Global Fibertel Private Limited (GLOBAL FIBERTEL) is an authorized class B Internet Service Provider, having its registered office at #7-62/2/1/A, Shiridi Hills, Isnapur X Road, Patancheru Mandal, Sangareddy Dist, Telangana – 502307.
                    </p>
                    <p>
                        ii). SUBSCRIBER desires to become an authorized Internet access subscriber of GLOBAL FIBERTEL to access the Internet services in their area of residence or office.
                    </p>
                    <p>
                        iii). SUBSCRIBER is responsible for obtaining necessary statutory licenses, permissions, and clearances required to avail the Internet service.
                    </p>
                    <p>
                        iv). SUBSCRIBER agrees that changing the cable service provider (other than GLOBAL FIBERTEL's authorized provider) may result in immediate service termination.
                    </p>
                    <p>
                        v). Field support will not be available between 7:00 PM and 8:00 AM. For issues during this time, contact customer care.
                    </p>
                    <p>
                        vi). Subscription payment must be made before the due date.
                    </p>
                    <p>
                        vii). Commercial users must provide their network diagram and keep it updated and displayed at their premises.
                    </p>
                    <p>
                        viii). For Internet-related complaints, subscribers must contact customer care only.
                    </p>
                    <p>
                        ix). Any illegal Internet activity may result in immediate service termination and the subscriber will be solely responsible for consequences.
                    </p>
                    <p>
                        x). The subscriber must not violate any laws or regulations of the Government of India.
                    </p>
                    <p>
                        xi). Redistribution of GLOBAL FIBERTEL Internet services is strictly prohibited.
                    </p>
                    <p>
                        xii). GLOBAL FIBERTEL may amend these terms at any time, and the subscriber must accept the changes.
                    </p>
                    <p>
                        xiii). All equipment required to access the Internet is the responsibility of the subscriber and must comply with Indian government rules.
                    </p>
                    <p>
                        xiv). GLOBAL FIBERTEL guarantees 95% uptime subject to physical and force majeure limitations.
                    </p>
                    <p>
                        xv). IPs and usernames must not be used for spamming, call termination, tampering, or unauthorized services.
                    </p>
                    <p>
                        xvi). Subscribers must submit written intimation for disconnection and obtain acknowledgment.
                    </p>
                    <p>
                        xvii). Subscribers should frequently verify the service provider at https://www.globalfibertel.com/broadband.
                    </p>
                    <p>
                        xviii). ONT/Router/Android Box installed is GLOBAL FIBERTEL property and must be returned after service disconnection.
                    </p>
                </section>
                <section>
                    <h2 className="text-2xl font-semibold mb-2 text-red-500">Statutory Compliance</h2>
                    <p>a). Subscribers must not share objectionable, unauthorized, or copyrighted content and must follow Indian cyber laws.</p>
                    <p>b). Internet must not be used for anti-national activities, hacking, or break-ins.</p>
                    <p>c). Subscribers must not use unlawful hardware or compromise Internet security.</p>
                    <p>d). Services are subject to Indian Telegraph Act, Wireless Act, TRAI Act, and ISP License terms.</p>
                </section>
                <section>
                    <h2 className="text-2xl font-semibold mb-2 text-red-500">Liability</h2>
                    <p>
                        GLOBAL FIBERTEL is not liable for third-party transactions or service interruptions. No guarantee of end-to-end bandwidth is provided.
                    </p>
                </section>
                <section>
                    <h2 className="text-2xl font-semibold mb-2 text-red-500">Refund Policy</h2>
                    <p>
                        Since services are prepaid, refunds or cancellations are not allowed. Refund is only provided in case of non-feasibility and may take 4–6 weeks.
                    </p>
                </section>
                <section>
                    <h2 className="text-2xl font-semibold mb-2 text-red-500">Force Majeure</h2>
                    <p>
                        Neither party is liable for failure to meet obligations due to events beyond control such as strikes, riots, epidemics, power failures, or natural disasters.
                    </p>
                </section>
                <section>
                    <h2 className="text-2xl font-semibold mb-2 text-red-500">Identification of Subscriber</h2>
                    <p>
                        Subscribers must provide valid ID and address proof when signing the registration form.
                    </p>
                </section>
                <section>
                    <h2 className="text-2xl font-semibold mb-2 text-red-500">Jurisdiction</h2>
                    <p>
                        All legal matters fall under the jurisdiction of Hyderabad courts only.
                    </p>
                </section>
            </div>
        </div>
    );
}