import apiService from "../services/api-services";

async function getData(queryParams) {
    try {
        const response = await apiService.getData(queryParams);
        return response;
    } 
    catch (error) {
        throw new Error('Error fetching data: ', error);
    }
}

export default getData;