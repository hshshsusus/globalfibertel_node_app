import React, { useEffect, useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { CgMathPlus } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { FiEdit, FiFilter } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { addScroll } from "../Redux/scrollSlice";
import PlanShimmer from "./PlanShimmerUi";

const Plans = () => {
    const [hover, setHover] = useState();
    const [openFil, setOpenFil] = useState(false);
    const [packs, setPacks] = useState([]);
    const [filPacks, setFilPackages] = useState([]);

    const [scroll, setScroll] = useState(false);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const allPacks = useSelector(store => store.pack.allPacks);

    const admin = useSelector(store => store.admin.adminProfile);

    const handleFilter = (validity) => {
        const month3 = packs?.filter(each => each?.validity === validity);
        setFilPackages(month3)
    }

    const handleScroll = () => {
        if (window.scrollY > 20) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    }

    const handleBuy = () => {
        navigate('/contact')
    }

    useEffect(() => {
        dispatch(addScroll(scroll));
    }, [scroll, dispatch]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setPacks(allPacks);
        }, 2000)

        setFilPackages(allPacks)
        window.addEventListener("scroll", handleScroll)
        return () => {
            clearTimeout(timerId)
        }
    }, [allPacks])


    return packs.length === 0 ? <PlanShimmer /> : (
        <>
            <div className="flex items-center justify-between my-[25px] mx-[8%] py-8 ">
                <div className="relative flex items-center gap-8 ">
                    <div
                        className="flex items-center gap-2 py-2 px-5 bg-gradient-to-r from-red-500 to-red-400 
        text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
                        onClick={() => setOpenFil(!openFil)}
                    >
                        <FiFilter className="text-lg cursor-pointer" />
                        <button className="text-[16px] cursor-pointer">Filter</button>
                    </div>
                    {openFil && (
                        <div
                            className="absolute left-24 -top-6 mt-16 w-45 bg-[rgba(0,0,0,0.9)] shadow-xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl 
            border border-gray-100 overflow-hidden animate__animated animate__fadeInLeft z-30"
                        >
                            <div
                                className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-600 border-b"
                                onClick={() => handleFilter('3months')}
                            >
                                <span className="text-green-600 text-[20px]">✔</span>
                                <p className="text-[16px] text-gray-50 font-semibold">3 months</p>
                            </div>
                            <div
                                className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-600 border-b"
                                onClick={() => handleFilter('6months')}
                            >
                                <FiFilter className="text-[18px] text-green-600" />
                                <p className="text-[16px] text-gray-50 font-semibold">6 months</p>
                            </div>
                            <div
                                className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-600 border-b"
                                onClick={() => handleFilter('12months')}
                            >
                                <FiFilter className="text-[18px] text-green-600" />
                                <p className="text-[16px] text-gray-50 font-semibold">12 months</p>
                            </div>
                            <div
                                className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-600 border-b"
                                onClick={() => setFilPackages(packs)}
                            >
                                <FiFilter className="text-[18px] text-green-600" />
                                <p className="text-[16px] text-gray-50 font-semibold">All Packages</p>
                            </div>
                        </div>
                    )}
                </div>


                {admin && <Link to={`${admin ? "/package/add" : "/plans"}`}><div className="flex gap-2.5 items-center border text-red-600 border-red-600 px-3.5 py-2 hover:bg-red-600 hover:text-white cursor-pointer font-bold rounded-tl-[10px] rounded-br-[10px] transition duration-500 ease-in-out mr-[25px]">
                    <CgMathPlus className="text-[22px] cursor-pointer" />
                    <button className="text-[16px] cursor-pointer">Add new pack</button>
                </div>
                </Link>}
            </div>

            {filPacks && filPacks.length === 0 ? <p className="text-center text-[20px] font-bold"><PlanShimmer /></p> : <div className="flex flex-wrap gap-6 mx-[5%] py-2 mt-[20px] px-20 animate__animated animate__fadeIn">
                {
                    filPacks?.map((prop, i) => {
                        const { uploadSpeed, downloadSpeed, price, validity, id } = prop;
                        return (
                            <div
                                key={i}
                                className={`relative pack cursor-pointer rounded-2xl border border-gray-200 p-15 bg-white/70 backdrop-blur-xl shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate__animated animate__fadeIn`}
                                onMouseOver={() => setHover(i)}
                                onMouseLeave={() => setHover()}
                            >
                                {hover === i && (
                                    <img
                                        src="https://www.actcorp.in/themes/custom/actcorp/Plan_hover_images_webp/Bank_bottom.webp"
                                        alt="img"
                                        className="absolute w-[70px] h-[70px] top-[-40px] right-[-30px] animate__animated animate__fadeIn"
                                    />
                                )}
                                <p className="text-center text-4xl font-extrabold bg-gradient-to-r from-red-600 to-orange-500 text-transparent bg-clip-text">
                                    {uploadSpeed.toUpperCase()}
                                </p>
                                <div className="mt-6 space-y-3">
                                    <div className="flex items-center gap-2">
                                        <IoMdCheckmarkCircleOutline className="text-green-600 text-xl" />
                                        <p className="text-gray-700 text-[17px]">{uploadSpeed.toUpperCase()} Upload</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <IoMdCheckmarkCircleOutline className="text-green-600 text-xl" />
                                        <p className="text-gray-700 text-[17px]">{downloadSpeed.toUpperCase()} Download</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <IoMdCheckmarkCircleOutline className="text-green-600 text-xl" />
                                        <p className="text-gray-700 text-[17px]">Unlimited Data*</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center mt-7">
                                    <p className="text-3xl font-bold text-red-600">₹{price}</p>
                                    <span className="text-gray-500 text-lg mt-1">/{validity}</span>
                                </div>
                                <div
                                    onClick={handleBuy}
                                    className="mt-7 py-3 px-6 text-center font-semibold text-white bg-gradient-to-r from-red-600 to-red-700 rounded-xl shadow-lg hover:shadow-xl hover:from-red-700 hover:to-red-800 transition-all duration-300"
                                >
                                    Buy / Subscribe
                                </div>
                                {admin && (
                                    <Link to={`/package/update/${_id}`}>
                                        <div className="mt-4 py-3 px-6 text-center font-semibold bg-gray-100 text-gray-800 rounded-xl hover:bg-gray-200 transition-all border flex items-center justify-center gap-2">
                                            <p>Edit Pack</p>
                                            <FiEdit className="text-orange-500 text-xl" />
                                        </div>
                                    </Link>
                                )}
                                {hover === i && (
                                    <img
                                        src="https://www.actcorp.in/themes/custom/actcorp/Plan_hover_images_webp/MeshGraphicBottom.webp"
                                        alt="img"
                                        className="absolute w-[70px] h-[70px] left-[-25px] bottom-[-25px] animate__animated animate__fadeIn"
                                    />
                                )}
                            </div>
                        )
                    })
                }
            </div>}
        </>
    )
}

export default Plans;