import { RoomTypeResponse } from "../../interfaces/roomtype/roomTypeResponse";
import axiosClient from "../axiosClient";

const roomTypeAPI = {
  getRoomTypeByTimeshareID: (roomTypeID: string) => {
    return axiosClient.get<RoomTypeResponse>(`roomtype/details/${roomTypeID}`);
  },
};

export default roomTypeAPI;
