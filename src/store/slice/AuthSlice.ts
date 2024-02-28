import {  createSlice } from '@reduxjs/toolkit';
import { REauth } from '../types/AuthInterface';



const initialLoginSlice: { data: REauth } = {
  data: {
    id: 0,
    username: '',
    fullName: '',
    email: '',
  },
};

export const authSlice = createSlice({
  name: 'login',
  initialState: initialLoginSlice,
  reducers: {
    AUTH_LOGIN: (state, action) => {
        return { ...state, ...action.payload };
    },
  },
});



