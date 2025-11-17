import React, { useEffect, useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { AiFillThunderbolt } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addScroll } from "../../Redux/scrollSlice";
import { useNavigate } from "react-router-dom";
import ImageSliderShimmer from "../../ShimmerUI/ImageSliderShimmer";

export const ImageSlider = () => {

    const [activeImage, setActiveImage] = useState(0);
    const [state, setState] = useState(false);
    const [scroll, setScroll] = useState(false);
    const [img, setImg] = useState(0);
    const [value1, setValue] = useState();
    const [shimmerLoader, setShowShimmer] = useState(false);

    const home = useSelector(store => store.home);

    const banner = home?.banners;

    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        setState(true);

        const timeId = setInterval(() => {
            let value = Math.floor(Math.random() * 4);
            // console.log(value)
            if (value >= 0 && value < banner?.length) {
                setValue(value)
                setImg(value)
            }
            else {
                setImg(0)
            }
        }, 2000)

        const timeId1 = setTimeout(() => {
            setShowShimmer(true)
        }, 2000)

        return () => {
            setState(false);
            clearInterval(timeId);
            clearTimeout(timeId1)
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

    return !shimmerLoader ? <ImageSliderShimmer/> : (
        <div className={`relative ${scroll && "mt-[40px]"} `}>

            <img
                src={banner?.[img || !img && activeImage]?.imageURL}
                alt=""
                className={`relative w-full h-[70vh] object-cover transition-all duration-700 z-0`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
            <button
                onClick={handlePrev}
                className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white/40 transition-all duration-300 shadow-lg cursor-pointer"
            >
                <FaAngleLeft className="text-3xl" />
            </button>
            <button
                onClick={handleNext}
                className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white/40 transition-all duration-300 shadow-lg cursor-pointer"
            >
                <FaAngleRight className="text-3xl" />
            </button>
            <div
                className="absolute top-[18%] left-[10%] max-w-[450px] bg-white/10 backdrop-blur-[2px] p-8 shadow-2xl animate__animated animate__fadeInLeft"
            >
                <p className="text-[42px] font-extrabold text-white leading-tight drop-shadow-xl">
                    {banner?.[activeImage || img]?.heading}
                </p>
                <div className="mt-6 space-y-3 text-gray-200 text-[18px]">
                    <div className="flex items-center gap-3">
                        <AiFillThunderbolt className="text-red-400 text-xl" />
                        <p>{banner?.[activeImage || img]?.option1}</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <AiFillThunderbolt className="text-red-400 text-xl" />
                        <p>{banner?.[activeImage || img]?.option2}</p>
                    </div>
                </div>
                <div
                    className="cursor-pointer bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 transition-all duration-300 mt-6 px-6 py-3 rounded-xl text-white font-semibold text-[18px] flex items-center gap-2 shadow-lg w-fit"
                    onClick={() => navigate("/contact")}>
                    <IoMdCall className="text-xl" />
                    <p >{banner?.[activeImage || img]?.number1} {banner?.[activeImage || img]?.number2}</p>
                </div>
            </div>
        </div>
    )
}
