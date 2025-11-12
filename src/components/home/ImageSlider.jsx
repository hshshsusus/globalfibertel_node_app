import React, { useEffect, useState } from "react";
import { IMG_SLIDE_URL } from "../../utils";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { AiFillThunderbolt } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addScroll } from "../../Redux/scrollSlice";

export const ImageSlider = () => {

    const [activeImage, setActiveImage] = useState(0);
    const [state, setState] = useState(false);
    const [scroll, setScroll] = useState(false);
    const [img, setImg] = useState(0);
    const [value1, setValue] = useState()

    const home = useSelector(store => store.home);

    const banner = home?.banners;

    const dispatch = useDispatch();

    useEffect(() => {
        setState(true);

        const timeId = setInterval(() => {
            let value = Math.floor(Math.random() * 10);
            if (value >= 0 && value < banner?.length) {
                setValue(value)
                setImg(value)
            }
            else {
                setImg(0)
            }
        }, 2000)

        return () => {
            setState(false);
            clearInterval(timeId);
        }
    }, [value1])

    const handleNext = () => {
        setActiveImage((activeImage + 1) % banner?.length);
    }

    const handlePrev = () => {
        if (activeImage === 0) {
            setActiveImage(banner?.length - 1)
        }
        else {

            setActiveImage(activeImage - 1)
        }
    }

    const handleScrolldown = () => {
        if (window.scrollY > 10) {
            setScroll(true)
        } else {
            setScroll(false)
        }

    }

    useEffect(() => {
        dispatch(addScroll(scroll));
    }, [scroll, dispatch]);

    useEffect(() => {
        window.addEventListener("scroll", handleScrolldown);
        return () => {
            window.removeEventListener("scroll", handleScrolldown);
        }
    }, [])

    return (
        <div className={`relative ${scroll && "mt-[40px]"}`}>
            <img src={banner?.[img || activeImage]?.imageURL} alt="" className={`w-[100vw] h-[70vh] mx-auto object-cover ${state ? "animate__animated animate__fadeInLeft" : 'animate__animated animate__fadeInLeft'}`} />

            <button className="absolute right-0 cursor-pointer transition duration-500 ease-in-out bg-gray-200 text-[30px] text-gray-600 hover:bg-red-600 hover:text-white p-[10px] top-[40%]" onClick={handleNext}><FaAngleRight /></button>
            <button className="absolute left-0 cursor-pointer transition duration-500 ease-in-out bg-gray-200 text-[30px] text-gray-600 hover:bg-red-600 hover:text-white p-[10px] top-[40%]" onClick={handlePrev}> <FaAngleLeft /></button>
            <div className=" absolute top-[30%] left-24 py-[20px] px-[32px] popup animate__animated animate__bounce">
                <p className="text-[40px] font-bold text-gray-200 overflow-hidden">{banner?.[activeImage || img]?.heading}</p>
                <div className="flex items-center gap-2 mt-[20px] text-gray-300">
                    < AiFillThunderbolt />
                    <p className="text-[16px]">
                        {banner?.[activeImage || img]?.option1}
                    </p>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                    < AiFillThunderbolt />
                    <p className="text-[16px]">
                        {banner?.[activeImage || img]?.option2}
                    </p>
                </div>
                <div className="cursor-pointer hover:bg-red-400 transition-all duration-300 ease-in rounded-tl-[15px] rounded-br-[15px] flex gap-1 w-fit bg-red-600 items-center py-[8px] px-[20px] text-white font-semibold mt-[15px] text-[18px]">
                    <IoMdCall />
                    <p>{banner?.[activeImage || img]?.number1}</p>
                    <p>{banner?.[activeImage || img]?.number2}</p>
                </div>
            </div>

        </div>

    )
}
