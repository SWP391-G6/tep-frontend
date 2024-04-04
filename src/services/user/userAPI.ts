import { RegisterRequest } from "../../interfaces/user/registerRequest";
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

  register: (registerRequest: RegisterRequest) => {
    console.log("register: ", registerRequest);
    return axiosClient.post("account/signup", registerRequest);
  },
};

export default userAPI;
