import { configureStore } from "@reduxjs/toolkit";
import reducer1 from "./Slice";

export const store=configureStore({
    reducer:{
        shopp:reducer1,
    }
})
