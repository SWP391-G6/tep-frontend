import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../configStore";

interface State {
  address: string;
  branch: string;
  city: string;
  country: string;
  description: string;
  desName: string;
}

const initialState: State = {
  address: "",
  branch: "",
  city: "",
  country: "",
  description: "",
  desName: "",
};

const destinationSlice = createSlice({
  name: "destination",
  initialState,
  reducers: {},
});

const getDestination = (state: RootState) => {
    return state.timeshare;
  };

export const userActions = {getDestination};
export default destinationSlice.reducer;
