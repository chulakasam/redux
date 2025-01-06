import {configureStore} from "@reduxjs/toolkit";
import CustomerSlice from "../CustomerSlice.ts";


export const store = configureStore(
    {
        reducer: {
            customer:CustomerSlice
        }
    }
)