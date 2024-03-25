import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../configStore";
import type { PayloadAction } from "@reduxjs/toolkit";
interface State {
  date_start: Date;
  date_end: Date;
  price: number;
  status: boolean;
  name: string;
  owner: string;
  description: string;
  image_url: string;
  city: string;
  exchange: boolean;
  isNext: boolean;
}

const initialState: State = {
  name: "",
  date_start: new Date(),
  date_end: new Date(),
  price: 0,
  status: false,
  owner: "",
  description: "",
  image_url: "",
  city: "",
  exchange: false,
  isNext: false,
};

const timeshareSlice = createSlice({
  name: "timeshare",
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<any>) => {
      state.name = action.payload.name;
      state.date_start = action.payload.date_start;
      state.date_end = action.payload.date_end;
      state.price = action.payload.price;
      state.status = action.payload.status;
      state.description = action.payload.description;
      state.image_url = action.payload.image_url;
      state.city = action.payload.city;
      state.exchange = action.payload.exchange;
      state.isNext = action.payload.isNext;
    },
    resetState() {
      return initialState;
    },
  },
});

const getTimeshare = (state: RootState) => {
  return state.timeshare;
};
export const timeshareSelector = {
  getTimeshare,
};

export const timeshareActions = {
  ...timeshareSlice.actions,
};
export default timeshareSlice.reducer;
