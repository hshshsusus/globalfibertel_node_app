import { configureStore } from "@reduxjs/toolkit";
import scrollReducer from "./scrollSlice";
import adminReducer from "./adminSlice";
import packReducer from "./packSlice";
import userReducer from "./userslice";
import homeReducer from "./homeSlice";
import customerReducer from "./customerSlice";

const appStore = configureStore({
    reducer: {
        scroll: scrollReducer,
        admin: adminReducer,
        pack: packReducer,
        user: userReducer,
        home: homeReducer,
        customer: customerReducer,
    }
})

export default appStore;