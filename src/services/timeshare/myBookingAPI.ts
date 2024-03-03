import { MyBookingResponse } from "../../interfaces/mybooking/myBookingResponse";
import axiosClient from "../axiosClient";

const myBookingAPI = {
    getBookingByUserId: (user_id: string) => {
        return axiosClient.get<MyBookingResponse>(`booking/getBookingByUserId/${user_id}`);
    },

};

export default myBookingAPI;