import {configureStore} from "@reduxjs/toolkit";
import CustomerSlice from "../CustomerSlice.ts";
import ItemSlice from "../ItemSlice.ts";


export const store = configureStore(
    {
        reducer: {
            customer:CustomerSlice,
            item:ItemSlice
        }
    }
)