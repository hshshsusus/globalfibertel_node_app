import React, { useState } from "react";
import { RiAdminLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { addAdmin } from "../../Redux/adminSlice";
import { useNavigate } from "react-router-dom";
import { CgLogIn } from "react-icons/cg";
import { IoEye } from "react-icons/io5";
import { IoIosEyeOff } from "react-icons/io";
import Swal from "sweetalert2";


const AdminLogin = () => {

    const [email, setEmail] = useState("durgaprasadkasa@gmail.com");
    const [password, setPassword] = useState("Naveen@123");
    const [showPassword, setShowPassword] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {

        try {
            const res = await axios.post(BASE_URL + "/login/admin", {
                email,
                password
            }, { withCredentials: true });
            dispatch(addAdmin(res?.data));
            Swal.fire({
                title: "Login successful",
                // text: "You clicked the button!",
                icon: "success"
            });
            navigate("/admin/dashboard");
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: (error.response.data),
                // footer: '<a href="#">Why do I have this issue?</a>'
            });
            console.log(error)
        }
    }

    return (
        <>
            <div
                className="w-screen h-screen flex items-center justify-center bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://res.cloudinary.com/dssabhgtb/image/upload/v1764321303/Gemini_Generated_Image_2rozm12rozm12roz_lwvyxx.png')",
                }}
            >
                <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl p-10 w-full max-w-md flex flex-col items-center gap-6">
                    <div className="flex items-center gap-3 mb-4">
                        <RiAdminLine className="text-4xl text-orange-500" />
                        <h1 className="text-3xl font-bold text-gray-800">
                            <span className="text-green-600">Admin</span> Login
                        </h1>
                    </div>

                    <form
                        className="w-full flex flex-col gap-5"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="flex flex-col gap-1">
                            <label className="text-gray-700 font-semibold">Email Address</label>
                            <input
                                type="email"
                                placeholder="example@gmail.com"
                                className="py-3 px-4 border border-gray-400 focus:border-none rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col gap-1 relative">
                            <label className="text-gray-700 font-semibold">Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="********"
                                className="py-3 px-4 border border-gray-400 focus:border-none rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                            />
                            <div className="absolute right-5 bottom-3.5 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <IoIosEyeOff className="text-[22px] text-gray-800" /> : <IoEye className=" text-[22px] text-gray-800" />}
                            </div>
                        </div>

                        <p className="text-right text-sm text-gray-500 hover:text-blue-600 hover:underline cursor-pointer transition duration-200">
                            Forgot password?
                        </p>

                        <button
                            type="button"
                            onClick={() => {
                                handleLogin()
                            }}
                            className="mt-2 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold py-3 rounded-xl transition duration-200 w-full cursor-pointer"
                        >
                            Login <CgLogIn className="text-xl" />
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default AdminLogin;