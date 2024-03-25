import { CreateDestinationRequest } from "../../interfaces/destination/createDestinationRequest";
import axiosClient from "../axiosClient";

const destinationAPI = {
  createDestination: (param: CreateDestinationRequest) => {
    return axiosClient.post("destination/createDestination", param);
  },
};
export default destinationAPI;
