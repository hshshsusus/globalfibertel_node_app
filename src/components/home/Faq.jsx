import React, { useState, useRef, useEffect } from "react";
import { FAQ } from "../../utils";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useSelector } from "react-redux";

export const Faq = () => {
    const [showAns, setShowAns] = useState(null);

    const home = useSelector(store => store.home);
    const FAQS = home?.FAQ;
    const handleFAQ = (i) => {
        setShowAns(showAns === i ? null : i);
    };

    return (
        <>
            <p className="text-center text-[35px] font-bold mt-[25px]">{home?.[0]?.FAQ?.faqText}</p>
            <div className="py-1.5 px-14 mx-[145px] flex flex-col gap-1 mt-[20px]">
                {FAQS?.map((each, i) => {
                    const isOpen = showAns === i;
                    return (
                        <div
                            key={i}
                            className={`flex flex-col gap-2 bg-gray-50 ${FAQ.length - 1 === i ? "" : "border-b border-gray-300"
                                } cursor-pointer py-[20px] px-[20px] rounded-md`}
                            onClick={() => handleFAQ(i)}
                        >
                            <div className="flex items-center justify-between">
                                <p className="text-[18px] font-bold">
                                    Q{i + 1}. {each.question}
                                </p>
                                <div>
                                    {isOpen ? (
                                        <IoIosArrowUp className="text-[25px] mr-6 font-bold" />
                                    ) : (
                                        <IoIosArrowDown className="text-[25px] mr-6 font-bold" />
                                    )}
                                </div>
                            </div>

                            <div className={`faq-answer-wrapper ${isOpen ? "open" : ""}`}>
                                <p className="text-gray-700 faq-answer">
                                    <span className="font-bold">Ans.</span> {each.answer
                                    }
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};
