import { ViewAllAccountResponse } from "../../interfaces/user/viewAllAccountResponse";
import axiosClient from "../axiosClient";

const userAPI = {
  getUserByID: (userID: string) => {
    return axiosClient.get(`user/details/${userID}`);
  },
  getAllUser: () => {
    return axiosClient.get<ViewAllAccountResponse[]>("user/view-all-account");
  },

  getInActiveUser: () => {
    return axiosClient.get("user/showAllUserBanned");
  },
};

export default userAPI;
