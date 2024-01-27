import axios, { AxiosError } from "axios";

const axiosClient = axios.create({ baseURL: "" });

axiosClient.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error: AxiosError<{ content: string }>) => {
      return error.response?.data;
    }
  );
  export default axiosClient;