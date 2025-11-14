import axios from "axios";
import React, { useState } from "react";
import { TbPackageImport } from "react-icons/tb";
import { BASE_URL } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { addNewPack } from "../Redux/packSlice";
import Loader from "./Loader";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePack = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const allPack = useSelector(store => store.pack.allPacks);

    const updatablePack = allPack?.filter(each => each._id === id);

    const [upload, setUpload] = useState(updatablePack?.[0] && updatablePack?.[0]?.upload);
    const [download, setDownload] = useState(updatablePack?.[0] && updatablePack?.[0]?.download);
    const [validity, setValidity] = useState(updatablePack?.[0] && updatablePack?.[0]?.validity);
    const [price, setPrice] = useState(updatablePack?.[0] && updatablePack?.[0]?.price);

    const [load, setLoad] = useState(false);

    const dispatch = useDispatch();

    const handleUpdatePack = async () => {
        setLoad(true);
        try {
            const res = await axios.patch(BASE_URL + "/packages/update/" + id, {
                upload,
                download,
                validity,
                price
            }, { withCredentials: true });

            dispatch(addNewPack(res.data));

            setUpload("");
            setDownload("");
            setValidity("");
            setPrice("");

            navigate("/plans");

        } catch (error) {
            console.log(error.message)
        }
    }

    if (!allPack) return;


    return (
        <>
            <div className="flex gap-1.5 items-center justify-center border-t border-gray-300 py-5">
                <p className="text-[30px] text-orange-500 font-bold"><span className="text-[30px] text-green-600 font-bold">New</span> Package</p>
                <TbPackageImport className="text-[30px] text-orange-500 font-bold" />
            </div>
            <form class="max-w-sm mx-auto mt-[25px] add py-10 px-6 rounded-md" onSubmit={(e) => e.preventDefault()}>
                <div class="mb-5">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload speed</label>
                    <input type="text" class="shadow-xs bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-md focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-red-600 dark:border-red-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-600 dark:focus:border-red-600 dark:shadow-xs-light input" value={upload} onChange={(e) => setUpload(e.target.value)} />
                </div>
                <div class="mb-5">
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Download speed</label>
                    <input type="text" class="shadow-xs bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-md focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-red-600 dark:border-red-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-600 dark:focus:border-red-600 dark:shadow-xs-light input" value={download} onChange={(e) => setDownload(e.target.value)} />
                </div>
                <div class="mb-5">
                    <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Validity</label>
                    <input type="text" class="shadow-xs bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-md focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-red-600 dark:border-red-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-600 dark:focus:border-red-600 dark:shadow-xs-light input" value={validity} onChange={(e) => setValidity(e.target.value)} />
                </div>
                <div class="mb-5">
                    <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                    <input type="number" class="shadow-xs bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-md focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-red-600 dark:border-red-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-600 dark:focus:border-red-600 dark:shadow-xs-light input num" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <button type="submit" class="text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-blue-300 font-medium rounded-tl-[10px] rounded-br-[10px] text-sm px-5 py-2.5 text-center cursor-pointer" onClick={handleUpdatePack}>{load ? <Loader /> : "Upadate Pack"}</button>
            </form>
        </>
    )
}
export default UpdatePack;