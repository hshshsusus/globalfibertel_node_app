import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: "admin",
    initialState: {
        admin: null,
        adminProfile: null
    },
    reducers: {
        addAdmin: (state, action) => {
            state.admin = action.payload;
        },
        addAdminPro: (state, action) => {
            state.adminProfile = action.payload;
        }
    }
})

export const { addAdmin, addAdminPro } = adminSlice.actions;

export default adminSlice.reducer;