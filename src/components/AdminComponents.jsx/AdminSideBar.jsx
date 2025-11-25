import { FaHome, FaRegSquare, FaPaintBrush, FaBox, FaImage, FaUsers } from "react-icons/fa";

const AdminSideBar = () => {
    return (
        <div className="bg-red-400 text-white w-[200px] min-h-screen px-6 py-8 rounded-r-2xl shadow-xl">
            <h2 className="text-[22px] font-bold mb-8">Admin Dashboard</h2>

            <ul className="flex flex-col gap-6 text-[16px] font-medium">
                <li className="flex items-center gap-3 cursor-pointer hover:text-gray-300">
                    <FaHome /> Homepage Editor
                </li>
                <li className="flex items-center gap-3 cursor-pointer hover:text-gray-300">
                    <FaRegSquare /> Buttons Editor
                </li>
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
    );
};

export default AdminSideBar;
