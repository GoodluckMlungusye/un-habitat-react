import { API_PARAMS } from "../params/api";
import { DEFAULT_QUERY_PARAMS } from "../params/query";
import axios from 'axios';

const apiService = {

    getData: async (wsfunction) => {
      const queryParams = {
        wstoken: DEFAULT_QUERY_PARAMS.wstoken,
        wsfunction,
        moodlewsrestformat: DEFAULT_QUERY_PARAMS.moodlewsrestformat
      };
      try {
        const response = await axios.get(API_PARAMS.endPoint, {
          params: queryParams,
          headers: API_PARAMS.headers
        });
        return response;
      }
      catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    }
    
  };
  
  export default apiService;
  