import { FaHome, FaRegSquare, FaPaintBrush, FaBox, FaImage, FaUsers } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import PlansEdit from "./EditableComponents.jsx/PlansEdit";

const AdminSideBar = () => {
    const location = useLocation();

    console.log("location", location.pathname === "/admin/dashboard")
    return (
        <div>
            <div className="bg-gray-700 text-white w-[200px] min-h-screen px-6 py-8 rounded-br-2xl shadow-xl">
                <h2 className="text-[22px] font-bold mb-8">Admin Dashboard</h2>

                <ul className="flex flex-col gap-6 text-[16px] font-medium">

                    <Link to={location.pathname === "/admin/dashboard" && "/admin/dashboard"}><li className="flex items-center gap-3 cursor-pointer hover:text-gray-300">
                        <FaHome /> Homepage Editor
                    </li>
                    </Link>

                    <Link to={"/admin/dashboard/plans"}><li className="flex items-center gap-3 cursor-pointer hover:text-gray-300">
                        <FaRegSquare /> Buttons Editor
                    </li>
                    </Link>

                    <li className="flex items-center gap-3 cursor-pointer hover:text-gray-300">
                        <FaPaintBrush /> Theme Settings
                    </li>
                    <li className="flex items-center gap-3 cursor-pointer hover:text-gray-300">
                        <FaBox /> Plans Manager
                    </li>
                    <li className="flex items-center gap-3 cursor-pointer hover:text-gray-300">
                        <FaImage /> Image Uploads
                    </li>
                    <li className="flex items-center gap-3 cursor-pointer hover:text-gray-300">
                        <FaUsers /> Users & Permissions
                    </li>
                </ul>
            </div>
            
        </div>
    );
};

export default AdminSideBar;
