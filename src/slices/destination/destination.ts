// import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import { RootState } from "../../configStore";
// interface State {
//   address: string;
//   branch: string;
//   city: string;
//   country: string;
//   description: string;
//   desName: string;
//   isNext: boolean;
// }

// const initialState: State = {
//   address: "",
//   branch: "",
//   city: "",
//   country: "",
//   description: "",
//   desName: "",
//   isNext: false,
// };

// const destinationSlice = createSlice({
//   name: "destination",
//   initialState,
//   reducers: {
//     setState: (state, action: PayloadAction<any>) => {
//       state.desName = action.payload.desName;
//       state.address = action.payload.address;
//       state.branch = action.payload.branch;
//       state.city = action.payload.city;
//       state.country = action.payload.country;
//       state.description = action.payload.description;
//       state.isNext = action.payload.isNext;
//     },
//     resetState() {
//       return initialState;
//     },
//   },
// });

// const getDestination = (state: RootState) => {
//   return state.timeshare;
// };

// export const timeshareSelector = {
//   getDestination,
// };

// export const destinationActions = { ...destinationSlice.actions };
// export default destinationSlice.reducer;
