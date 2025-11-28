import { createSlice } from "@reduxjs/toolkit";

const adminHomeSlice = createSlice({
    name: "adminHome",
    initialState: {
        adminHomePage: null,
        adminHomeTopbarData: null,
        adminHomeFooter: null,
    },
    reducers: {
        addAdminHomeData: (state, action) => {
            state.adminHomePage = action.payload;
        },
        adminHomeTopbarData: (state, action) => {
            state.adminHomeTopbarData = action.payload;
        },
        adminHomeFooter: (state, action) => {
            state.adminHomeFooter = action.payload
        },
    }
})

export const { addAdminHomeData, adminHomeTopbarData, adminHomeFooter } = adminHomeSlice.actions;

export default adminHomeSlice.reducer;