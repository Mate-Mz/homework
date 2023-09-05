import { useEffect, useState } from "react"

const REACT_APP_API_KEY = "1q2PiwUd6RyXqC4MoC9Dhb6Q1M5qurYU9Gc4pLJgQYeYOr-zxQ";

const useFetch = ({ url, method }) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        fetch(url, {
            method,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${REACT_APP_API_KEY}`,
            }
        })
        .then((res) => {
            if (!res.ok) throw new Error("Response failed");
            return res.json();
        })
        .then(data => setResponse(data))
        .catch(err => setError(err))
        .finally(setLoading(false));

        return () =>{
            setResponse(null);
            setError(null);
            setLoading(false);
        }

    }, [url, method]);

    return {response, error, loading};
}

export default useFetch