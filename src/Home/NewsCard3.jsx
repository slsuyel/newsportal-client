/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const NewsCard3 = ({ allNews }) => {

    // console.log(allNews);

    if (!allNews) {
        return null;
    }

    return (
        <div className="col-md-3">
            {
                allNews.slice(8, 11).map(newsItem => (
                    <div key={newsItem._id} style={{ marginBottom: '2px' }} className="align-items-center d-flex gap-2 mb-1 newscard p-2 rounded-1 ">
                        <div>
                            <img src={newsItem.banner} alt="" className="img-fluid mb-1" width={'180px'} />
                            <span className="ms-2 text-danger text-nowrap text-sm"> <i className="fa-solid fa-clock"></i> ২ ঘন্টা আগে</span>
                        </div>

                        <div>
                            <p className="mb-0 category-tittle">
                                {newsItem.selectedCategoryValues && newsItem.selectedCategoryValues.length > 0
                                    ? newsItem.selectedCategoryValues.map((item, index) => (
                                        <span key={index}>
                                            {item}
                                            {index !== newsItem.selectedCategoryValues.length - 1 ? ',' : ''}
                                        </span>
                                    ))
                                    : null}
                            </p>
                            <Link to={`/posts/${newsItem._id}`} className="text-decoration-none text-dark ">
                                <h6 className="fw-normal lh-base mb-3">{newsItem.title.slice(0, 43)}</h6>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default NewsCard3;
