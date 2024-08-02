import { useState, useEffect } from "react";

import apiService from "../services/api-services";
import { DEFAULT_QUERY_PARAMS } from "../auth/api";

function useFetch(wsfunction) {

    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

     useEffect(() => {

        const queryParams = {
            wstoken: DEFAULT_QUERY_PARAMS.wstoken,
            wsfunction,
            moodlewsrestformat: DEFAULT_QUERY_PARAMS.moodlewsrestformat
        };
    
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await apiService.getData(queryParams);
                if (response.status !== 200) {
                    throw new Error(response.message);
                } else {
                    setErrorMessage('');
                    setResults(response);
                }
            } catch (error) {
                setErrorMessage(error.message);
                setResults({});
            } finally {
                setIsLoading(false);
            }
        }
        fetchData()
    }, []);

    return { results, isLoading, errorMessage}
}

export default useFetch;

