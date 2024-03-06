import axiosClient from "../axiosClient";
import { LoginRequest } from "../../interfaces/login/loginRequest";

const loginAPI = {
  login: (param: LoginRequest) => {
    return axiosClient.post("account/login", param);
  },
};

export default loginAPI;
