import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../configStore";
interface State {
  name: string;
  age: number;
}

const initialState: State = {
  name: "Tu Minh Duy",
  age: 12,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

const getUser = (state: RootState) => {
  return state.timeshare;
};

export const userActions = { getUser };
export default userSlice.reducer;
