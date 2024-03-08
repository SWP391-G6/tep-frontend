import { GetExchangeRequestResponse } from "../../interfaces/request/getExchangeRequestResponse";
import { NewExchangeRequest } from "../../interfaces/request/newExchangeRequest";
import axiosClient from "../axiosClient";

const requestAPI = {
  createExchangeRequest: (param: NewExchangeRequest) => {
    return axiosClient.post("request/create-request", param);
  },

  getRequestByUserID: (userID: string) => {
    return axiosClient.get<GetExchangeRequestResponse[]>(
      "request/getRequestByRequestUser",
      { params: {resquest_by: userID} }
    );
  },
};

export default requestAPI;
