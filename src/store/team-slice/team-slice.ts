import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  AnyAction,
} from "@reduxjs/toolkit";
import { TTeamStore, TServerTeam } from "../../types/team";

const initialState: TTeamStore = {
  team: [],
  error: null,
  loading: false,
};

export const fetchTeam = createAsyncThunk<TServerTeam[], number, { rejectValue: string }>(
  'team/addTeam',
  async function (page, { rejectWithValue, dispatch }) {

    const resp = await fetch(`https://dummyapi.io/data/v1/user?page=${ page }&limit=8`, {
      headers: {
        'app-id': '667314da539f807d1f8969bb'
      }
    });

    if (!resp.ok) {
      return rejectWithValue('ошибка добавления пользователя')
    };

    const data = await resp.json();
    return data.data as TServerTeam[];
  }
);

export const teamList = createSlice({
  name: 'users',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeam.pending, (state, action) => {
        state.loading = true;
        state.error = null;
        state.team = state.team.length !== 0 ? state.team : [];
      })
      .addCase(fetchTeam.fulfilled, (state, action) => {
        state.loading = false;
        state.team = [...state.team, ...action.payload]
        state.error = null;
      })
      .addMatcher(isErrror, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      })
  },
});


function isErrror(action: AnyAction) {
  return action.type.endsWith('rejected');
};