import axios from "axios";
import React, { useState } from "react";
import { CgLogIn } from "react-icons/cg";
import { IoIosEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { RiAdminLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAdmin } from "../../Redux/adminSlice";
import Swal from "sweetalert2";
import { BASE_URL } from "../../constants";

const NewAdminForm = () => {

    const [adminName, setAdminName] = useState()
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [showPassword, setShowPassword] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {

        try {
            const res = await axios.post(BASE_URL + "/signup/admin", {
                adminName,
                email,
                password
            }, { withCredentials: true });
            dispatch(addAdmin(res?.data));
            Swal.fire({
                title: "Admin created successfully.",
                // text: "You clicked the button!",
                icon: "success"
            });
            navigate("/admin/dashboard");
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: (error?.response?.data),
                // footer: '<a href="#">Why do I have this issue?</a>'
            });
            console.log(error)
        }
    }

    return (

        <div
            className="w-screen h-screen flex items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage: "url('https://res.cloudinary.com/dssabhgtb/image/upload/v1764321303/Gemini_Generated_Image_2rozm12rozm12roz_lwvyxx.png')",
            }}
        >

            <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl p-10 w-full max-w-md flex flex-col items-center gap-6">
                <div className="flex items-center gap-3 mb-4">
                    <RiAdminLine className="text-4xl text-gray-500" />
                    <h1 className="text-3xl font-bold text-gray-800">
                        <span className="text-red-600">Admin</span> Login
                    </h1>
                </div>

                <form
                    className="w-full flex flex-col gap-5"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="flex flex-col gap-1">
                        <label className="text-gray-700 font-semibold">Admin Name</label>
                        <input
                            type="email"
                            placeholder="Admin name.."
                            className="py-3 px-4 border border-gray-400 focus:border-none rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                            value={adminName}
                            onChange={(e) => setAdminName(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-gray-700 font-semibold">Email Address</label>
                        <input
                            type="email"
                            placeholder="example@gmail.com"
                            className="py-3 px-4 border border-gray-400 focus:border-none rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col gap-1 relative">
                        <label className="text-gray-700 font-semibold">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="********"
                            className="py-3 px-4 border border-gray-400 focus:border-none rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                        />
                        <div className="absolute right-5 bottom-3.5 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <IoIosEyeOff className="text-[22px] text-gray-800" /> : <IoEye className=" text-[22px] text-gray-800" />}
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={() => {
                            handleLogin()
                        }}
                        className="mt-2 flex items-center justify-center gap-2 bg-gray-600 hover:bg-gray-500 text-white font-bold py-3 rounded-xl transition duration-200 w-full cursor-pointer"
                    >
                        Create <CgLogIn className="text-xl" />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default NewAdminForm;