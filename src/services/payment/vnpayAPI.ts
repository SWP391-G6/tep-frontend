
import { VNPayRequest } from "../../interfaces/payment/vnpayRequest";
import axiosClient from "../axiosClient";

const vnpayAPI = {
  checkout: (VNPayRequest: VNPayRequest) => {
    return axiosClient.post("booking/payment", VNPayRequest);
  },
};

export default vnpayAPI;
