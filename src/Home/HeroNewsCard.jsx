/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { baseUrl } from "../baseurl/baseurl";

const HeroNewsCard = ({ allNews }) => {
    // console.log(allNews);
    return (
        <div className="row w-100 mx-auto p-0">
            {
                allNews.slice(0, 8).map(news => <div key={news._id} className="col-md-3 ">
                    <div style={{ marginBottom: '2px' }} className="align-items-center d-flex gap-2 mb-1 newscard p-2 rounded-1 ">
                        <div>
                            <img src={`${baseUrl}${news.banner}`} alt="" className="img-fluid mb-1" width={'180px'} />
                            <span className="ms-2 text-danger text-nowrap text-sm"> <i className="fa-solid fa-clock"></i> ২ ঘন্টা আগে</span>
                        </div>
                        <div>
                            <p className="mb-0 category-tittle">{news?.selectedCategoryValues && news.selectedCategoryValues.length > 0
                                ? news.selectedCategoryValues.map((item, index) => (
                                    <span key={index}>
                                        {item}
                                        {index !== news.selectedCategoryValues.length - 1 ? ',' : ''}
                                    </span>
                                ))
                                : null} </p>
                            <Link to={`/posts/${news._id}`} className="text-decoration-none text-dark ">
                            <p style={{ fontSize: '14px' }} className="mb-0 fw-normal lh-base">{news.title.slice(0, 60)}...</p>
                            </Link>
                        </div>
                    </div>
                </div>)
            }


        </div>
    );
};

export default HeroNewsCard;