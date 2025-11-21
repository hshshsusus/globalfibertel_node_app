import React from "react";
import SlotCounter from 'react-slot-counter';
import { useSelector } from "react-redux";
import * as BsIcons from "react-icons/bs"
import * as MdIcons from "react-icons/md"
import * as LiaIcons from "react-icons/lia"
import * as PiIcons from "react-icons/pi"

export const Counting = () => {

    const home = useSelector(store => store?.home?.homeData);

    const getIconsData = (icon, library) => {
        const libraries = {
            bs: BsIcons,
            md: MdIcons,
            lia: LiaIcons,
            pi: PiIcons
        }

        const lib = libraries[library];

        const Icon = lib[icon];

        return <Icon className="text-[50px] text-green-600 group-hover:scale-110 transition-all duration-300" />
    }

    return (
        <div
            className="flex flex-wrap items-center justify-between mx-[10%] my-[60px] py-[4%] px-[6%]
             rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-500"
        >
            {home?.subscriberscount?.map((each, i) => {
                return (
                    <div
                        key={i}
                        className="group flex flex-col items-center justify-center gap-3 p-4 
                   hover:-translate-y-2 transition-all duration-500 w-[220px]"
                    >
                        {getIconsData(each?.icon, each?.iconLibrary)}
                        <div className="flex items-center justify-center text-[42px] text-red-600 font-extrabold">
                            <SlotCounter value={each?.countNumber} duration={1} />
                            <p>+</p>
                        </div>
                        <p className="text-[18px] font-semibold text-gray-700 tracking-wide group-hover:text-red-600 transition-all duration-300">
                            {each?.countText}
                        </p>
                        <div className="h-[3px] w-[40px] bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    </div>
                );
            })}
        </div>
    )
}
