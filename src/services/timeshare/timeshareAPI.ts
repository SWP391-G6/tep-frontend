import { TimeshareByOwnerResponse } from "../../interfaces/timeshare/timeshareByOwnerResponse";
import { TimeshareResponse } from "../../interfaces/timeshare/timeshareResponse";
import axiosClient from "../axiosClient";

const timeshareAPI = {
  getAllTimeshare: () => {
    return axiosClient.get<TimeshareResponse[]>("timeshare/showall");
  },

  getTimeshareByID: (timeshareID: string) => {
    return axiosClient.get(`timeshare/details/${timeshareID}`);
  },

  getTimeshareByUserID: (owner: string) => {
    return axiosClient.get<TimeshareResponse[]>("timeshare/getTimeshareByOwner", {
      params: { owner: owner },
    });
  },
  getTimeshareById: (timeshareId: string) => {
    return axiosClient.get<TimeshareResponse>(`timeshare/details/${timeshareId}`);
  },

  getTimeshareByOwnerId: (owner: string) => {
    return axiosClient.get<TimeshareByOwnerResponse>(`timeshare/getTimeshareByOwner?owner=${owner}`);
  },

};

export default timeshareAPI;
