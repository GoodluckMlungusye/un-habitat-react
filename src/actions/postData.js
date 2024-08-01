import apiService from "../services/api-services";

async function postData(body) {
    try {
        const response = await apiService.postData(body);
        return response;
    } catch (error) {
        throw new Error('Error posting data: ', error);
    }
}

export default postData;