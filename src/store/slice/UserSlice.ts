import { createSlice } from "@reduxjs/toolkit";
import { IUsers } from "../types/UserInterface";

const data: IUsers[] = []
const initialUserSlice = {
    data
}

export const usersSlice = createSlice({
    name: 'users',
    initialState: initialUserSlice,
    reducers: {
        GET_USERS: (state, action) => {
            state.data = action.payload
        }
    }
})