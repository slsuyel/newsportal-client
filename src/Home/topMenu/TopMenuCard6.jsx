/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const TopMenuCard6 = ({ allNews }) => {
    if (!allNews || !Array.isArray(allNews)) {
        return null;
    }
    const slicedNews = allNews.slice(5, 11);

    return (
        <>
            {slicedNews.map((newsItem, index) => (
                <div key={index} style={{ marginBottom: '2px' }} className="align-items-center d-flex gap-2 mb-1 newscard p-2 rounded-1 ">
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
                        <Link to={`/posts/${newsItem._id}`} className="text-decoration-none ">
                            <p style={{ fontSize: '15px' }} className="mb-0 fw-normal lh-base">{newsItem.title.slice(0, 55)}...</p>
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
};

export default TopMenuCard6;
