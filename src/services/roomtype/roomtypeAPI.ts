import { CreateRoomTypeRequest } from "../../interfaces/roomtype/createRoomTypeRequest";
import { RoomTypeResponse } from "../../interfaces/roomtype/roomTypeResponse";
import axiosClient from "../axiosClient";

const roomTypeAPI = {
  getRoomTypeByTimeshareID: (timeshareID: string) => {
    return axiosClient.get<RoomTypeResponse>(`roomtype/details/${timeshareID}`);
  },

  createRoomType: (param: CreateRoomTypeRequest) => {
    return axiosClient.post("roomtype/createRoomtype", param);
  },
};

export default roomTypeAPI;
