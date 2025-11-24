import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../../constants";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCustomerTickets } from "../../Redux/customerSlice";
import Tickets from "./Tickets";

const CustomerTicket = () => {

    const { acc_id } = useParams();

    const data = useSelector(store => store.customer.tickets)
    const tickets = data?.tickets;

    const dispatch = useDispatch();

    const fetchAllTickets = async () => {
        try {
            const res = await axios.post(BASE_URL + "/api/customer/tecket/get/" + acc_id, {}, { withCredentials: true })
            dispatch(addCustomerTickets(res?.data))

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchAllTickets();
    }, [])

    return (
        <div>
            <Tickets data={tickets} />
        </div>
    )
}

export default CustomerTicket;