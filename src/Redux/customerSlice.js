import { createSlice } from "@reduxjs/toolkit";

const customerSlice = createSlice({
    name: "customer",
    initialState: {
        customerData: null,
        invoices: null,
    },
    reducers: {
        addCustomerData: (state, action) => {
            state.customerData = action.payload;
        },
        addCustomerInvoice: (state, action) => {
            state.invoices = action.payload
        }
    }
})

export const { addCustomerData, addCustomerInvoice } = customerSlice.actions;

export default customerSlice.reducer;