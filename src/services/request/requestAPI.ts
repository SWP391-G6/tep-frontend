import { GetExchangeRequestResponse } from "../../interfaces/request/getExchangeRequestResponse";
import { GetExchangeRequestSentResponse } from "../../interfaces/request/getExchangeRequestSentResponse";
import { NewExchangeRequest } from "../../interfaces/request/newExchangeRequest";
import axiosClient from "../axiosClient";

const requestAPI = {
  createExchangeRequest: (param: NewExchangeRequest) => {
    return axiosClient.post("request/create-request", param);
  },

  getRequestByUserID: (userID: string) => {
    return axiosClient.get<GetExchangeRequestResponse[]>(
      "request/getRequestByReceiver",
      { params: { response_by: userID } }
    );
  },

  getRequestSentByUserID: (userID: string) => {
    return axiosClient.get<GetExchangeRequestSentResponse[]>(
      "request/getRequestByRequestUser",
      { params: { resquest_by: userID } }
    );
  },

  handleRequest: (requestID: string, status: number) => {
    return axiosClient.put(
      `http://localhost:8088/api/request/handle-request/${status}/${requestID}`
    );
  },
};

export default requestAPI;
