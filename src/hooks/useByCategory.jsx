import { useState, useEffect } from "react";
 import { baseUrl } from "../baseurl/baseurl";

function useByCategory(category) {
    const [newsByCategory, setNewsByCategory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // console.log(category);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${baseUrl}/news/${category}`);
                const data = await response.json();
                setNewsByCategory(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching news data:", error);
                setIsLoading(false);
            }
        }

        fetchData();
    }, [category]);

    return { newsByCategory, isLoading };
}

export default useByCategory;
