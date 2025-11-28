import React, { useEffect, useState } from "react";
import FooterOurServicesEdit from "./FooterOurServicesEdit";
import axios from "axios";
import { BASE_URL } from "../../../constants";
import { useDispatch } from "react-redux";
import { adminHomeFooter } from "../../../Redux/adminHomeSlice";
import FooterImportentLinksEdit from "./FooterImportentLinkEdit";
import FooterProductsEdit from "./FooterProductsEdit";
import FooterCompanyDetEdit from "./FooterCompanyDetEdit";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiEdit } from "react-icons/fi";

const FooterEdit = () => {

    const [options, setOptions] = useState(["Our services", "Importent links", "Our products", "Company details"])
    const [compo, setCompo] = useState("Our services");

    const dispatch = useDispatch();

    const fetchFooterData = async () => {
        try {
            const res = await axios.get(BASE_URL + "/home/footer", { withCredentials: true })
            // console.log(res.data)
            dispatch(adminHomeFooter(res?.data))
        } catch (error) {
            console.log(error)
        }
    }

    const targetComponent = (component) => {
        const value = options.find((each) => each === component);
        setCompo(value)
    }

    useEffect(() => {
        fetchFooterData();
    }, [])

    return (
        <>
            <div className="flex items-center justify-between fixed w-[85%] bg-gray-600 py-1">
                <div className="flex items-center justify-between gap-4 text-[25px] text-red-600 font-bold py-4 px-6 w-[80%]">
                    <p>Footer section</p>
                </div>
                <ul className="text-[16px] text-white font-semibold flex gap-0.5 flex items-center gap-3.5 py-2.5 px-7">
                    {options.map((component, index) => {

                        return (
                            <div key={index} className="flex items-center justify-between w-fit whitespace-nowrap hover:bg-gray-700 py-1 px-2 transition-all duration-200 ease-in cursor-pointer" onClick={() => targetComponent(component)}>
                                <li className={`${compo === component && "text-green-600 "}`}>
                                    {component}
                                </li>
                            </div>)
                    })}
                </ul>
            </div>
            {compo === "Our services" && <FooterOurServicesEdit /> || compo === "Importent links" && <FooterImportentLinksEdit /> || compo === "Our products" && <FooterProductsEdit /> || compo === "Company details" && <FooterCompanyDetEdit />}
        </>
    )
}
export default FooterEdit;