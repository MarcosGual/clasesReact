import {useState, useEffect} from 'react';
import axios from 'axios';

const useAxios = (url) => {

    const [data, setData] = useState([]);
    const [error, setError] = useState({
        message: '',
        isError: false
    });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios(url)
            .then(res => setData(res.data)) //caso de éxito
            .catch(err => setError({
                message: err.message,
                isError: true
            }))
            .finally(() => {
                setTimeout(() => setIsLoading(false), 2000)
            })
    }, [])

    return {data, isLoading, error};
}

export default useAxios;
