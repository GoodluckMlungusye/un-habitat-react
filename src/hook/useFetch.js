import { useState, useEffect } from "react";
import apiService from "../services/api-services";

function useFetch(wsfunction) {

    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

     useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await apiService.getData(wsfunction)
                if (response.status !== 200) {
                    throw new Error("Error fetching data");
                } else {
                    setErrorMessage('');
                    setResults(response.data);
                }
            } catch (error) {
                setErrorMessage(error.message);
                setResults([]);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData()
    }, [wsfunction]);

    return { results, isLoading, errorMessage}
}

export default useFetch;

