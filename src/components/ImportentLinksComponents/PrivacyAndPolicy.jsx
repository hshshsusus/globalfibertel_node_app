import React from "react";
import { motion } from "framer-motion";

export default function PrivacyAndPolicy() {
  return (
    <div className="min-h-screen bg-white text-gray-900 py-16 px-6 mt-[35px]">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-10 text-red-600"
      >
        Privacy Policy
      </motion.h1>
      <div className="max-w-6xl mx-auto space-y-10 leading-relaxed text-[17px]">
        <section>
          <h2 className="text-2xl font-semibold text-red-500 mb-3">Objective</h2>
          <p>
            The objective of this Privacy Policy (the “Policy”) is to protect the privacy of persons dealing with Global Fibertel and to explain how We collect, use, disclose and store Information in accordance with the legal requirements and in order to mitigate operational risks.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-red-500 mb-3">Our Website</h2>
          <p>
            Global Fibertel provides products and services via its various web sites. When you visit any such site, its web servers record anonymous information such as the time, date and URL of the request. This information assists Global Fibertel to improve the structure of its web sites and monitor their performance.
          </p>
          <p className="mt-3">
            Global Fibertel may use 'cookies' on various web sites. Cookies are an industry standard and most major web sites use them. A cookie is a small text file that our web sites may place on your computer. Usually, cookies are used as a means for Global Fibertel's web sites to remember your preferences.
          </p>
          <p className="mt-3">
            In some cases, cookies may collect and store personal information about you. Global Fibertel extends the same privacy protection to your personal information, whether gathered via cookies or from other sources.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-red-500 mb-3">Assurance of Privacy</h2>
          <p>
            Your privacy is of utmost importance to us and we at Global Fibertel enforce the highest levels of confidentiality and security. We comply with all currently applicable legislation regarding the protection, security and confidentiality of personal data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-red-500 mb-3">Global Fibertel and Your Privacy</h2>
          <p>
            This policy applies to all the legal entities comprising VI Global Fibertel Private Limited. References to “we”, “our” or “us” refer to the relevant company responsible for processing your personal data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-red-500 mb-3">Sensitive Personal Data or Information</h2>
          <p>
            Global Fibertel shall not collect sensitive personal data unless necessary and lawful. Personal Information includes identity details, demographics, usage data, communication history, and more.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-red-500 mb-3">How We Collect Personal Information</h2>
          <p>
            Global Fibertel may collect personal information directly from you, from billing details, technical usage, third parties, publicly available sources, and our own service records.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-red-500 mb-3">How We Use Personal Information</h2>
          <p>
            Your personal data may be used for identity verification, service delivery, billing, customer support, fraud checks, service improvement, marketing, legal compliance, and operational purposes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-red-500 mb-3">Where We Disclose Personal Information</h2>
          <p>
            We may disclose your data to affiliates, service partners, IT services, customer enquiries, market research, legal authorities, third-party vendors, fraud agencies, and more—only as required.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-red-500 mb-3">Storage and Retention</h2>
          <p>
            Data may be stored electronically or physically. Information is retained during active association and for a minimum of 180 days after disassociation, or longer if required by law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-red-500 mb-3">Protecting Your Information</h2>
          <p>
            We enforce strict security practices, employee confidentiality, SSL encryption, and data breach protocols. However, no system is completely secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-red-500 mb-3">Limitation of Liability</h2>
          <p>
            Global Fibertel is not liable for breaches outside our reasonable control, force majeure events, or information shared by you in public areas.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-red-500 mb-3">Access, Correction and Deletion</h2>
          <p>
            You may request corrections or deletion of personal data by contacting the Grievance Officer at admin@globalfibertel.com, except where retention is required by law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-red-500 mb-3">Changes to This Policy</h2>
          <p>
            This Policy may be updated periodically. The latest version will always be available on globalfibertel.com. This Policy was last amended on 19th Sep 2023.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-red-500 mb-3">Disclaimer</h2>
          <p>
            The terms of this privacy policy are subject to Global Fibertel’s Terms of Use. We are not responsible for external websites linked from our site. All information is provided "as is" without warranty.
          </p>
        </section>
      </div>
    </div>
  );
}