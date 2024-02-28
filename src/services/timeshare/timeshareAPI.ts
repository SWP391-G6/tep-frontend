import { TimeshareResponse } from "../../interfaces/timeshare/timeshareResponse";
import axiosClient from "../axiosClient";

const timeshareAPI = {
  getAllTimeshare: () => {
    return axiosClient.get<TimeshareResponse[]>("timeshare/showall");
  },

  getTimeshareByID: (timeshareID: string) => {
    return axiosClient.get(`timeshare/details/${timeshareID}`);
  },
};

export default timeshareAPI;
