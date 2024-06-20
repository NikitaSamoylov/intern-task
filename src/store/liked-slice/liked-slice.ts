import { createSlice } from "@reduxjs/toolkit";

const initialState: string[] = [];

export const likedUsers = createSlice({
  name: 'likedUsers',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload)
    },
    removeItem: (state, action) => {
      return state.filter(item => item !== action.payload)
    },
  },
});

export const { addItem, removeItem } = likedUsers.actions;