import { createSlice } from "@reduxjs/toolkit";

const scrollSlice = createSlice({
    name: "scroll",
    initialState: false,
    reducers: {
        addScroll: (state, action) => {
            return action.payload
        }
    }
})

export const { addScroll } = scrollSlice.actions;

export default scrollSlice.reducer;