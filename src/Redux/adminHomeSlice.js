import { createSlice } from "@reduxjs/toolkit";

const adminHomeSlice = createSlice({
    name:"adminHome",
    initialState:{
        adminHomePage:null,
    },
    reducers:{
        addAdminHomeData:(state, action) =>{
            state.adminHomePage = action.payload;
        }
    }
})

export const {addAdminHomeData} = adminHomeSlice.actions;

export default adminHomeSlice.reducer;