import React from "react";
import AdminSideBar from "./AdminSideBar";
import AdminMainBody from "./AdminMainBody";

const AdminDashBoard = () => {
    return (
        <div className="flex">
            <AdminSideBar />
            <div className="flex-1 px-12 py-10">
                <h1 className="text-[34px] font-bold text-red-600 mb-10">
                    Admin Dashboard
                </h1>
                <AdminMainBody />
            </div>
        </div>
    )
}

export default AdminDashBoard;