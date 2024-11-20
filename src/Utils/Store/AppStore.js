import { configureStore } from "@reduxjs/toolkit";
import appslice from "./AppSlice"
const appStore = configureStore({
    reducer:{
        app:appslice
    }
     
})

export default appStore