import { NewExchangeRequest } from "../../interfaces/request/newExchangeRequest";
import axiosClient from "../axiosClient";

const requestAPI = {
  createExchangeRequest: (param: NewExchangeRequest) => {
    return axiosClient.post("request/create-request", param);
  },
};

export default requestAPI;
