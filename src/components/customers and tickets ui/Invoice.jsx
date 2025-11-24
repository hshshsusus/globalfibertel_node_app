import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { addInvoiceURL } from "../../Redux/customerSlice";

const Invoice = () => {

    const { api_inv_id, customer_id, order_id } = useParams();
    const dispatch = useDispatch();
    const fileUrl = useSelector(store => store?.customer?.invoiceURL)

    const fetchInvoice = async () => {
        try {
            const res = await axios.post(BASE_URL + `/api/customer/invoice/download/${customer_id}/${order_id}/${api_inv_id}`, {}, { withCredentials: true })

            dispatch(addInvoiceURL(res?.data?.fileUrl))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
       !fileUrl && fetchInvoice();
    }, [fileUrl])

    return (
        <div>
            {fileUrl && (
                <div className="flex flex-col items-center justify-center pdfbox">
                    <h2 className="text-[28px] font-bold my-5">Invoice Preview</h2>
                    <iframe
                        src={fileUrl}
                        width="80%"
                        height="650px"
                        title="Invoice PDF"
                        className="frame"
                    ></iframe>
                </div>
            )}
        </div>

    )
}

export default Invoice;