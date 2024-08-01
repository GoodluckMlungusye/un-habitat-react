import axiosInstance from "../utils/axios-instance";

const apiService = {
    postData: async (payload) => {
      try {
        const response = await axiosInstance.post('/api', payload);
        return response;
      } catch (error) {
        console.error('Error posting data:', error);
        throw error;
      }
    },
  
    getCourse: async (categoryId) => {
      try {
        const response = await axiosInstance.get(`/api/${categoryId}`);
        return response;
      } catch (error) {
        console.error(`Error fetching course with categoryId ${categoryId}:`, error);
        throw error;
      }
    },
  
    getCourses: async () => {
      try {
        const response = await axiosInstance.get('/api');
        return response;
      } catch (error) {
        console.error('Error fetching courses:', error);
        throw error;
      }
    },
  };
  
  export default apiService;
  