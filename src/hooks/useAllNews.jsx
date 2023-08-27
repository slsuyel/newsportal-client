import { useQuery } from "@tanstack/react-query";
import { baseUrl } from "../baseurl/baseurl";

const useAllNews = () => {

    const { refetch, data: allNews = [], isLoading } = useQuery({
        queryKey: ["news",],
        queryFn: async () => {
            const res = await fetch(`${baseUrl}/latestnews`)
            return res.json()
        },
    })
    return [allNews, refetch, isLoading]
};

export default useAllNews;