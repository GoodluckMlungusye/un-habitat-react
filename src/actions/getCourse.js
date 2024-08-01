import apiService from "../services/api-services";

async function getCourse(categoryId) {
    try {
        const response = await apiService.getCourse(categoryId);
        return response;
    } 
    catch (error) {
        throw new Error('Error fetching course: ', error);
    }
}

export default getCourse;