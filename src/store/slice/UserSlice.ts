import { createSlice } from "@reduxjs/toolkit";
import { IUsers } from "../types/UserInterface";

const initialUserSlice: {data: IUsers} = {
    data: {
        username: "",
        fullName: "",
        email: "",
        photo_profile: ""
    }
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