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
                },
                updateItem: (state, action) => {
                    const { itemname, newItemPrice, newItemQty } = action.payload;
                    const item = state.find((c) => c.itemname === itemname);
                    if (item) {
                        item.itemqty = newItemQty || item.itemqty;
                        item.itemprice = newItemPrice || item.itemprice;

                    }
                },




        },
    });
export const {addItem,deleteSingleItem,updateItem} = ItemrSlice.actions;
export default ItemrSlice.reducer;