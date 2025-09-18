import { useEffect, useState } from "react";

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(!url) return; 

        const controller = new AbortController();
        const signal = controller.signal;

        setLoading(true);
        setError(null);

        fetch(url, { signal })
            .then((res) => {
                if(!res.ok) {
                    throw new Error(`HTTP error! Status ${res.status}`);
                }
                return res.json();
            })
            .then(json => setData(json))
            .catch(err => {
                if(err.name !== 'AbortError') {
                    setError(err);
                }
            })
            .finally(() => setLoading(false));

            return () => controller.abort();
    }, [url]);

    return { data, loading, error };  
}