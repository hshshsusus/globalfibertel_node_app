import React, { useState } from "react";
import { CgLogIn } from "react-icons/cg";
import { RiAdminLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { addAdmin } from "../../Redux/adminSlice";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {

    const [email, setEmail] = useState("durgaprasadkasa81@gmail.com");
    const [password, setPassword] = useState("Naveen@123");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {

        try {
            const res = await axios.post(BASE_URL + "/login/admin", {
                email,
                password
            }, { withCredentials: true });
            dispatch(addAdmin(res.data));
            navigate("/admin/dashboard");
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="w-[100vw] h-[100vh] flex items-center justify-center">
                <div className="w-[50gap-1.5 it%] flex flex-col gap-4 items-center justify-center mx-[10%] px-[10px] py-[20px] my-[35px] log w-[400px]">
                    <div className="flex ems-center justify-center">
                        <p className="text-[30px] text-orange-500 font-bold"><span className="text-[30px] text-green-600 font-bold">Admin</span> login</p>
                        <RiAdminLine className="text-[30px] text-orange-500 font-bold" />
                    </div>
                    <form action="" className="w-[100%] flex flex-col items-center justify-center gap-5" onSubmit={(e) => e.preventDefault()}>
                        <div className="flex flex-col gap-1.5 w-[70%]">
                            <label htmlFor="" className="text-gray-700 font-semibold">Email address</label>
                            <input type="email" placeholder="example@gmail.com..." className="py-[10px] px-[20px] login border border-gray-300 rounded-md" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="flex flex-col gap-1.5 w-[70%]">
                            <label htmlFor="" className="text-gray-700 font-semibold">Password</label>
                            <input type="password" placeholder="password..." className="py-[10px] px-[20px] login border border-gray-300 rounded-md" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <p className="text-end text-[14px] text-gray-500 hover:text-blue-600 hover:underline cursor-pointer font-bold transition delay-150 duration-300 ease-in-out">forgot password?</p>
                        <div onClick={handleLogin} className="transition delay-150 duration-300 ease-in-out flex gap-1.5 items-center cursor-pointer hover:bg-red-400 justify-center bg-red-600 text-white font-bold w-fit py-[10px] px-[35px] rounded-2xl">
                            <button className="cursor-pointer">Login</button>
                            <CgLogIn className="text-[22px]" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default AdminLogin;