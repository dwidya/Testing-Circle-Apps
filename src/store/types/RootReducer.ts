import { authSlice } from "../slice/AuthSlice"; 
import { combineReducers } from "@reduxjs/toolkit";
import { registerSlice } from "../slice/RegSlice";
import { usersSlice } from "../slice/UserSlice";



export const  {REG_LOGIN} = registerSlice.actions
export const { AUTH_LOGIN } = authSlice.actions;
export const { GET_USERS } = usersSlice.actions





export const authReducer = authSlice.reducer
export const registerReducer = registerSlice.reducer
export const userReducer = usersSlice.reducer





export const RootReducer = combineReducers (
    {
        auth : authReducer,
        register : registerReducer,
        user : userReducer

    }
)