

import Hero from "./Hero";
import CategoryMidCard from "./shared/CategoryMidCard";
import TopMenu from "./shared/TopMenu";
import MyAreaNews from "./sidebars/MyAreaNews";
import Sidebar1 from "./sidebars/Sidebar1";

import useLatestNews from "../hooks/useLatestNews";
import useByCategory from "../hooks/useByCategory";

const Home = () => {

    const { newsData, isLoading: latesLoading } = useLatestNews();
    const { newsByCategory, isLoading: categoryLoading } = useByCategory('বাংলাদেশ')
    const { newsByCategory: politics, isLoading: politicsLoading } = useByCategory('রাজনীতি')
    const { newsByCategory: national, isLoading: nationalLoading } = useByCategory('জাতীয়')


    return (
        <div className="mt-5">
            <Hero />
            <TopMenu header={'টপ টেন'} newsData={newsData} isLoading={latesLoading} Sidebar={Sidebar1} />
            <CategoryMidCard category={newsByCategory} isLoading={categoryLoading} header={'বাংলাদেশ'} Sidebar={MyAreaNews} />
            <TopMenu header={'জাতীয়'} newsData={national} isLoading={nationalLoading} />

            <CategoryMidCard category={politics} isLoading={politicsLoading} header={'রাজনীতি'} />
        </div>
    );
};

export default Home;
