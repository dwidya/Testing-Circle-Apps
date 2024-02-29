import { authSlice } from "../slice/AuthSlice"; 
import { combineReducers } from "@reduxjs/toolkit";
import { registerSlice } from "../slice/RegSlice";
import { usersSlice } from "../slice/UserSlice";
import { threadDetailSlice, threadPostSlice, threadSlice } from "../slice/ThreadSlice"; 


/// AUTH
export const  {REG_LOGIN} = registerSlice.actions
export const { AUTH_LOGIN } = authSlice.actions;


/// USER
export const { GET_USERS } = usersSlice.actions

/// THREAD
export const { GET_THREAD } = threadSlice.actions
export const { POST_THREAD } = threadPostSlice.actions
export const { GET_DETAIL } = threadDetailSlice.actions





/// AUTH 
export const authReducer = authSlice.reducer
export const registerReducer = registerSlice.reducer

/// USER
export const userReducer = usersSlice.reducer



/// THREAD
export const threadReducer = threadSlice.reducer
export const threadPostReducer = threadPostSlice.reducer
export const threadDetailReducer = threadDetailSlice.reducer





export const RootReducer = combineReducers (
    {

        //THREAD
        threads : threadReducer,
        threadPost : threadPostReducer,
        threadDetail : threadDetailReducer,

        //AUTH
        auth : authReducer,
        register : registerReducer,

        ///USER
        user : userReducer

    }
)