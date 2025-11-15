import React, { useEffect, useState } from "react";
import { ImageSlider } from "./home/ImageSlider";
import { PopularPlans } from "./home/PopularPlans";
import { OurServices } from "./home/OurServices";
import { Counting } from "./home/Counting";
import { Faq } from "./home/Faq";
import axios from "axios";
import { BASE_URL } from "../constants";
import { useDispatch } from "react-redux";
import { AddHome } from "../Redux/homeSlice";

const Home = () => {

    const [rendor, setRendor] = useState(0);
    
    const dispatch = useDispatch();

    const fetchHomepageData = async () => {
        try {
            const res = await axios.get(BASE_URL + "/homepage/data/get", { withCredentials: true })
            // console.log(res.data)
            dispatch(AddHome(res.data))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchHomepageData();
        window.addEventListener("scroll", () => {
            setRendor(window.scrollY)
        });

    }, [])
    
    return (
        <div>
            <ImageSlider />
            {rendor > 100 && <PopularPlans />}
            <OurServices />
            {rendor > 900 && <Counting />}
            <Faq />
        </div>
    )
}
export default Home;