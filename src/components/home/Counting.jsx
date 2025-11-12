import React from "react";
import SlotCounter from 'react-slot-counter';
import { IoPeople } from "react-icons/io5";
import { RiBaseStationFill } from "react-icons/ri";
import { GiPathDistance } from "react-icons/gi";
import { MdEmojiPeople } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { useSelector } from "react-redux";


export const Counting = () => {

    const home = useSelector(store => store.home)

    return (
        <div className="flex items-center justify-between mx-[12%] my-[45px] py-[5%] px-[5%] rounded-md count">
            {
                home?.subscriberscount?.map((each, i) => {
                    return (
                        <div key={i} className="flex flex-col items-center justify-center gap-1">
                            <IoPeople className="text-[45px] text-green-600" />
                            <div className="flex items-center justify-center text-[45px] text-red-600 font-bold">
                                <SlotCounter value={each?.countNumber} />
                                <p>+</p>
                            </div>
                            <p className="text-[18px] font-bold text-gray-600">{each?.countText}</p>
                        </div>
                    )
                })
            }

        </div>
    )
}
