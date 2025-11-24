import { createSlice } from "@reduxjs/toolkit";

const customerSlice = createSlice({
    name: "customer",
    initialState: {
        customerData: null,
        invoices: null,
        invoiceURL: null,
        tickets: null
    },
    reducers: {
        addCustomerData: (state, action) => {
            state.customerData = action.payload;
        },
        addCustomerInvoice: (state, action) => {
            state.invoices = action.payload;
        },
        addInvoiceURL: (state, action) => {
            state.invoiceURL = action.payload;
        },
        addCustomerTickets: (state, action) => {
            state.tickets = action.payload
        }
    }
})

export const { addCustomerData, addCustomerInvoice, addInvoiceURL, addCustomerTickets } = customerSlice.actions;

export default customerSlice.reducer;