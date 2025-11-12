import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const packSlice = createSlice({
    name: "pack",
    initialState: {
        addPack: null,
        updatePack: null,
        allPacks: null,
    },
    reducers: {
        addNewPack: (state, action) => {
            state.addPack = action.payload;
        },
        updateCurrentPack: (state, action) => {
            state.updatePack = action.payload;
        },
        getAllPacks: (state, action) => {
            state.allPacks = action.payload;
        }
    }
})

export const { addNewPack, updateCurrentPack, getAllPacks } = packSlice.actions;

export default packSlice.reducer;