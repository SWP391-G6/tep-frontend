import { VnpayRegisterPack } from "../../interfaces/booking/vnpayRegisterPackRequest";
import { ServicePackResponse } from "../../interfaces/servicepack/ServivePackResponse";
import axiosClient from "../axiosClient";

const servicePackAPI = {
  getAllServicePack: () => {
    return axiosClient.get<ServicePackResponse[]>("sevicePack/viewAll");
  },

  checkOutServicePack: (param: VnpayRegisterPack) => {
    return axiosClient.post("service-payment/payment", param);
  },
};

export default servicePackAPI;
