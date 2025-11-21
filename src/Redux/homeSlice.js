import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
    name: "home",
    initialState: {
        homeData: null,
        topNavData: null,
        footerData: null
    },
    reducers: {
        AddHome: (state, action) => {
            state.homeData = action.payload;
        },
        addTopNav: (state, action) => {
            state.topNavData = action.payload;
        },
        addFooter: (state, action) => {
            state.footerData = action.payload;
        }
    }
})

export const { AddHome, addTopNav, addFooter } = homeSlice.actions;

export default homeSlice.reducer;