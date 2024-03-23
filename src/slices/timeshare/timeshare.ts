import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../configStore";
interface State {
  date_start: Date;
  date_end: Date;
  price: number;
  status: boolean;
  name: string;
  owner: string;
  destination_id: string;
  description: string;
  image_url: string;
  city: string;
  exchange: boolean;
}

const initialState: State = {
  date_start: new Date(),
  date_end: new Date(),
  price: 0,
  status: false,
  name: "",
  owner: "",
  destination_id: "",
  description: "",
  image_url: "",
  city: "",
  exchange: false,
};

const timeshareSlice = createSlice({
  name: "timeshare",
  initialState,
  reducers: {},
});

const getTimeshare = (state: RootState) => {
  return state.timeshare;
};

export const userActions = { getTimeshare };
export default timeshareSlice.reducer;
