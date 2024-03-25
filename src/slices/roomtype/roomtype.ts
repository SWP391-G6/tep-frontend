import { PayloadAction, createSlice } from "@reduxjs/toolkit";
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
  isNext: boolean;
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
  isNext: false,
};

const roomTypeSlice = createSlice({
  name: "roomType",
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<any>) => {
      state.name = action.payload.name;
      state.sleeps = action.payload.sleeps;
      state.room_view = action.payload.room_view;
      state.bed = action.payload.bed;
      state.bath = action.payload.bath;
      state.kitchen = action.payload.kitchen;
      state.entertainment = action.payload.entertainment;
      state.features = action.payload.features;
      state.policies = action.payload.policies;
      state.isNext = action.payload.isNext;
    },
    resetState() {
      return initialState;
    },
  },
});

const getRoomType = (state: RootState) => {
  return state.timeshare;
};

export const timeshareSelector = {
  getRoomType,
};

export const roomTypeActions = { ...roomTypeSlice.actions };
export default roomTypeSlice.reducer;
