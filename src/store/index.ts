import { configureStore } from "@reduxjs/toolkit";
import { teamList } from "./team-slice/team-slice";

export const store = configureStore({
  reducer: {
    team: teamList.reducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;