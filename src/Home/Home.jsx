import Hero from "./Hero";
import NewsTab from "./NewsTab";

import TopMenu from "./shared/TopMenu";

const Home = () => {
    return (
        <div className="mt-5">
            <Hero />

            <TopMenu title={'টপ টেন'} NewsTabComponent={NewsTab} />
            <TopMenu title={'জাতীয়'} />
            <TopMenu title={'রাজনীতি'} />
            <TopMenu title={'বাংলাদেশ'} />
           
        </div>
    );
};

export default Home;