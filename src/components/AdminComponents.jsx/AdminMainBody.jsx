import { FaHome, FaRegSquare, FaPaintBrush, FaBox, FaImage, FaUsers } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import HomePageEdit from "./EditableComponents.jsx/HomePageEdit";


const AdminMainBody = () => {
    const cards = [
        { icon: <FaHome />, title: "Homepage Editor" },
        { icon: <FaRegSquare />, title: "Banners Edit" },
        { icon: <FaPaintBrush />, title: "Popular Palns Edit" },
        { icon: <FaBox />, title: "Services Edit" },
        { icon: <FaImage />, title: "Subscribers Count Edit" },
        { icon: <FaUsers />, title: "FAQs Edit" },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-h-[80vh] overflow-y-scroll">
            <HomePageEdit/>
        </div>
    );
};

export default AdminMainBody;
