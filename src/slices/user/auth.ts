import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../configStore";
import type { PayloadAction } from "@reduxjs/toolkit";

interface State {
    token: string;
    user_id: string;
    role: string;
}

const initialState: State = {
  token: "",
  user_id: "",
  role: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<any>) => {
        state.user_id = action.payload.user_id;
        state.token = action.payload.token;
        state.role = action.payload.role
    },
    resetState() {
      return initialState;
    },
  },
});

const getUser = (state: RootState) => {
  return state.auth;
};
export const authSelector = {
    getUser,
};

export const authActions = {
  ...authSlice.actions,
};
export default authSlice.reducer;
