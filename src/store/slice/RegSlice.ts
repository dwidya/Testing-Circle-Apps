import { createSlice } from '@reduxjs/toolkit';
import { REGauth } from '../types/AuthInterface';


const initialRegisterSlice : { data: REGauth } = {
    
    data: {
        full_name: "",
        username: "",
        email: "",
        password: "",
    }
}

export const registerSlice = createSlice({
    name: 'register',
    initialState: initialRegisterSlice,
    reducers: {
        REG_LOGIN: (state, action) => {
            state.data = action.payload
        }
    }
})
