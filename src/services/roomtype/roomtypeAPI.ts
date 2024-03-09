import { RoomTypeResponse } from "../../interfaces/roomtype/roomTypeResponse";
import axiosClient from "../axiosClient";

const roomTypeAPI = {
  getRoomTypeByTimeshareID: (timeshareID: string) => {
    return axiosClient.get<RoomTypeResponse>(`roomtype/details/${timeshareID}`);
  },
};

export default roomTypeAPI;
