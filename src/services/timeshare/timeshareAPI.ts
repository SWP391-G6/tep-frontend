import { CreateTimeshareRequest } from "../../interfaces/timeshare/createTimeshareRequest";
import { TimeshareByOwnerResponse } from "../../interfaces/timeshare/timeshareByOwnerResponse";
import { TimeshareByUserIDResponse } from "../../interfaces/timeshare/timeshareByUserIDResponse";
import { AllTimeshare } from "../../interfaces/timeshare/timeshareResponse";
import axiosClient from "../axiosClient";

const timeshareAPI = {
  getAllTimeshare: () => {
    return axiosClient.get<AllTimeshare[]>("timeshare/showall");
  },

  getTimeshareDetailByTimeshareID: (timeshareID: string) => {
    return axiosClient.get(`timeshare/details/${timeshareID}`);
  },

  getTimeshareListByUserID: (owner: string) => {
    return axiosClient.get<TimeshareByUserIDResponse[]>(
      "timeshare/getTimeshareByOwner",
      {
        params: { owner: owner },
      }
    );
  },

  getTimeshareByOwnerId: (owner: string) => {
    return axiosClient.get<TimeshareByOwnerResponse>(
      `timeshare/getTimeshareByOwner?owner=${owner}`
    );
  },

  createTimeshare: (param: CreateTimeshareRequest) => {
    return axiosClient.post("timeshare/createTimeshare", param);
  },

  getInActiveTimeshareList: () => {
    return axiosClient.get("timeshare/showAllTimeshareInactive");
  },
};

export default timeshareAPI;
