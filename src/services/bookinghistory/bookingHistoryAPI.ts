import { BookingHistoryByUserIDResponse } from "../../interfaces/bookinghistory/bookingHistoryByUserIDResponse";
import axiosClient from "../axiosClient";

const bookingHistoryAPI = {
    getBookingHistoryListByUserID: (userID: string) => {
        return axiosClient.get<BookingHistoryByUserIDResponse[]>(`booking/getBookingByUserId/${userID}`);
      },
  };
  
  export default bookingHistoryAPI;