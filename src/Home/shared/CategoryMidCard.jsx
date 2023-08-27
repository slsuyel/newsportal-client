/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import NewsMidCard from "../NewsMidCard";
import SkeletonLoader from "../../components/utilities/SkeletonLoader";

const CategoryMidCard = ({ header, Sidebar, isLoading, category }) => {

    if (isLoading) {
        return <SkeletonLoader />
    }

    console.log(category);
    return (
        <div className="mx-4">
            <div className='align-items-end border-2 border-bottom border-secondary-subtle d-flex justify-content-between mt-2 pb-3'>

                <div className="circle-with-text mt-3" style={{ borderBottom: '2px solid red', marginBottom: '-18px', marginLeft: '-12px' }}>
                    <div className="red-circle" />
                    <h2 className=" fw-bold mb-0 opacity-75 pb-2 text-primary">{header}</h2>
                </div>

                <div>
                    <Link to={`/news`} className='onhover text-decoration-none'>আরও দেখুন <i className="fa-solid fa-arrow-right-long"></i></Link>
                </div>
            </div>

            <div className='row mx-auto w-100 my-5'>

                <div className='col-md-3'>
                    <NewsMidCard category={category[7]} />
                    <NewsMidCard category={category[2]} />
                </div>

                <div className="col-md-6">
                    <div className="mb-2 newscard shadow-sm rounded-1">
                        <img src="https://backend.newsnow24.com/storage/photos/shares/news/2023/08/19/file_1692427632.jpg" alt="" className='img-fluid rounded ms-2' />

                        <div className='lh-base ms-2 mt-3 text-start'>

                            <span className="bg-white my-3 rounded text-danger text-nowrap text-sm"> <i className="fa-solid fa-clock"></i> ২ ঘন্টা আগে</span>

                            <Link to={`/news/${category[0]?._id}`} className="text-decoration-none text-dark ">
                                <h6 className="fs-4 lh-base">{category[0]?.title.slice(0, 80)}</h6>
                            </Link>

                            <div style={{ height: 307, overflow: "auto" }} className='border lh-base mb-2 p-2 rounded-1 shadow-sm text-secondary'
                                dangerouslySetInnerHTML={{
                                    __html: `<p>${category[0]?.content.slice(0, 700)} . . . .</p>`
                                }}
                            />

                        </div>
                    </div>

                </div>



                <div className='col-md-3'>
                    {Sidebar && <Sidebar />}

                </div>
            </div>

            <div className='row mx-auto w-100 my-5'>
                <div className="col-md-3">
                    <NewsMidCard category={category[6]} />
                </div>
                <div className="col-md-3">
                    <NewsMidCard category={category[3]} />
                </div>
                <div className="col-md-3">
                    <NewsMidCard category={category[4]} />
                </div>
                <div className="col-md-3">
                    <NewsMidCard category={category[5]} />
                </div>
            </div>

        </div>
    );
};

export default CategoryMidCard;