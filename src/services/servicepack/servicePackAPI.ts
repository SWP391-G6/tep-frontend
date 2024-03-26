import { VnpayRegisterPack } from "../../interfaces/booking/vnpayRegisterPackRequest";
import { ServicePackResponse } from "../../interfaces/servicepack/ServivePackResponse";
import { UpdateServicePackRequest } from "../../interfaces/servicepack/UpdateServicePackRequest";
import axiosClient from "../axiosClient";

const servicePackAPI = {
  getAllServicePack: () => {
    return axiosClient.get<ServicePackResponse[]>("sevicePack/viewAll");
  },

  checkOutServicePack: (param: VnpayRegisterPack) => {
    return axiosClient.post("service-payment/payment", param);
  },

  updateServicePack: (param: UpdateServicePackRequest) => {
    return axiosClient.put("sevicePack/edit", param);
  },
};

export default servicePackAPI;
