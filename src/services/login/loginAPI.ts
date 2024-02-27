import axiosClient from "../axiosClient";
import { LoginRequest } from "../../interfaces/login/loginRequest";

const loginAPI = {
  login: (credentials: LoginRequest) => {
    return axiosClient.post("user/login", credentials);
  },
};

export default loginAPI;