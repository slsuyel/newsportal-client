import { Link } from "react-router-dom";
import NewsCard from "./NewsCard";

const Hero = () => {
    return (
        <div className="row w-100 mx-auto">
            <div className="col-md-6 position-relative">
                <div className="img-contain">
                    <img src="https://backend.newsnow24.com/storage/photos/shares/news/2023/08/18/file_1692372304.jpg" alt="Zoomable Image" />
                    <div className="overlay"></div>
                </div>

                <div className="position-absolute title-text">
                    <span className="bg-white px-2 py-1 rounded text-danger text-nowrap text-sm"> <i className="fa-solid fa-clock"></i> ২ ঘন্টা আগে</span>
                    <Link className="text-decoration-none text-white ">  <h4 className="mt-3">ভোটগ্রহণ কর্মকর্তাদের নিয়োগ নীতিমালা নিয়ে বসছে ইসি</h4></Link>
                </div>
            </div>

            <div className="col-md-3 ">
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </div>

            <div className="col-md-3">
                <div>
                    <a href="" className="text-center">  <img src="http://backend.newsnow24.com/storage/photos/shares/Ads/kishwan.gif" alt="" className="img-fluid rounded shadow-sm" /></a>
                </div>
                <NewsCard />
            </div>

            <div className="col-md-3 ">
                <NewsCard />
                <NewsCard />
            </div>

            <div className="col-md-3 ">
                <NewsCard />
                <NewsCard />
            </div>

            <div className="col-md-3 ">
                <NewsCard />
                <NewsCard />
            </div>

            <div className="col-md-3 ">
                <NewsCard />
                <NewsCard />
            </div>


        </div>
    );
};

export default Hero;