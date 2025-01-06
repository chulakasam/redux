import {createSlice} from "@reduxjs/toolkit";

const initialState = [];
    const ItemrSlice = createSlice({

        name: 'item',
        initialState: initialState,
        reducers:
            {
                addItem: (state, action) => {
                state.push(action.payload);
            }
        },
    });
export const {addItem} = ItemrSlice.actions;
export default ItemrSlice.reducer;