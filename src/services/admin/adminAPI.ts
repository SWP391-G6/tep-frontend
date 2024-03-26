import axiosClient from "../axiosClient";

const adminAPI = {
  getTotalPriceOnMonth: () => {
    return axiosClient.get(`booking/total-booking-timeshare`);
  },

  getTotalTransactionOnMonth: () => {
    return axiosClient.get("sevicePack/total-transaction-service");
  },

  getCreatedTimeshareOnMonth: () => {
    return axiosClient.get("timeshare/last30days");
  },

  getCreatedAccountOnMonth: () => {
    return axiosClient.get("user/last30days");
  },
};

export default adminAPI;
