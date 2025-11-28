import { FaHome, FaRegSquare, FaPaintBrush, FaBox, FaImage, FaUsers } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import HomePageEdit from "./EditableComponents.jsx/HomePageEdit";
import HomeServicesEdit from "./EditableComponents.jsx/HomeServicesEdit";
import HomeSubCount from "./EditableComponents.jsx/HomeSubCount";
import HomeFAQsEdit from "./EditableComponents.jsx/HomeFAQsEdit";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HomePageTopbarEdit from "./EditableComponents.jsx/HomePageTopbarEdit";
import FooterEdit from "./EditableComponents.jsx/FooterEdit";


const AdminMainBody = ({ showPage }) => {

    const { pathname } = useLocation();
    const [show, setShow] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setShow(true)
    }, [])

    const targetPage = () => {

        switch (showPage) {
            case "Services":
                return <HomeServicesEdit />;
            case "Subscribers":
                return <HomeSubCount />;
            case "FAQs":
                return <HomeFAQsEdit />;
            case "Topbar":
                return <HomePageTopbarEdit />;
            case "Footer":
                return <FooterEdit />;
            default:
                return <HomePageEdit />
        }
    }

    return (
        <div className="w-full max-h-[80vh] overflow-y-scroll">
            {targetPage()}
        </div>
    );
};

export default AdminMainBody;
