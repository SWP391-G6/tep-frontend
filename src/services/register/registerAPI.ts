import axiosClient from "../axiosClient";
import { RegisterRequest } from "../../interfaces/register/registerRequest";

const registerAPI = {
  register: (userData: RegisterRequest) => {
    return axiosClient.post("user/register", userData);
  },
};

export default registerAPI;