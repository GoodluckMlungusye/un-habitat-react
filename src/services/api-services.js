import axiosInstance from "../utils/axios-instance";
import { API_PARAMS } from "../params/api";

const apiService = {
    postData: async (payload) => {
      try {
        const response = await axiosInstance.post(API_PARAMS.endPoint, payload);
        return response;
      } catch (error) {
        console.error('Error posting data:', error);
        throw error;
      }
    },
  
    getData: async (queryParams) => {
      try {
        const response = await axiosInstance.get(API_PARAMS.endPoint, queryParams);
        return response;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    }
  };
  
  export default apiService;
  