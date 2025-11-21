import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useSelector } from "react-redux";

export const Faq = () => {
    const [showAns, setShowAns] = useState(null);

    const home = useSelector(store => store?.home?.homeData);
    const FAQS = home?.FAQ;
   
    const handleFAQ = (i) => {
        setShowAns(showAns === i ? null : i);
    };

    return (
        <>
            <p className="text-center text-[35px] font-bold mt-[25px]">
                FAQs
            </p>

            <div className="py-4 px-10 mx-[145px] flex flex-col gap-4 mt-[20px]">
                {FAQS?.map((each, i) => {
                    const isOpen = showAns === i;

                    return (
                        <div
                            key={i}
                            onClick={() => handleFAQ(i)}
                            className={`cursor-pointer bg-white shadow-md hover:shadow-xl 
        border border-gray-200 rounded-xl p-5 transition-all duration-300 
        ${isOpen ? "bg-red-50 border-red-300" : ""}`}
                        >
                            <div className="flex items-center justify-between">
                                <p className={`text-[20px] font-semibold transition-all 
            ${isOpen ? "text-red-600" : "text-gray-800"}`}
                                >
                                    Q{i + 1}. {each.question}
                                </p>

                                <div className="transition-transform duration-300">
                                    {isOpen ? (
                                        <IoIosArrowUp className="text-[26px] text-red-600" />
                                    ) : (
                                        <IoIosArrowDown className="text-[26px] text-gray-600" />
                                    )}
                                </div>
                            </div>
                            <div className={`faq-answer-wrapper ${isOpen ? "open" : ""}`}>
                                <p className="text-gray-700 mt-3 text-[16px] leading-relaxed">
                                    <span className="font-bold text-red-600">Ans.</span> {each.answer}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};
