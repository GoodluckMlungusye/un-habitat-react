// import { useState } from "react";

// import duftApiService from "src/duft/services/duftApiService";

// function RunQuery(query, connectionId) {

//     const [results, setResults] = useState({})
//     const [isLoading, setIsLoading] = useState(false);
//     const [errorMessage, setErrorMessage] = useState('');
//     const body = {
//         query,
//         data_connection_id: connectionId
//     };

//     const displayResults = async () => {
//         try {
//             setIsLoading(true);
//             const response = await duftApiService.runQuery(body);
//             if (response.status !== 200) {
//                 throw new Error(response.message);
//             } else {
//                 setErrorMessage('');
//                 setResults(response);
//             }
//         } catch (error) {
//             setErrorMessage(error.message);
//             setResults({});
//         } finally {
//             setIsLoading(false);
//         }
//     }

//     return { results, isLoading, errorMessage, displayResults }
// }

// export default RunQuery;