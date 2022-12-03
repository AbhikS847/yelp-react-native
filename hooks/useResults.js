import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () =>{
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async(search) =>{
        try{
            const response = await yelp.get('/search',{
                params:{
                    limit: 50,
                    term: search,
                    location:'Melbourne'
                }
            });
            setResults(response.data.businesses);
        }
        catch(e){
            setErrorMessage('Something went wrong');
        }
    };

    useEffect(()=>{
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessage];
};