import axiosClient from "../axiosClient";

const userAPI = {
  getUserByID: (userID: string) => {
    return axiosClient.get(`user/details/${userID}`);
  },
};

export default userAPI;
