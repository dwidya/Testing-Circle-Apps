import { createSlice } from '@reduxjs/toolkit';
import { IThreads, IThreadsPost } from '../types/ThreadInterface';

const data : IThreads[] = []
const initialThreadSlice = {
    data
}

const initialPostThreadSlice: IThreadsPost = {
  content: '',
  image: null,
};

const initialDetailSlice: { data: IThreads } = {
  data: {
    id: 0,
    content: '',
    createdAt: '',
    image: '',
    number_of_replies: 0,
    number_of_likes: 0,
    user: {
      full_name: '',
      username: '', 
      email: '',
      photo_profile: ''
      
    }
  },
};

export const threadPostSlice = createSlice({
  name: 'threads',
  initialState: initialPostThreadSlice,
  reducers: {
    POST_THREAD: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const threadDetailSlice = createSlice({
  name: 'threads',
  initialState: initialDetailSlice,
  reducers: {
    GET_DETAIL: (state, action) => {
      state.data = action.payload
    },
  },
});

export const threadSlice = createSlice({
  name: 'threads',
  initialState: initialThreadSlice,
  reducers: {
    GET_THREAD: (state, action) => {
      state.data = action.payload.data
  },
}})