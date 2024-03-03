import { MyRequestResponse } from "../../interfaces/myRequest/myRequestResponse";
import axiosClient from "../axiosClient";

const myRequestAPI = {
    getRequestByRequestUser: (user_id: string) => {
        return axiosClient.get<MyRequestResponse>(`request/getRequestByRequestUser?request_by=${user_id}`);
    },

};

export default myRequestAPI;