import { GetExchangeRequestResponse } from "../../interfaces/request/getExchangeRequestResponse";
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

  handleRequest: (requestID: string, status: number) => {
    return axiosClient.put(
      `http://localhost:8088/api/request/handle-request/${status}/${requestID}`
    );
  },
};

export default requestAPI;
