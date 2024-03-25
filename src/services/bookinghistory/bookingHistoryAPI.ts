import { BookingHistoryByUserIDResponse } from "../../interfaces/bookinghistory/bookingHistoryByUserIDResponse";
import axiosClient from "../axiosClient";

const bookingHistoryAPI = {
    getBookingHistoryListByUserID: (userID: string) => {
        return axiosClient.get<BookingHistoryByUserIDResponse[]>(`service-payment/getTransactionByUserId/${userID}`);
      },
  };
  
  export default bookingHistoryAPI;