import { useState, useEffect } from 'react';
import { baseUrl } from '../baseurl/baseurl';

function useLatestNews() {
    const [newsData, setNewsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchLatestNews() {
            try {
                const response = await fetch(`${baseUrl}/latestnews`);
                const data = await response.json();
                setNewsData(data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching latest news:', error);
                setIsLoading(false);
            }
        }

        fetchLatestNews();
    }, []);

    return { newsData, isLoading };
}

export default useLatestNews;
