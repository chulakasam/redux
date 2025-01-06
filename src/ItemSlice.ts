import {createSlice} from "@reduxjs/toolkit";

const initialState = [];
    const ItemrSlice = createSlice({

        name: 'item',
        initialState: initialState,
        reducers:
            {
                addItem: (state, action) => {
                    state.push(action.payload);
                },
                deleteSingleItem: (state, action) => {
                    return state.filter((item) => item.itemname !== action.payload);
                }
        },
    });
export const {addItem,deleteSingleItem} = ItemrSlice.actions;
export default ItemrSlice.reducer;