import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '0', name: 'Atul Tingre'},
    {id: '1', name: 'Avinash Tingre'},
    {id: '2', name: 'Abdul Gani'},
]

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
