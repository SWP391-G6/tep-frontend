import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../configStore";

interface State {
  name: string;
  sleeps: number;
  room_view: string;
  bed: number;
  bath: number;
  kitchen: string;
  entertainment: string;
  features: string;
  policies: string;
}

const initialState: State = {
  name: "",
  sleeps: 0,
  room_view: "",
  bed: 0,
  bath: 0,
  kitchen: "",
  entertainment: "",
  features: "",
  policies: "",
};

const roomTypeSlice = createSlice({
  name: "roomType",
  initialState,
  reducers: {},
});

const getRoomType = (state: RootState) => {
  return state.timeshare;
};

export const userActions = { getRoomType };
export default roomTypeSlice.reducer;
