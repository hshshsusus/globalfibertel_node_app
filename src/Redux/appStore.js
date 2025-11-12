import { configureStore } from "@reduxjs/toolkit";
import scrollReducer from "./scrollSlice";
import adminReducer from "./adminSlice";
import packReducer from "./packSlice";
import userReducer from "./userslice";
import homeReducer from "./homeSlice"

const appStore = configureStore({
    reducer: {
        scroll: scrollReducer,
        admin: adminReducer,
        pack: packReducer,
        user: userReducer,
        home: homeReducer,
    }
})

export default appStore;