import { configureStore } from "@reduxjs/toolkit";
import { teamList } from "./team-slice/team-slice";
import { likedUsers } from "./liked-slice/liked-slice";

export const store = configureStore({
  reducer: {
    team: teamList.reducer,
    likedUsers: likedUsers.reducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;