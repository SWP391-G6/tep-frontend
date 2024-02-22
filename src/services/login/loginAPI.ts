import axiosClient from "../axiosClient";
import { LoginRequest } from "../../interfaces/login/userLogin";

const loginAPI = {
  login: (credentials: LoginRequest) => {
    return axiosClient.post("user/login", credentials);
  },
};

export default loginAPI;