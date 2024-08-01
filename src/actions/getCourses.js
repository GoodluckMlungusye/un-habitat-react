import apiService from "../services/api-services";

async function getCourses() {
    try {
        const response = await apiService.getCourses();
        return response.system;
    } 
    catch (error) {
        throw new Error('Error fetching courses: ', error);
    }
}

export default getCourses;