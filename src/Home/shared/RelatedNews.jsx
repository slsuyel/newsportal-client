import NewsCard from "../NewsCard";
import NewsMidCard from "../NewsMidCard";

const RelatedNews = () => {
    return (
        <div className="my-5">
            <div className="circle-with-text mt-3" style={{ borderBottom: '2px solid red', marginBottom: '-18px', marginLeft: '-12px' }}><div className="red-circle" /><h2 className=" fw-bold mb-0 opacity-75 pb-2 text-primary">সিলেট থেকে আরও দেখুন</h2></div>

            <div className="row w-100 mx-auto my-5">
                <div className="col-md-4">
                    <NewsMidCard />
                    <NewsMidCard />
                </div>
                <div className="col-md-4">
                    <NewsCard />
                    <NewsCard />

                    <div className="mx-auto my-2">
                        <a href="" className="text-center">  <img src="http://backend.newsnow24.com/storage/photos/shares/Ads/kishwan.gif" alt="" className="img-fluid rounded shadow-sm" /></a>
                    </div>
                    <NewsCard />
                    <NewsCard />
                </div>
                <div className="col-md-4">
                    <NewsMidCard />
                    <NewsMidCard />
                </div>

            </div>


        </div>
    );
};

export default RelatedNews;