import {
  createSlice,
} from "@reduxjs/toolkit";
import { TUserStore } from "../../types/user";

const initialState: TUserStore = {
  user: {
    firstName: '',
    email: '',
    password: ''
  },
  token: '',
};

export const appUsers = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addNewUser: (state, action) => {
      return action.payload;
    },
  },
});

export const { addNewUser } = appUsers.actions;