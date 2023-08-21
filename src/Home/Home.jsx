/* eslint-disable no-unused-vars */
import Hero from "./Hero";

import CategoryMidCard from "./shared/CategoryMidCard";

import TopMenu from "./shared/TopMenu";
import MyAreaNews from "./sidebars/MyAreaNews";
import Sidebar1 from "./sidebars/Sidebar1";

const Home = () => {

    return (
        <div className="mt-5">
        
            <Hero />
            <TopMenu title={'টপ টেন'} Sidebar={Sidebar1} />
            <CategoryMidCard title={'বাংলাদেশ'} Sidebar={MyAreaNews} />
            <TopMenu title={'জাতীয়'} />
            <TopMenu title={'রাজনীতি'} />
        </div>
    );
};

export default Home;