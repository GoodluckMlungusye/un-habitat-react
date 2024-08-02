import axiosInstance from "../utils/axios-instance";
import { API_AUTH_PARAMS } from "../auth/api";

const apiService = {
  
    postData: async (payload) => {
      try {
        const response = await axiosInstance.post(API_AUTH_PARAMS.endPoint, payload);
        return response;
      } catch (error) {
        console.error('Error posting data:', error);
        throw error;
      }
    },
  
    getData: async (queryParams) => {
      try {
        const response = await axiosInstance.get(API_AUTH_PARAMS.endPoint, queryParams);
        return response;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    }
  };
  
  export default apiService;
  