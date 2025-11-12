import React, { useEffect, useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { CgMathPlus } from "react-icons/cg";
import { Link } from "react-router-dom";
import { FiEdit, FiFilter } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { BsFilterRight } from "react-icons/bs";
import { addScroll } from "../Redux/scrollSlice";

const Plans = () => {
    const [hover, setHover] = useState();
    const [openFil, setOpenFil] = useState(false);
    const [packs, setPacks] = useState([]);
    const [filPacks, setFilPackages] = useState([]);

    const [scroll, setScroll] = useState(false);

    const dispatch = useDispatch();

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

    useEffect(() => {
        dispatch(addScroll(scroll));
    }, [scroll, dispatch]);

    useEffect(() => {
        setPacks(allPacks);
        setFilPackages(allPacks)
        window.addEventListener("scroll", handleScroll)
    }, [allPacks])

    return (
        <>
            <div className="flex items-center justify-between my-[25px] mx-[8%] py-8 ">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2.5 py-[10px] px-[20px] w-fit bg-red-600 text-white hover:bg-red-500 transition-all duration-200 ease-out cursor-pointer rounded-tl-[10px] rounded-br-[10px] " onClick={() => setOpenFil(!openFil)}>
                        <button className="text-[16px] font-bold">Filter</button>
                        <FiFilter className="text-[16px] font-bold" />
                    </div>
                    {openFil && <div className={`animate__animated animate__fadeInLeft flex gap-5 border border-gray-500 rounded-[5px] w-fit py-[4px] px-[10px]`}>
                        <div className="flex gap-1.5 fil items-center py-[4px] px-[10px] border border-red-600 text-red-600 rounded-[5px] hover:bg-green-600 hover:border-none hover:text-white font-semibold cursor-pointer" onClick={() => handleFilter("3months")}>
                            <p>3 months</p>
                            <BsFilterRight />
                        </div>
                        <div className="flex gap-1.5 items-center py-[4px] px-[10px] border border-red-600 text-red-600 rounded-[5px] hover:bg-green-600 fil hover:border-none hover:text-white font-semibold cursor-pointer" onClick={() => handleFilter("6months")}>
                            <p>6 months</p>
                            <BsFilterRight />
                        </div>
                        <div className="flex gap-1.5 items-center py-[4px] px-[10px] border border-red-600 text-red-600 rounded-[5px] hover:bg-green-600 fil hover:border-none hover:text-white font-semibold cursor-pointer" onClick={() => handleFilter("12months")}>
                            <p>12 months</p>
                            <BsFilterRight />
                        </div>
                        <div className="flex gap-1.5 items-center py-[4px] px-[10px] border border-red-600 text-red-600 rounded-[5px] hover:bg-green-600 fil hover:border-none hover:text-white font-semibold cursor-pointer" onClick={() => setFilPackages(packs)}>
                            <p>All packages</p>
                        </div>
                    </div>}
                </div>
                {admin && <Link to={`${admin ? "/package/add" : "/plans"}`}><div className="flex gap-2.5 items-center border text-red-600 border-red-600 px-3.5 py-2 hover:bg-red-600 hover:text-white cursor-pointer font-bold rounded-tl-[10px] rounded-br-[10px] transition duration-500 ease-in-out mr-[25px]">
                    <CgMathPlus className="text-[22px] cursor-pointer" />
                    <button className="text-[16px] cursor-pointer">Add new pack</button>
                </div>
                </Link>}
            </div>

            {filPacks.length === 0 ? <p className="text-center text-[20px] font-bold">No data found.!</p> : <div className="flex flex-wrap gap-6 mx-[5%] py-2 mt-[20px] px-20">
                {
                    filPacks?.map((prop, i) => {
                        const { uploadSpeed, downloadSpeed, price, validity, id } = prop;
                        return (
                            <div key={i} className="animate__animated animate__slideInDown border border-gray-300 py-6 px-10 rounded-lg relative pack" onMouseOver={() => setHover(i)} onMouseLeave={() => setHover()}>
                                {hover === i && <img src="https://www.actcorp.in/themes/custom/actcorp/Plan_hover_images_webp/Bank_bottom.webp" alt="img" className="absolute w-[65px] h-[65px] top-[-50px] right-[-40px] bag animate__animated animate__fadeIn bag" />}
                                <p className="text-center text-[30px] text-red-600">{uploadSpeed}</p>
                                <div className="mt-[30px] ">
                                    <div className="flex gap-1 items-center">
                                        <IoMdCheckmarkCircleOutline className="text-green-700" />
                                        <p className="text-[16px] text-gray-600">{uploadSpeed} Upload</p>
                                    </div>
                                    <div className="flex gap-1 items-center">
                                        <IoMdCheckmarkCircleOutline className="text-green-700" />
                                        <p className="text-[16px] text-gray-600">{downloadSpeed} Download</p>
                                    </div>
                                    <div className="flex gap-1 items-center">
                                        <IoMdCheckmarkCircleOutline className="text-green-700" />
                                        <p className="text-[16px] text-gray-600">Unlimited*</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center mt-[25px]">
                                    <p className="text-[22px]">Rs{price}</p>
                                    <span className="text-end pt-2.5 text-[16px]">/{validity}</span>
                                </div>
                                <div className="btn flex items-center justify-center gap-2.5 mt-[25px] py-2.5 px-6 cursor-pointer font-bold text-red-600 rounded-tl-[10px] rounded-br-[10px] hover:bg-red-600 hover:text-white transition duration-500 ease-in-out">
                                    <p>Buy / Subscribe</p>
                                </div>
                                {admin && <Link to={`/package/update/${_id}`}><div className="btn flex items-center justify-center gap-2.5 mt-[25px] py-2.5 px-6 cursor-pointer font-bold text-red-600 rounded-tl-[10px] rounded-br-[10px] hover:bg-green-700 hover:text-white transition duration-500 ease-in-out">
                                    <p>Edit pack</p>
                                    <FiEdit className="text-orange-500 font-bold text-[18px] hover:text-white" />
                                </div>
                                </Link>}
                                {hover === i && <img src="https://www.actcorp.in/themes/custom/actcorp/Plan_hover_images_webp/MeshGraphicBottom.webp" alt="img" className="absolute w-[65px] h-[65px] left-[-30px] bottom-[-30px] animate__animated animate__fadeIn" />}
                            </div>
                        )
                    })
                }
            </div>}
        </>
    )
}

export default Plans;