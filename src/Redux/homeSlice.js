import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
    name: "home",
    initialState: null,
    reducers: {
        AddHome: (state, action) => {
            return action.payload
        }
    }
})

export const { AddHome } = homeSlice.actions;

export default homeSlice.reducer;