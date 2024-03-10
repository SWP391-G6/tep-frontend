import { TimeshareByOwnerResponse } from "../../interfaces/timeshare/timeshareByOwnerResponse";
import { TimeshareByUserIDResponse } from "../../interfaces/timeshare/timeshareByUserIDResponse";
import { TimeshareResponse } from "../../interfaces/timeshare/timeshareResponse";
import axiosClient from "../axiosClient";

const timeshareAPI = {
  getAllTimeshare: () => {
    return axiosClient.get<TimeshareResponse[]>("timeshare/showall");
  },

  getTimeshareDetailByTimeshareID: (timeshareID: string) => {
    return axiosClient.get(`timeshare/details/${timeshareID}`);
  },

  getTimeshareListByUserID: (owner: string) => {
    return axiosClient.get<TimeshareByUserIDResponse[]>("timeshare/getTimeshareByOwner", {
      params: { owner: owner },
    });
  },

  getTimeshareByOwnerId: (owner: string) => {
    return axiosClient.get<TimeshareByOwnerResponse>(`timeshare/getTimeshareByOwner?owner=${owner}`);
  },

};

export default timeshareAPI;
