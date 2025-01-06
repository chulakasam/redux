import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const CustomerSlice = createSlice({
    name: 'customer',
    initialState: initialState,
    reducers: {
        addCustomer: (state, action) => {
            state.push(action.payload);
        },

        deleteCustomer: (state, action) => {
            return state.filter((customer) => customer.email !== action.payload);
        },

        updateCustomer: (state, action) => {
            const { email, newName, newPhone } = action.payload;
            const customer = state.find((c) => c.email === email);
            if (customer) {
                customer.firstname = newName || customer.firstname;
                customer.phone = newPhone || customer.phone;
            }
        },
    },
});

export const { addCustomer, deleteCustomer, updateCustomer } = CustomerSlice.actions;
export default CustomerSlice.reducer;
