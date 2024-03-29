import { GetTransactionHistoryByUserIDResponse } from "../../interfaces/transactionhistory/getTransactionHistoryByUserIDResponse";
import axiosClient from "../axiosClient";

const transactionHistoryAPI = {
  getTransactionHistoryByUserID: (userID: string) => {
    return axiosClient.get<GetTransactionHistoryByUserIDResponse[]>(
      `service-payment/getTransactionByUserId/${userID}`
    );
  },
};

export default transactionHistoryAPI;
