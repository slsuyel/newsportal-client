import { Link } from "react-router-dom";
import NewsCard from "./NewsCard";
import useAllNews from "../hooks/useAllNews";
import SkeletonLoader from "../components/utilities/SkeletonLoader";
import NewsCard3 from "./NewsCard3";
import HeroNewsCard from "./HeroNewsCard";
import { baseUrl } from "../baseurl/baseurl";

const Hero = () => {

    const [allNews, , isLoading] = useAllNews('news')

    if (isLoading) {
        return <SkeletonLoader />
    }

    const first = allNews[1]

    return (
        <div className="row w-100 mx-auto mx-4">

            <div className="col-md-6 position-relative">
                <div className="img-contain">
                    <img src= {`${baseUrl}${first.banner}`} alt="Zoomable Image" />
                    <div className="overlay"></div>
                </div>

                <div className="position-absolute title-text">
                    <span className="bg-white px-2 py-1 rounded text-danger text-nowrap text-sm"> <i className="fa-solid fa-clock"></i> ২ ঘন্টা আগে</span>
                    <Link to={`/posts/${first._id}`} className="text-decoration-none text-white ">  <h4 className="mt-3">{first.title}</h4></Link>
                </div>
            </div>

            <NewsCard3 allNews={allNews} />

            <div className="col-md-3">
                <div className="w-100 mx-auto">
                    <a href="" className="text-center">  <img src="http://backend.newsnow24.com/storage/photos/shares/Ads/kishwan.gif" alt="" className="img-fluid rounded shadow-sm " /></a>
                </div>
                <NewsCard />
            </div>

            <HeroNewsCard allNews={allNews} />


        </div>
    );
};

export default Hero;